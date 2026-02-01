'use client';

import { useState, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  PoundSterling,
  Home,
  Flame,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';
import {
  PROPERTY_TYPE_OPTIONS,
  EPC_RATING_OPTIONS,
  TENURE_OPTIONS,
  COUNCIL_TAX_BAND_OPTIONS,
  HEATING_SYSTEM_OPTIONS,
  BOILER_AGE_OPTIONS,
  YES_NO_UNKNOWN_OPTIONS,
  TENANT_INCOME_OPTIONS,
  PROPERTY_COUNT_OPTIONS,
  type GrantCheckerInputs,
} from '@/data/grant-schemes';

interface GrantCheckerFormProps {
  onSubmit: (inputs: GrantCheckerInputs) => void;
  isChecking?: boolean;
}

type FormErrors = Partial<Record<keyof GrantCheckerInputs, string>>;

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
    id: 'heating',
    title: 'Heating System',
    description: 'Your current heating setup',
  },
  {
    id: 'tenant',
    title: 'Tenant Circumstances',
    description: 'Information about your tenant',
  },
];

const stepIcons = [Home, Flame, Users];

export function GrantCheckerForm({ onSubmit, isChecking = false }: GrantCheckerFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<Partial<GrantCheckerInputs>>({
    postcodeArea: '',
    propertyType: undefined,
    currentEpcRating: undefined,
    tenure: undefined,
    councilTaxBand: undefined,
    currentHeating: undefined,
    boilerAge: undefined,
    consideringHeatingReplacement: undefined,
    tenantOnBenefits: undefined,
    tenantIncome: undefined,
    numberOfProperties: undefined,
  });

  const totalSteps = FORM_STEPS.length;

  const updateField = useCallback(
    <K extends keyof GrantCheckerInputs>(field: K, value: GrantCheckerInputs[K]) => {
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
        if (!formData.postcodeArea?.trim()) {
          newErrors.postcodeArea = 'Please enter the postcode area (e.g., M1, B15)';
        } else if (!/^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?$/.test(formData.postcodeArea.trim())) {
          newErrors.postcodeArea = 'Please enter a valid postcode area (e.g., M1, B15, SW1A)';
        }
        if (!formData.propertyType) newErrors.propertyType = 'Please select a property type';
        if (!formData.currentEpcRating) newErrors.currentEpcRating = 'Please select your EPC rating';
        if (!formData.tenure) newErrors.tenure = 'Please select the tenure type';
        if (!formData.councilTaxBand) newErrors.councilTaxBand = 'Please select the Council Tax band';
      } else if (step === 1) {
        if (!formData.currentHeating) newErrors.currentHeating = 'Please select your heating system';
        if (!formData.consideringHeatingReplacement) {
          newErrors.consideringHeatingReplacement = 'Please indicate if you are considering replacing heating';
        }
        // Boiler age only required if gas or oil
        if (
          (formData.currentHeating === 'gas-boiler' || formData.currentHeating === 'oil-boiler') &&
          !formData.boilerAge
        ) {
          newErrors.boilerAge = 'Please select your boiler age';
        }
      } else if (step === 2) {
        if (!formData.tenantOnBenefits) {
          newErrors.tenantOnBenefits = 'Please indicate tenant benefit status';
        }
        if (!formData.tenantIncome) {
          newErrors.tenantIncome = 'Please indicate tenant income level';
        }
        if (!formData.numberOfProperties) {
          newErrors.numberOfProperties = 'Please select how many properties you own';
        }
      }

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
        onSubmit(formData as GrantCheckerInputs);
      }
    }
  }, [currentStep, totalSteps, validateStep, onSubmit, formData]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const progress = ((currentStep + 1) / totalSteps) * 100;

  const showBoilerAge = formData.currentHeating === 'gas-boiler' || formData.currentHeating === 'oil-boiler';

  return (
    <Card variant="elevated" padding="none" className="overflow-hidden">
      {/* Progress Header */}
      <div className="border-b border-neutral-200 bg-primary-50 px-6 py-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PoundSterling className="h-5 w-5 text-primary-700" aria-hidden="true" />
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
                label="Postcode Area"
                placeholder="e.g., M1, B15, SW1A"
                value={formData.postcodeArea || ''}
                onChange={(e) => updateField('postcodeArea', e.target.value.toUpperCase())}
                error={errors.postcodeArea}
                hint="Enter the first part of your postcode (before the space)"
              />

              <Select
                label="Property Type"
                options={PROPERTY_TYPE_OPTIONS}
                value={formData.propertyType || ''}
                onChange={(e) => updateField('propertyType', e.target.value)}
                placeholder="Select property type..."
                error={errors.propertyType}
              />

              <Select
                label="Current EPC Rating"
                options={EPC_RATING_OPTIONS}
                value={formData.currentEpcRating || ''}
                onChange={(e) => updateField('currentEpcRating', e.target.value)}
                placeholder="Select EPC rating..."
                error={errors.currentEpcRating}
                hint="Check your EPC certificate or search on gov.uk EPC register"
              />

              <Select
                label="Tenure"
                options={TENURE_OPTIONS}
                value={formData.tenure || ''}
                onChange={(e) => updateField('tenure', e.target.value)}
                placeholder="Select tenure type..."
                error={errors.tenure}
              />

              <Select
                label="Council Tax Band"
                options={COUNCIL_TAX_BAND_OPTIONS}
                value={formData.councilTaxBand || ''}
                onChange={(e) => updateField('councilTaxBand', e.target.value)}
                placeholder="Select Council Tax band..."
                error={errors.councilTaxBand}
                hint="You can check this on your local council website or council tax bill"
              />
            </>
          )}

          {/* Step 2: Heating System */}
          {currentStep === 1 && (
            <>
              <Select
                label="Current Heating System"
                options={HEATING_SYSTEM_OPTIONS}
                value={formData.currentHeating || ''}
                onChange={(e) => updateField('currentHeating', e.target.value)}
                placeholder="Select heating system..."
                error={errors.currentHeating}
                hint="The main heating system used in the property"
              />

              {showBoilerAge && (
                <Select
                  label="Boiler Age"
                  options={BOILER_AGE_OPTIONS}
                  value={formData.boilerAge || ''}
                  onChange={(e) => updateField('boilerAge', e.target.value)}
                  placeholder="Select boiler age..."
                  error={errors.boilerAge}
                  hint="Approximate age of your current boiler"
                />
              )}

              <RadioGroup
                name="consideringHeatingReplacement"
                label="Are you considering replacing your heating system?"
                options={[
                  { value: 'yes', label: 'Yes', description: 'I am interested in low-carbon heating options' },
                  { value: 'no', label: 'No', description: 'I want to keep my current heating system' },
                ]}
                value={formData.consideringHeatingReplacement}
                onChange={(value) => updateField('consideringHeatingReplacement', value)}
                error={errors.consideringHeatingReplacement}
              />
            </>
          )}

          {/* Step 3: Tenant Circumstances */}
          {currentStep === 2 && (
            <>
              <RadioGroup
                name="tenantOnBenefits"
                label="Is your tenant receiving income-related benefits?"
                options={YES_NO_UNKNOWN_OPTIONS.map(opt => ({
                  value: opt.value,
                  label: opt.label,
                  description: opt.value === 'yes'
                    ? 'e.g., Universal Credit, Pension Credit, Housing Benefit'
                    : opt.value === 'no'
                    ? 'Tenant is not on qualifying benefits'
                    : "I haven't checked or I'm not sure",
                }))}
                value={formData.tenantOnBenefits}
                onChange={(value) => updateField('tenantOnBenefits', value)}
                error={errors.tenantOnBenefits}
              />

              <RadioGroup
                name="tenantIncome"
                label="What is your tenant's approximate household income?"
                options={TENANT_INCOME_OPTIONS.map(opt => ({
                  value: opt.value,
                  label: opt.label,
                  description: opt.value === 'below-36000'
                    ? 'May qualify for Warm Homes: Local Grant'
                    : opt.value === 'above-36000'
                    ? 'Some schemes have income thresholds'
                    : "I haven't asked or I'm not sure",
                }))}
                value={formData.tenantIncome}
                onChange={(value) => updateField('tenantIncome', value)}
                error={errors.tenantIncome}
              />

              <RadioGroup
                name="numberOfProperties"
                label="How many rental properties do you own?"
                options={PROPERTY_COUNT_OPTIONS.map(opt => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.numberOfProperties}
                onChange={(value) => updateField('numberOfProperties', value)}
                error={errors.numberOfProperties}
              />

              {/* Summary preview before submission */}
              <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <h3 className="mb-3 font-medium text-neutral-800">Summary</h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <dt className="text-neutral-600">Postcode Area:</dt>
                  <dd className="font-medium text-neutral-800">
                    {formData.postcodeArea || '-'}
                  </dd>
                  <dt className="text-neutral-600">Property:</dt>
                  <dd className="font-medium text-neutral-800">
                    {PROPERTY_TYPE_OPTIONS.find((o) => o.value === formData.propertyType)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Current EPC:</dt>
                  <dd className="font-medium text-neutral-800">
                    {formData.currentEpcRating === 'unknown'
                      ? 'Unknown'
                      : formData.currentEpcRating || '-'}
                  </dd>
                  <dt className="text-neutral-600">Heating:</dt>
                  <dd className="font-medium text-neutral-800">
                    {HEATING_SYSTEM_OPTIONS.find((o) => o.value === formData.currentHeating)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Tenant on Benefits:</dt>
                  <dd className="font-medium text-neutral-800">
                    {formData.tenantOnBenefits === 'yes'
                      ? 'Yes'
                      : formData.tenantOnBenefits === 'no'
                      ? 'No'
                      : formData.tenantOnBenefits === 'unknown'
                      ? "Don't know"
                      : '-'}
                  </dd>
                  <dt className="text-neutral-600">Properties Owned:</dt>
                  <dd className="font-medium text-neutral-800">
                    {formData.numberOfProperties || '-'}
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
          isLoading={isChecking}
          rightIcon={
            currentStep < totalSteps - 1 ? (
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            ) : (
              <PoundSterling className="h-4 w-4" aria-hidden="true" />
            )
          }
        >
          {currentStep < totalSteps - 1 ? 'Next' : 'Check Eligibility'}
        </Button>
      </div>
    </Card>
  );
}

export default GrantCheckerForm;
