'use client';

import { useState, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Home,
  Users,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';
import { PROPERTY_TYPE_OPTIONS, HEATING_SYSTEM_OPTIONS, EPC_RATING_OPTIONS } from '@/lib/constants';
import { isValidUKPostcode } from '@/lib/grants';
import type {
  GrantEligibilityInputs,
  PropertyType,
  EPCRating,
  HeatingSystem,
  TenureType,
  TenantBenefitStatus,
  TenantIncomeStatus,
} from '@/lib/types';

interface GrantCheckerFormProps {
  onSubmit: (inputs: GrantEligibilityInputs) => void;
  isChecking?: boolean;
}

type FormErrors = Partial<Record<keyof GrantEligibilityInputs, string>>;

interface FormStep {
  id: string;
  title: string;
  description: string;
}

const FORM_STEPS: FormStep[] = [
  {
    id: 'property',
    title: 'Property Details',
    description: 'Tell us about your rental property',
  },
  {
    id: 'energy',
    title: 'Energy & Heating',
    description: 'Current EPC rating and heating system',
  },
  {
    id: 'tenant',
    title: 'Tenant Circumstances',
    description: 'Optional details to improve accuracy',
  },
];

const stepIcons = [MapPin, Home, Users];

const TENURE_OPTIONS = [
  { value: 'freehold', label: 'Freehold', description: 'You own the property outright' },
  { value: 'leasehold', label: 'Leasehold', description: 'You own a lease on the property' },
];

const TENANT_BENEFIT_OPTIONS = [
  { value: 'yes', label: 'Yes', description: 'Tenant receives qualifying benefits (Universal Credit, Pension Credit, etc.)' },
  { value: 'no', label: 'No', description: 'Tenant does not receive qualifying benefits' },
  { value: 'unknown', label: 'Not sure', description: "I don't know my tenant's benefit status" },
];

const TENANT_INCOME_OPTIONS = [
  { value: 'below-36000', label: 'Below £36,000', description: 'Tenant household income is below £36,000 per year' },
  { value: 'above-36000', label: '£36,000 or above', description: 'Tenant household income is £36,000 or above per year' },
  { value: 'unknown', label: 'Not sure', description: "I don't know my tenant's income level" },
];

export function GrantCheckerForm({ onSubmit, isChecking = false }: GrantCheckerFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<Partial<GrantEligibilityInputs>>({
    postcode: '',
    propertyType: undefined,
    currentEpcRating: undefined,
    tenure: undefined,
    heatingSystem: undefined,
    tenantBenefitStatus: undefined,
    tenantIncomeStatus: undefined,
  });

  const totalSteps = FORM_STEPS.length;

  const updateField = useCallback(
    <K extends keyof GrantEligibilityInputs>(field: K, value: GrantEligibilityInputs[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear error when field is updated
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

  const validateStep = useCallback(
    (step: number): boolean => {
      const newErrors: FormErrors = {};

      if (step === 0) {
        if (!formData.postcode || !isValidUKPostcode(formData.postcode)) {
          newErrors.postcode = 'Please enter a valid UK postcode (e.g., M1 4BT)';
        }
        if (!formData.propertyType) {
          newErrors.propertyType = 'Please select a property type';
        }
        if (!formData.tenure) {
          newErrors.tenure = 'Please select the tenure type';
        }
      } else if (step === 1) {
        if (!formData.currentEpcRating) {
          newErrors.currentEpcRating = 'Please select your current EPC rating';
        }
        if (!formData.heatingSystem) {
          newErrors.heatingSystem = 'Please select your current heating system';
        }
      }
      // Step 2 (tenant details) is optional, no validation required

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
        // Submit form
        onSubmit(formData as GrantEligibilityInputs);
      }
    }
  }, [currentStep, totalSteps, validateStep, onSubmit, formData]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleSkipToResults = useCallback(() => {
    // Allow skipping tenant details step
    if (currentStep === 2 && validateStep(0) && validateStep(1)) {
      onSubmit(formData as GrantEligibilityInputs);
    }
  }, [currentStep, formData, onSubmit, validateStep]);

  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <Card variant="elevated" padding="none" className="overflow-hidden">
      {/* Progress Header */}
      <div className="border-b border-neutral-200 bg-primary-50 px-6 py-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary-700" aria-hidden="true" />
            <span className="font-semibold text-primary-800">Grant Eligibility Checker</span>
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
          ariaLabel={`Grant checker progress: step ${currentStep + 1} of ${totalSteps}`}
        />
      </div>

      {/* Step Indicators */}
      <div className="border-b border-neutral-200 bg-white">
        <nav className="flex" aria-label="Grant checker steps">
          {FORM_STEPS.map((step, index) => {
            const StepIcon = stepIcons[index];
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            const isUpcoming = index > currentStep;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => {
                  // Only allow going back to completed steps
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
            {FORM_STEPS[currentStep].title}
          </CardTitle>
          <CardDescription className="text-base">
            {FORM_STEPS[currentStep].description}
          </CardDescription>
        </CardHeader>

        <div className="mt-6 space-y-6">
          {/* Step 1: Property Details */}
          {currentStep === 0 && (
            <>
              <Input
                label="Property Postcode"
                type="text"
                value={formData.postcode || ''}
                onChange={(e) => updateField('postcode', e.target.value.toUpperCase())}
                placeholder="e.g., M1 4BT"
                error={errors.postcode}
                hint="Enter the full postcode of your rental property"
                leftIcon={<MapPin className="h-5 w-5" />}
                autoComplete="postal-code"
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

              <RadioGroup
                name="tenure"
                label="Property Tenure"
                options={TENURE_OPTIONS}
                value={formData.tenure}
                onChange={(value) => updateField('tenure', value as TenureType)}
                error={errors.tenure}
                direction="horizontal"
              />
            </>
          )}

          {/* Step 2: Energy & Heating */}
          {currentStep === 1 && (
            <>
              <Select
                label="Current EPC Rating"
                options={EPC_RATING_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.currentEpcRating || ''}
                onChange={(e) =>
                  updateField('currentEpcRating', e.target.value as EPCRating | 'unknown')
                }
                placeholder="Select current rating..."
                error={errors.currentEpcRating}
                hint="Check your EPC certificate or search on gov.uk EPC register"
              />

              <Select
                label="Current Heating System"
                options={HEATING_SYSTEM_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.heatingSystem || ''}
                onChange={(e) => updateField('heatingSystem', e.target.value as HeatingSystem)}
                placeholder="Select heating system..."
                error={errors.heatingSystem}
                hint="The main heating system currently used in the property"
              />

              {/* Summary so far */}
              <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <h3 className="mb-2 text-sm font-medium text-neutral-700">Property Summary</h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <dt className="text-neutral-500">Postcode:</dt>
                  <dd className="font-medium text-neutral-800">{formData.postcode || '-'}</dd>
                  <dt className="text-neutral-500">Property:</dt>
                  <dd className="font-medium text-neutral-800">
                    {PROPERTY_TYPE_OPTIONS.find((o) => o.value === formData.propertyType)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-500">Tenure:</dt>
                  <dd className="font-medium text-neutral-800 capitalize">{formData.tenure || '-'}</dd>
                </dl>
              </div>
            </>
          )}

          {/* Step 3: Tenant Circumstances (Optional) */}
          {currentStep === 2 && (
            <>
              <div className="rounded-lg border border-primary-100 bg-primary-50 p-4 mb-6">
                <p className="text-sm text-primary-800">
                  <strong>These details are optional</strong> but help us provide more accurate results.
                  Some grants require tenants to be on benefits or have household income below £36,000.
                  If you are unsure, you can skip these questions.
                </p>
              </div>

              <RadioGroup
                name="tenantBenefitStatus"
                label="Does your tenant receive qualifying benefits?"
                options={TENANT_BENEFIT_OPTIONS}
                value={formData.tenantBenefitStatus || ''}
                onChange={(value) => updateField('tenantBenefitStatus', value as TenantBenefitStatus)}
                hint="Benefits include Universal Credit, Pension Credit, Income Support, ESA, JSA, Tax Credits, Housing Benefit"
              />

              <RadioGroup
                name="tenantIncomeStatus"
                label="What is your tenant's household income?"
                options={TENANT_INCOME_OPTIONS}
                value={formData.tenantIncomeStatus || ''}
                onChange={(value) => updateField('tenantIncomeStatus', value as TenantIncomeStatus)}
                hint="Some schemes like Warm Homes: Local have income thresholds"
              />

              {/* Full Summary before submission */}
              <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <h3 className="mb-3 font-medium text-neutral-800">Summary</h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <dt className="text-neutral-600">Postcode:</dt>
                  <dd className="font-medium text-neutral-800">{formData.postcode || '-'}</dd>
                  <dt className="text-neutral-600">Property:</dt>
                  <dd className="font-medium text-neutral-800">
                    {PROPERTY_TYPE_OPTIONS.find((o) => o.value === formData.propertyType)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Tenure:</dt>
                  <dd className="font-medium text-neutral-800 capitalize">{formData.tenure || '-'}</dd>
                  <dt className="text-neutral-600">Current EPC:</dt>
                  <dd className="font-medium text-neutral-800">
                    {EPC_RATING_OPTIONS.find((o) => o.value === formData.currentEpcRating)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Heating:</dt>
                  <dd className="font-medium text-neutral-800">
                    {HEATING_SYSTEM_OPTIONS.find((o) => o.value === formData.heatingSystem)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Tenant on benefits:</dt>
                  <dd className="font-medium text-neutral-800 capitalize">
                    {formData.tenantBenefitStatus || 'Not specified'}
                  </dd>
                  <dt className="text-neutral-600">Tenant income:</dt>
                  <dd className="font-medium text-neutral-800">
                    {TENANT_INCOME_OPTIONS.find((o) => o.value === formData.tenantIncomeStatus)?.label || 'Not specified'}
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

        <div className="flex gap-3">
          {currentStep === 2 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleSkipToResults}
              disabled={isChecking}
            >
              Skip & Check
            </Button>
          )}
          <Button
            type="button"
            variant="primary"
            onClick={handleNext}
            isLoading={isChecking}
            rightIcon={
              currentStep < totalSteps - 1 ? (
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Search className="h-4 w-4" aria-hidden="true" />
              )
            }
          >
            {currentStep < totalSteps - 1 ? 'Next' : 'Check Eligibility'}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default GrantCheckerForm;
