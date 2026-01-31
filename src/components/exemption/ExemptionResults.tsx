'use client';

import Link from 'next/link';
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  FileText,
  ExternalLink,
  RefreshCw,
  Clock,
  AlertCircle,
  ArrowRight,
  Check,
  X,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Alert } from '@/components/ui/Alert';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { PROPERTY_TYPE_OPTIONS } from '@/lib/constants';
import type {
  ExemptionInputs,
  ExemptionReason,
  EvidenceDocument,
} from './ExemptionForm';

interface ExemptionResultsProps {
  inputs: ExemptionInputs;
  onReset: () => void;
}

// Exemption type configuration
type ExemptionType = 'cost-cap' | 'consent' | 'devaluation' | 'heritage';

interface ExemptionTypeInfo {
  id: ExemptionType;
  name: string;
  description: string;
  validForYears: number;
}

const EXEMPTION_TYPES: Record<ExemptionType, ExemptionTypeInfo> = {
  'cost-cap': {
    id: 'cost-cap',
    name: 'Cost Cap Exemption',
    description: 'You have spent the maximum £10,000 on improvements without reaching EPC C.',
    validForYears: 5,
  },
  consent: {
    id: 'consent',
    name: 'Third Party Consent Exemption',
    description: 'A third party (freeholder, planning authority, etc.) has refused consent for necessary works.',
    validForYears: 5,
  },
  devaluation: {
    id: 'devaluation',
    name: 'Devaluation Exemption',
    description: 'Improvements would reduce the property value by more than the cost of the improvements.',
    validForYears: 5,
  },
  heritage: {
    id: 'heritage',
    name: 'Listed Building / Conservation Exemption',
    description: 'Heritage protections prevent energy efficiency works that would harm the building\'s character.',
    validForYears: 5,
  },
};

// Evidence requirements per exemption type
interface EvidenceRequirement {
  id: EvidenceDocument;
  label: string;
  required: boolean;
}

const EVIDENCE_REQUIREMENTS: Record<ExemptionType, EvidenceRequirement[]> = {
  'cost-cap': [
    { id: 'current-epc', label: 'Current EPC certificate', required: true },
    { id: 'installer-quotes', label: 'Minimum 3 quotes from installers', required: true },
    { id: 'structural-report', label: 'Structural engineer report (if relevant)', required: false },
    { id: 'damp-assessment', label: 'Damp/condensation risk assessment', required: false },
  ],
  consent: [
    { id: 'current-epc', label: 'Current EPC certificate', required: true },
    { id: 'freeholder-refusal', label: 'Written refusal from freeholder', required: true },
    { id: 'planning-refusal', label: 'Planning refusal letter (if applicable)', required: false },
    { id: 'installer-quotes', label: 'Quotes showing what works were proposed', required: false },
  ],
  devaluation: [
    { id: 'current-epc', label: 'Current EPC certificate', required: true },
    { id: 'valuation-report', label: 'Independent property valuation report', required: true },
    { id: 'installer-quotes', label: 'Quotes for proposed improvements', required: true },
  ],
  heritage: [
    { id: 'current-epc', label: 'Current EPC certificate', required: true },
    { id: 'listed-officer-advice', label: 'Listed building officer advice', required: true },
    { id: 'conservation-officer-advice', label: 'Conservation officer advice', required: false },
    { id: 'planning-refusal', label: 'Planning refusal (if applied)', required: false },
  ],
};

// Eligibility assessment
type EligibilityLevel = 'green' | 'amber' | 'red';

interface EligibilityAssessment {
  level: EligibilityLevel;
  title: string;
  description: string;
}

function mapReasonToType(reason: ExemptionReason): ExemptionType {
  switch (reason) {
    case 'cost-cap':
      return 'cost-cap';
    case 'third-party-consent':
      return 'consent';
    case 'devaluation':
      return 'devaluation';
    case 'wall-unsuitable':
      return 'cost-cap'; // Falls under cost cap if expensive to fix
    case 'listed-building':
    case 'conservation-area':
      return 'heritage';
    default:
      return 'cost-cap';
  }
}

