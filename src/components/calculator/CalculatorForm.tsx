'use client';

import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Calculator, Home, Thermometer, Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';
import {
  PROPERTY_TYPE_OPTIONS,
  REGION_OPTIONS,
  EPC_RATING_OPTIONS,
  WALL_CONSTRUCTION_OPTIONS,
  HEATING_SYSTEM_OPTIONS,
  LOFT_INSULATION_OPTIONS,
  GLAZING_OPTIONS,
  BEDROOM_OPTIONS,
} from '@/lib/constants';
import { CALCULATOR_STEPS } from '@/data/calculator-data';
import type {
  CalculatorInputs,
  PropertyType,
  Region,
  EPCRating,
  WallConstruction,
  HeatingSystem,
  LoftInsulation,
  GlazingType,
} from '@/lib/types';

interface CalculatorFormProps {
  onSubmit: (inputs: CalculatorInputs) => void;
  isCalculating?: boolean;
}

type FormErrors = Partial<Record<keyof CalculatorInputs, string>>;

const stepIcons = [Home, Thermometer, Settings];

export function CalculatorForm({ onSubmit, isCalculating = false }: CalculatorFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<Partial<CalculatorInputs>>({
    propertyType: undefined,
    bedrooms: undefined,
    region: undefined,
    currentRating: undefined,
    wallConstruction: undefined,
    heatingSystem: undefined,
    loftInsulation: undefined,
    glazingType: undefined,
  });

  const totalSteps = CALCULATOR_STEPS.length;

  const updateField = useCallback(
    <K extends keyof CalculatorInputs>(field: K, value: CalculatorInputs[K]) => {
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
        if (!formData.propertyType) newErrors.propertyType = 'Please select a property type';
        if (!formData.bedrooms) newErrors.bedrooms = 'Please select the number of bedrooms';
        if (!formData.region) newErrors.region = 'Please select your region';
      } else if (step === 1) {
        if (!formData.currentRating) newErrors.currentRating = 'Please select your current EPC rating';
        if (!formData.wallConstruction) newErrors.wallConstruction = 'Please select wall construction type';
        if (!formData.heatingSystem) newErrors.heatingSystem = 'Please select your heating system';
      } else if (step === 2) {
        if (!formData.loftInsulation) newErrors.loftInsulation = 'Please select loft insulation level';
        if (!formData.glazingType) newErrors.glazingType = 'Please select glazing type';
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
        onSubmit(formData as CalculatorInputs);
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
            <Calculator className="h-5 w-5 text-primary-700" aria-hidden="true" />
            <span className="font-semibold text-primary-800">Upgrade Cost Calculator</span>
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
          ariaLabel={`Calculator progress: step ${currentStep + 1} of ${totalSteps}`}
        />
      </div>

      {/* Step Indicators */}
      <div className="border-b border-neutral-200 bg-white">
        <nav className="flex" aria-label="Calculator steps">
          {CALCULATOR_STEPS.map((step, index) => {
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
            {CALCULATOR_STEPS[currentStep].title}
          </CardTitle>
          <CardDescription className="text-base">
            {CALCULATOR_STEPS[currentStep].description}
          </CardDescription>
        </CardHeader>

        <div className="mt-6 space-y-6">
          {/* Step 1: Property Basics */}
          {currentStep === 0 && (
            <>
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

              <Select
                label="Number of Bedrooms"
                options={BEDROOM_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.bedrooms?.toString() || ''}
                onChange={(e) => updateField('bedrooms', parseInt(e.target.value, 10))}
                placeholder="Select bedrooms..."
                error={errors.bedrooms}
                hint="Used to estimate property size and scale costs accordingly"
              />

              <Select
                label="Region"
                options={REGION_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.region || ''}
                onChange={(e) => updateField('region', e.target.value as Region)}
                placeholder="Select region..."
                error={errors.region}
                hint="Labour and material costs vary by region"
              />
            </>
          )}

          {/* Step 2: Current State */}
          {currentStep === 1 && (
            <>
              <Select
                label="Current EPC Rating"
                options={EPC_RATING_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.currentRating || ''}
                onChange={(e) =>
                  updateField('currentRating', e.target.value as EPCRating | 'unknown')
                }
                placeholder="Select current rating..."
                error={errors.currentRating}
                hint="Check your EPC certificate or search on gov.uk EPC register"
              />

              <Select
                label="Wall Construction"
                options={WALL_CONSTRUCTION_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.wallConstruction || ''}
                onChange={(e) => updateField('wallConstruction', e.target.value as WallConstruction)}
                placeholder="Select wall type..."
                error={errors.wallConstruction}
                hint="Solid walls are typically pre-1930, cavity walls post-1930"
              />

              <Select
                label="Heating System"
                options={HEATING_SYSTEM_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.heatingSystem || ''}
                onChange={(e) => updateField('heatingSystem', e.target.value as HeatingSystem)}
                placeholder="Select heating type..."
                error={errors.heatingSystem}
                hint="The main heating system used in the property"
              />
            </>
          )}

          {/* Step 3: Additional Details */}
          {currentStep === 2 && (
            <>
              <Select
                label="Loft Insulation"
                options={LOFT_INSULATION_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.loftInsulation || ''}
                onChange={(e) => updateField('loftInsulation', e.target.value as LoftInsulation)}
                placeholder="Select insulation level..."
                error={errors.loftInsulation}
                hint="Over 270mm is the recommended level for energy efficiency"
              />

              <Select
                label="Glazing Type"
                options={GLAZING_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.glazingType || ''}
                onChange={(e) => updateField('glazingType', e.target.value as GlazingType)}
                placeholder="Select glazing type..."
                error={errors.glazingType}
                hint="Most modern properties have double glazing"
              />

              {/* Summary preview before submission */}
              <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <h3 className="mb-3 font-medium text-neutral-800">Summary</h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <dt className="text-neutral-600">Property:</dt>
                  <dd className="font-medium text-neutral-800">
                    {PROPERTY_TYPE_OPTIONS.find((o) => o.value === formData.propertyType)?.label ||
                      '-'}
                  </dd>
                  <dt className="text-neutral-600">Size:</dt>
                  <dd className="font-medium text-neutral-800">
                    {BEDROOM_OPTIONS.find((o) => o.value === formData.bedrooms)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Region:</dt>
                  <dd className="font-medium text-neutral-800">
                    {REGION_OPTIONS.find((o) => o.value === formData.region)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Current EPC:</dt>
                  <dd className="font-medium text-neutral-800">
                    {EPC_RATING_OPTIONS.find((o) => o.value === formData.currentRating)?.label ||
                      '-'}
                  </dd>
                  <dt className="text-neutral-600">Walls:</dt>
                  <dd className="font-medium text-neutral-800">
                    {WALL_CONSTRUCTION_OPTIONS.find((o) => o.value === formData.wallConstruction)
                      ?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Heating:</dt>
                  <dd className="font-medium text-neutral-800">
                    {HEATING_SYSTEM_OPTIONS.find((o) => o.value === formData.heatingSystem)?.label ||
                      '-'}
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
          isLoading={isCalculating}
          rightIcon={
            currentStep < totalSteps - 1 ? (
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Calculator className="h-4 w-4" aria-hidden="true" />
            )
          }
        >
          {currentStep < totalSteps - 1 ? 'Next' : 'Calculate Costs'}
        </Button>
      </div>
    </Card>
  );
}

export default CalculatorForm;
