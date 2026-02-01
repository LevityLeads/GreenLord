'use client';

import { useState, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  FileCheck,
  Home,
  Wrench,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { Checkbox } from '@/components/ui/Checkbox';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';
import { PROPERTY_TYPE_OPTIONS } from '@/lib/constants';
import type { PropertyType, EPCRating } from '@/lib/types';

// Types for the exemption checker
export type ExemptionEPCRating = 'D' | 'E' | 'F' | 'G';

export type ImprovementMade =
  | 'loft-insulation'
  | 'cavity-wall'
  | 'internal-solid-wall'
  | 'external-solid-wall'
  | 'double-glazing'
  | 'new-boiler'
  | 'smart-controls'
  | 'led-lighting'
  | 'floor-insulation'
  | 'draught-proofing';

export type SpendToDate = 'none' | 'under-5000' | '5000-10000' | 'over-10000';

export type ExemptionReason =
  | 'cost-cap'
  | 'third-party-consent'
  | 'devaluation'
  | 'wall-unsuitable'
  | 'listed-building'
  | 'conservation-area';

export type EvidenceDocument =
  | 'installer-quotes'
  | 'current-epc'
  | 'freeholder-refusal'
  | 'planning-refusal'
  | 'listed-officer-advice'
  | 'conservation-officer-advice'
  | 'structural-report'
  | 'damp-assessment'
  | 'valuation-report';

export interface ExemptionInputs {
  // Step 1 - Current Situation
  currentRating: ExemptionEPCRating;
  propertyType: PropertyType;
  isListed: boolean;
  inConservationArea: boolean;
  // Step 2 - Improvements Made
  improvementsMade: ImprovementMade[];
  spendToDate: SpendToDate;
  // Step 3 - Exemption Reason
  exemptionReason: ExemptionReason;
  // Step 4 - Evidence Available
  evidenceAvailable: EvidenceDocument[];
}

interface ExemptionFormProps {
  onSubmit: (inputs: ExemptionInputs) => void;
  isProcessing?: boolean;
}

type FormErrors = Partial<Record<keyof ExemptionInputs, string>>;

const EXEMPTION_STEPS = [
  {
    id: 'situation',
    title: 'Current Situation',
    description: 'Tell us about your property and its current EPC rating',
  },
  {
    id: 'improvements',
    title: 'Improvements Made',
    description: 'What energy efficiency improvements have you already made?',
  },
  {
    id: 'reason',
    title: 'Exemption Reason',
    description: 'Why are further improvements not possible?',
  },
  {
    id: 'evidence',
    title: 'Evidence Available',
    description: 'What documentation do you have to support your exemption claim?',
  },
];

const stepIcons = [Home, Wrench, AlertCircle, FileText];

// Options for dropdowns and selections
const EXEMPTION_EPC_OPTIONS = [
  { value: 'D', label: 'D (55-68)' },
  { value: 'E', label: 'E (39-54)' },
  { value: 'F', label: 'F (21-38)' },
  { value: 'G', label: 'G (1-20)' },
];

const SPEND_OPTIONS = [
  { value: 'none', label: 'No spend yet (planning stage)' },
  { value: 'under-5000', label: 'Under £5,000' },
  { value: '5000-10000', label: '£5,000 - £10,000' },
  { value: 'over-10000', label: 'Over £10,000' },
];

const IMPROVEMENT_OPTIONS: { id: ImprovementMade; label: string; description?: string }[] = [
  { id: 'loft-insulation', label: 'Loft insulation to 270mm+', description: 'Recommended depth for energy efficiency' },
  { id: 'cavity-wall', label: 'Cavity wall insulation', description: 'If applicable to your property' },
  { id: 'internal-solid-wall', label: 'Internal solid wall insulation' },
  { id: 'external-solid-wall', label: 'External solid wall insulation' },
  { id: 'double-glazing', label: 'Double or secondary glazing' },
  { id: 'new-boiler', label: 'New condensing boiler' },
  { id: 'smart-controls', label: 'Smart heating controls' },
  { id: 'led-lighting', label: 'LED lighting throughout' },
  { id: 'floor-insulation', label: 'Floor insulation' },
  { id: 'draught-proofing', label: 'Draught proofing' },
];

const EXEMPTION_REASON_OPTIONS = [
  {
    value: 'cost-cap',
    label: 'Cost cap reached',
    description: 'Spent £10,000+ on improvements without reaching EPC C',
  },
  {
    value: 'third-party-consent',
    label: 'Third party consent refused',
    description: 'Freeholder, planning authority, or other party has refused consent for necessary works',
  },
  {
    value: 'devaluation',
    label: 'Property would be devalued',
    description: 'Improvements would reduce property value by more than improvement cost',
  },
  {
    value: 'wall-unsuitable',
    label: 'Wall type unsuitable for insulation',
    description: 'Technical assessment confirms walls cannot be safely insulated',
  },
  {
    value: 'listed-building',
    label: 'Listed building restrictions',
    description: 'Listed building status prevents necessary energy efficiency works',
  },
  {
    value: 'conservation-area',
    label: 'Conservation area restrictions',
    description: 'Conservation area planning restrictions prevent necessary works',
  },
];

const EVIDENCE_OPTIONS: { id: EvidenceDocument; label: string; description?: string }[] = [
  { id: 'installer-quotes', label: 'Quotes from installers (minimum 3)', description: 'Required for cost cap exemption' },
  { id: 'current-epc', label: 'Current EPC certificate' },
  { id: 'freeholder-refusal', label: 'Letter from freeholder refusing consent' },
  { id: 'planning-refusal', label: 'Planning refusal letter' },
  { id: 'listed-officer-advice', label: 'Listed building officer advice' },
  { id: 'conservation-officer-advice', label: 'Conservation officer advice' },
  { id: 'structural-report', label: 'Structural engineer report on wall suitability' },
  { id: 'damp-assessment', label: 'Damp/condensation risk assessment' },
  { id: 'valuation-report', label: 'Property valuation showing devaluation' },
];

export function ExemptionForm({ onSubmit, isProcessing = false }: ExemptionFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<Partial<ExemptionInputs>>({
    currentRating: undefined,
    propertyType: undefined,
    isListed: false,
    inConservationArea: false,
    improvementsMade: [],
    spendToDate: undefined,
    exemptionReason: undefined,
    evidenceAvailable: [],
  });

  const totalSteps = EXEMPTION_STEPS.length;

  const updateField = useCallback(
    <K extends keyof ExemptionInputs>(field: K, value: ExemptionInputs[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    },
    [errors]
  );

  const toggleImprovement = useCallback((id: ImprovementMade) => {
    setFormData((prev) => {
      const current = prev.improvementsMade || [];
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
      return { ...prev, improvementsMade: updated };
    });
  }, []);

  const toggleEvidence = useCallback((id: EvidenceDocument) => {
    setFormData((prev) => {
      const current = prev.evidenceAvailable || [];
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
      return { ...prev, evidenceAvailable: updated };
    });
  }, []);

  const validateStep = useCallback(
    (step: number): boolean => {
      const newErrors: FormErrors = {};

      if (step === 0) {
        if (!formData.currentRating) newErrors.currentRating = 'Please select your current EPC rating';
        if (!formData.propertyType) newErrors.propertyType = 'Please select your property type';
      } else if (step === 1) {
        if (!formData.spendToDate) newErrors.spendToDate = 'Please select your approximate spend to date';
      } else if (step === 2) {
        if (!formData.exemptionReason) newErrors.exemptionReason = 'Please select your primary exemption reason';
      }
      // Step 3 (evidence) has no required fields

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [formData]
  );

  const handleNext = useCallback(() => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        onSubmit(formData as ExemptionInputs);
      }
    }
  }, [currentStep, totalSteps, validateStep, onSubmit, formData]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <Card variant="elevated" padding="none" className="overflow-hidden">
      {/* Progress Header */}
      <div className="border-b border-neutral-200 bg-primary-50 px-6 py-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCheck className="h-5 w-5 text-primary-700" aria-hidden="true" />
            <span className="font-semibold text-primary-800">Exemption Pathway Checker</span>
          </div>
          <span className="text-sm text-neutral-600">
            Step {currentStep + 1} of {totalSteps}
          </span>
        </div>
        <ProgressBar
          value={progress}
          max={100}
          variant="primary"
          size="sm"
          ariaLabel={`Exemption checker progress: step ${currentStep + 1} of ${totalSteps}`}
        />
      </div>

      {/* Step Indicators */}
      <div className="border-b border-neutral-200 bg-white">
        <nav className="flex" aria-label="Exemption checker steps">
          {EXEMPTION_STEPS.map((step, index) => {
            const StepIcon = stepIcons[index];
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            const isUpcoming = index > currentStep;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => {
                  if (isCompleted) {
                    setCurrentStep(index);
                  }
                }}
                disabled={isUpcoming}
                className={cn(
                  'flex flex-1 flex-col items-center gap-2 border-b-2 px-4 py-3 text-center transition-colors',
                  isCurrent && 'border-primary-600 bg-primary-50',
                  isCompleted && 'border-success-500 cursor-pointer hover:bg-neutral-50',
                  isUpcoming && 'border-transparent cursor-not-allowed opacity-50'
                )}
                aria-current={isCurrent ? 'step' : undefined}
              >
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full',
                    isCurrent && 'bg-primary-600 text-white',
                    isCompleted && 'bg-success-500 text-white',
                    isUpcoming && 'bg-neutral-200 text-neutral-500'
                  )}
                >
                  <StepIcon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="hidden sm:block">
                  <p
                    className={cn(
                      'text-sm font-medium',
                      isCurrent && 'text-primary-700',
                      isCompleted && 'text-success-600',
                      isUpcoming && 'text-neutral-500'
                    )}
                  >
                    {step.title}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Form Content */}
      <CardContent className="p-6">
        <CardHeader className="mb-0 px-0 pt-0">
          <CardTitle as="h2" className="text-xl">
            {EXEMPTION_STEPS[currentStep].title}
          </CardTitle>
          <CardDescription className="text-base">
            {EXEMPTION_STEPS[currentStep].description}
          </CardDescription>
        </CardHeader>

        <div className="mt-6 space-y-6">
          {/* Step 1: Current Situation */}
          {currentStep === 0 && (
            <>
              <Select
                label="Current EPC Rating"
                options={EXEMPTION_EPC_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.currentRating || ''}
                onChange={(e) => updateField('currentRating', e.target.value as ExemptionEPCRating)}
                placeholder="Select current rating..."
                error={errors.currentRating}
                hint="Only properties rated D, E, F, or G can claim an exemption (ratings A-C already meet the requirement)"
              />

              <Select
                label="Property Type"
                options={PROPERTY_TYPE_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.propertyType || ''}
                onChange={(e) => updateField('propertyType', e.target.value as PropertyType)}
                placeholder="Select property type..."
                error={errors.propertyType}
                hint="Choose the option that best describes your rental property"
              />

              <div className="space-y-4">
                <div className="block font-medium text-neutral-800">Property Designations</div>
                <Checkbox
                  label="Property is listed"
                  description="The property has listed building status (Grade I, II*, or II)"
                  checked={formData.isListed || false}
                  onChange={(e) => updateField('isListed', e.target.checked)}
                />
                <Checkbox
                  label="Property is in a conservation area"
                  description="The property is located within a designated conservation area"
                  checked={formData.inConservationArea || false}
                  onChange={(e) => updateField('inConservationArea', e.target.checked)}
                />
              </div>
            </>
          )}

          {/* Step 2: Improvements Made */}
          {currentStep === 1 && (
            <>
              <div className="space-y-4">
                <div className="block font-medium text-neutral-800">
                  Improvements Already Made
                </div>
                <p className="text-sm text-neutral-500 mb-4">
                  Select all energy efficiency improvements you have already completed on this property
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {IMPROVEMENT_OPTIONS.map((option) => (
                    <Checkbox
                      key={option.id}
                      label={option.label}
                      description={option.description}
                      checked={formData.improvementsMade?.includes(option.id) || false}
                      onChange={() => toggleImprovement(option.id)}
                      size="sm"
                    />
                  ))}
                </div>
              </div>

              <Select
                label="Approximate Total Spend to Date"
                options={SPEND_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.spendToDate || ''}
                onChange={(e) => updateField('spendToDate', e.target.value as SpendToDate)}
                placeholder="Select spend range..."
                error={errors.spendToDate}
                hint="How much have you already spent on energy efficiency improvements?"
              />
            </>
          )}

          {/* Step 3: Exemption Reason */}
          {currentStep === 2 && (
            <>
              <RadioGroup
                name="exemption-reason"
                label="Primary Reason for Exemption"
                hint="Select the main reason why further improvements are not possible"
                options={EXEMPTION_REASON_OPTIONS}
                value={formData.exemptionReason || ''}
                onChange={(value) => updateField('exemptionReason', value as ExemptionReason)}
                error={errors.exemptionReason}
                direction="vertical"
              />

              {/* Contextual hints based on previous selections */}
              {formData.isListed && (
                <div className="rounded-lg bg-primary-50 border border-primary-200 p-4">
                  <p className="text-sm text-primary-800">
                    <strong>Note:</strong> As a listed building, you may have a strong case for exemption if works would harm the building&apos;s character. Consider the &quot;Listed building restrictions&quot; option.
                  </p>
                </div>
              )}

              {formData.inConservationArea && (
                <div className="rounded-lg bg-primary-50 border border-primary-200 p-4">
                  <p className="text-sm text-primary-800">
                    <strong>Note:</strong> Properties in conservation areas may face restrictions on external changes. Consider the &quot;Conservation area restrictions&quot; option if external works are not permitted.
                  </p>
                </div>
              )}

              {formData.spendToDate === 'over-10000' && (
                <div className="rounded-lg bg-success-50 border border-success-200 p-4">
                  <p className="text-sm text-success-700">
                    <strong>Good news:</strong> You may qualify for a cost cap exemption since you&apos;ve spent over £10,000. Select &quot;Cost cap reached&quot; if your property still hasn&apos;t reached EPC C.
                  </p>
                </div>
              )}
            </>
          )}

          {/* Step 4: Evidence Available */}
          {currentStep === 3 && (
            <>
              <div className="space-y-4">
                <div className="block font-medium text-neutral-800">
                  Documentation You Have Available
                </div>
                <p className="text-sm text-neutral-500 mb-4">
                  Select all documents you currently have or can obtain to support your exemption application
                </p>
                <div className="space-y-3">
                  {EVIDENCE_OPTIONS.map((option) => (
                    <Checkbox
                      key={option.id}
                      label={option.label}
                      description={option.description}
                      checked={formData.evidenceAvailable?.includes(option.id) || false}
                      onChange={() => toggleEvidence(option.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Summary preview before submission */}
              <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <h3 className="mb-3 font-medium text-neutral-800">Summary</h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <dt className="text-neutral-600">Current EPC:</dt>
                  <dd className="font-medium text-neutral-800">
                    {EXEMPTION_EPC_OPTIONS.find((o) => o.value === formData.currentRating)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Property Type:</dt>
                  <dd className="font-medium text-neutral-800">
                    {PROPERTY_TYPE_OPTIONS.find((o) => o.value === formData.propertyType)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Listed/Conservation:</dt>
                  <dd className="font-medium text-neutral-800">
                    {formData.isListed && formData.inConservationArea
                      ? 'Both'
                      : formData.isListed
                      ? 'Listed Building'
                      : formData.inConservationArea
                      ? 'Conservation Area'
                      : 'Neither'}
                  </dd>
                  <dt className="text-neutral-600">Improvements Made:</dt>
                  <dd className="font-medium text-neutral-800">
                    {formData.improvementsMade?.length || 0} items
                  </dd>
                  <dt className="text-neutral-600">Spend to Date:</dt>
                  <dd className="font-medium text-neutral-800">
                    {SPEND_OPTIONS.find((o) => o.value === formData.spendToDate)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Exemption Reason:</dt>
                  <dd className="font-medium text-neutral-800">
                    {EXEMPTION_REASON_OPTIONS.find((o) => o.value === formData.exemptionReason)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Evidence Documents:</dt>
                  <dd className="font-medium text-neutral-800">
                    {formData.evidenceAvailable?.length || 0} items
                  </dd>
                </dl>
              </div>
            </>
          )}
        </div>
      </CardContent>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-6 py-4">
        <Button
          type="button"
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 0}
          leftIcon={<ChevronLeft className="h-4 w-4" aria-hidden="true" />}
        >
          Back
        </Button>

        <Button
          type="button"
          variant="primary"
          onClick={handleNext}
          isLoading={isProcessing}
          rightIcon={
            currentStep < totalSteps - 1 ? (
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            ) : (
              <FileCheck className="h-4 w-4" aria-hidden="true" />
            )
          }
        >
          {currentStep < totalSteps - 1 ? 'Next' : 'Check Eligibility'}
        </Button>
      </div>
    </Card>
  );
}

export default ExemptionForm;