function assessEligibility(inputs: ExemptionInputs): EligibilityAssessment {
  const exemptionType = mapReasonToType(inputs.exemptionReason);
  const requirements = EVIDENCE_REQUIREMENTS[exemptionType];
  const requiredDocs = requirements.filter((r) => r.required);
  const hasAllRequired = requiredDocs.every((doc) =>
    inputs.evidenceAvailable.includes(doc.id)
  );
  const hasCurrentEPC = inputs.evidenceAvailable.includes('current-epc');

  // Cost cap specific checks
  if (exemptionType === 'cost-cap') {
    if (inputs.spendToDate === 'over-10000' && hasAllRequired) {
      return {
        level: 'green',
        title: 'Likely eligible - strong case',
        description: 'You have spent over £10,000 and have the required documentation.',
      };
    }
    if (inputs.spendToDate === '5000-10000' && hasCurrentEPC) {
      return {
        level: 'amber',
        title: 'Possibly eligible - additional evidence may be needed',
        description: 'You are approaching the cost cap. Obtain more quotes to demonstrate you cannot reach EPC C within £10,000.',
      };
    }
    if (inputs.spendToDate === 'under-5000' || inputs.spendToDate === 'none') {
      return {
        level: 'red',
        title: 'Unlikely eligible - does not meet criteria',
        description: 'Cost cap exemption requires demonstrating that EPC C cannot be achieved for £10,000 or less.',
      };
    }
  }

  // Heritage exemption checks
  if (exemptionType === 'heritage') {
    const hasHeritageEvidence =
      inputs.evidenceAvailable.includes('listed-officer-advice') ||
      inputs.evidenceAvailable.includes('conservation-officer-advice');

    if ((inputs.isListed || inputs.inConservationArea) && hasHeritageEvidence) {
      return {
        level: 'green',
        title: 'Likely eligible - strong case',
        description: 'Your property has heritage protections and you have supporting documentation from the relevant authority.',
      };
    }
    if (inputs.isListed || inputs.inConservationArea) {
      return {
        level: 'amber',
        title: 'Possibly eligible - additional evidence may be needed',
        description: 'You need written advice from the listed building or conservation officer confirming works are not permitted.',
      };
    }
    return {
      level: 'red',
      title: 'Unlikely eligible - does not meet criteria',
      description: 'Heritage exemption requires the property to be listed or in a conservation area.',
    };
  }

  // Consent exemption checks
  if (exemptionType === 'consent') {
    if (inputs.evidenceAvailable.includes('freeholder-refusal') || inputs.evidenceAvailable.includes('planning-refusal')) {
      return {
        level: 'green',
        title: 'Likely eligible - strong case',
        description: 'You have written evidence of consent being refused.',
      };
    }
    return {
      level: 'amber',
      title: 'Possibly eligible - additional evidence may be needed',
      description: 'You need written evidence that consent has been formally refused.',
    };
  }

  // Devaluation exemption checks
  if (exemptionType === 'devaluation') {
    if (inputs.evidenceAvailable.includes('valuation-report') && inputs.evidenceAvailable.includes('installer-quotes')) {
      return {
        level: 'green',
        title: 'Likely eligible - strong case',
        description: 'You have a valuation report and quotes demonstrating devaluation.',
      };
    }
    return {
      level: 'amber',
      title: 'Possibly eligible - additional evidence may be needed',
      description: 'You need an independent valuation report showing the improvement cost exceeds the resulting devaluation.',
    };
  }

  // Default
  if (hasAllRequired) {
    return {
      level: 'green',
      title: 'Likely eligible - strong case',
      description: 'You have the key documentation needed for your exemption application.',
    };
  }

  return {
    level: 'amber',
    title: 'Possibly eligible - additional evidence may be needed',
    description: 'Review the checklist below to ensure you have all required documentation.',
  };
}

const eligibilityStyles: Record<EligibilityLevel, { bg: string; border: string; icon: typeof CheckCircle; iconColor: string }> = {
  green: {
    bg: 'bg-success-50',
    border: 'border-success-200',
    icon: CheckCircle,
    iconColor: 'text-success-500',
  },
  amber: {
    bg: 'bg-warning-50',
    border: 'border-warning-200',
    icon: AlertTriangle,
    iconColor: 'text-warning-500',
  },
  red: {
    bg: 'bg-danger-50',
    border: 'border-danger-200',
    icon: XCircle,
    iconColor: 'text-danger-500',
  },
};

export function ExemptionResults({ inputs, onReset }: ExemptionResultsProps) {
  const exemptionType = mapReasonToType(inputs.exemptionReason);
  const exemptionInfo = EXEMPTION_TYPES[exemptionType];
  const eligibility = assessEligibility(inputs);
  const requirements = EVIDENCE_REQUIREMENTS[exemptionType];
  const styles = eligibilityStyles[eligibility.level];
  const EligibilityIcon = styles.icon;

  const propertyTypeName = PROPERTY_TYPE_OPTIONS.find(
    (o) => o.value === inputs.propertyType
  )?.label || inputs.propertyType;

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-primary-800 sm:text-3xl">
          Your Exemption Assessment
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600">
          Based on your {propertyTypeName.toLowerCase()} with current EPC rating {inputs.currentRating}
        </p>
      </div>

      {/* Exemption Type Identified */}
      <Card padding="md" variant="highlighted">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
              <ShieldCheck className="h-6 w-6 text-primary-600" aria-hidden="true" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-800">
              {exemptionInfo.name}
            </h3>
            <p className="mt-1 text-neutral-600">{exemptionInfo.description}</p>
            <div className="mt-3">
              <Badge variant="primary">
                Valid for {exemptionInfo.validForYears} years from registration
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Eligibility Assessment */}
      <Card padding="md" className={cn(styles.bg, styles.border, 'border')}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <EligibilityIcon className={cn('h-8 w-8', styles.iconColor)} aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-800">{eligibility.title}</h3>
            <p className="mt-1 text-neutral-600">{eligibility.description}</p>
          </div>
        </div>
      </Card>

      {/* Evidence Checklist */}
      <Card padding="md">
        <CardHeader>
          <CardTitle as="h3" className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary-600" aria-hidden="true" />
            Evidence Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Required Documents */}
            <div>
              <h4 className="mb-3 font-medium text-neutral-800">Required Documents</h4>
              <ul className="space-y-2">
                {requirements
                  .filter((r) => r.required)
                  .map((req) => {
                    const hasDocument = inputs.evidenceAvailable.includes(req.id);
                    return (
                      <li key={req.id} className="flex items-center gap-3">
                        {hasDocument ? (
                          <Check className="h-5 w-5 text-success-500" aria-hidden="true" />
                        ) : (
                          <X className="h-5 w-5 text-danger-400" aria-hidden="true" />
                        )}
                        <span
                          className={cn(
                            hasDocument ? 'text-neutral-700' : 'text-danger-600 font-medium'
                          )}
                        >
                          {req.label}
                          {!hasDocument && ' (missing)'}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>

            {/* Recommended Supporting Documents */}
            <div>
              <h4 className="mb-3 font-medium text-neutral-800">Recommended Supporting Documents</h4>
              <ul className="space-y-2">
                {requirements
                  .filter((r) => !r.required)
                  .map((req) => {
                    const hasDocument = inputs.evidenceAvailable.includes(req.id);
                    return (
                      <li key={req.id} className="flex items-center gap-3">
                        {hasDocument ? (
                          <Check className="h-5 w-5 text-success-500" aria-hidden="true" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-neutral-300" />
                        )}
                        <span className="text-neutral-600">{req.label}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>

            {/* Missing Documents Warning */}
            {requirements.some((r) => r.required && !inputs.evidenceAvailable.includes(r.id)) && (
              <Alert variant="warning" title="Missing Required Documents">
                You are missing one or more required documents. Gather these before submitting your exemption application to avoid delays or rejection.
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Registration Process */}
      <Card padding="md">
        <CardHeader>
          <CardTitle as="h3" className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-primary-600" aria-hidden="true" />
            Registration Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                1
              </span>
              <div>
                <p className="font-medium text-neutral-800">Gather all evidence documents</p>
                <p className="text-sm text-neutral-600">
                  Collect all required documentation as listed above. Ensure quotes are dated and from registered installers.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                2
              </span>
              <div>
                <p className="font-medium text-neutral-800">Create an account on the PRS Exemptions Register</p>
                <p className="text-sm text-neutral-600">
                  Visit the GOV.UK PRS Exemptions Register and create an account if you don&apos;t have one.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                3
              </span>
              <div>
                <p className="font-medium text-neutral-800">Submit your exemption application with evidence</p>
                <p className="text-sm text-neutral-600">
                  Complete the online form and upload your supporting documents. Select the appropriate exemption category.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                4
              </span>
              <div>
                <p className="font-medium text-neutral-800">Receive confirmation</p>
                <p className="text-sm text-neutral-600">
                  You will receive confirmation of your exemption registration. Keep this for your records.
                </p>
              </div>
            </li>
          </ol>

          <div className="mt-6">
            <a
              href="https://www.gov.uk/government/publications/private-rented-sector-exemptions-register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 font-medium text-white transition-colors hover:bg-primary-700"
            >
              Visit PRS Exemptions Register
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Important Information Box */}
      <Card padding="md" variant="default" className="border-2 border-warning-200 bg-warning-50">
        <CardHeader>
          <CardTitle as="h3" className="flex items-center gap-2 text-warning-700">
            <AlertCircle className="h-5 w-5" aria-hidden="true" />
            Important Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm text-warning-800">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-medium">Exemption Duration: 5 years</p>
                <p>Your exemption will be valid for 5 years from the date of registration. You must re-register or achieve EPC C before it expires.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <RefreshCw className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-medium">Renewal Requirements</p>
                <p>Before your exemption expires, you must either improve the property to EPC C or re-apply for exemption if circumstances still apply.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-medium">Regulations May Change</p>
                <p>Future legislation may tighten exemption criteria or increase the cost cap. Monitor changes to ensure ongoing compliance.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-medium">Risks of Relying on Exemption</p>
                <p>When selling the property, buyers may factor in the EPC rating. Some lenders and insurers may have requirements around EPC ratings. Consider improving where feasible.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button
          variant="outline"
          onClick={onReset}
          leftIcon={<RefreshCw className="h-4 w-4" aria-hidden="true" />}
        >
          Start New Assessment
        </Button>
        <Button
          variant="primary"
          onClick={() => window.print()}
          leftIcon={<FileText className="h-4 w-4" aria-hidden="true" />}
        >
          Print Summary
        </Button>
      </div>

      {/* Related Content */}
      <div className="pt-8 border-t border-neutral-200">
        <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/regulations/cost-cap-exemptions"
            className="block rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-primary-300 hover:bg-primary-50"
          >
            <h4 className="font-medium text-primary-700">Cost Cap and Exemptions</h4>
            <p className="mt-1 text-sm text-neutral-600">
              Full guide to exemption types and requirements
            </p>
          </Link>

          <Link
            href={`/property-types/${inputs.propertyType}`}
            className="block rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-primary-300 hover:bg-primary-50"
          >
            <h4 className="font-medium text-primary-700">{propertyTypeName} Guide</h4>
            <p className="mt-1 text-sm text-neutral-600">
              Upgrade advice for your property type
            </p>
          </Link>

          <Link
            href="/tools/cost-calculator"
            className="block rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-primary-300 hover:bg-primary-50"
          >
            <h4 className="font-medium text-primary-700">Cost Calculator</h4>
            <p className="mt-1 text-sm text-neutral-600">
              Estimate upgrade costs for your property
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExemptionResults;
