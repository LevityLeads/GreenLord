'use client';

import { useState, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  FileSearch,
  Home,
  ClipboardList,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';
import {
  PROPERTY_TYPE_OPTIONS,
  EPC_RATING_OPTIONS,
} from '@/lib/constants';
import {
  CONSTRUCTION_AGE_OPTIONS,
  WALL_TYPE_OPTIONS,
  WALL_INSULATION_OPTIONS,
  ROOF_INSULATION_OPTIONS,
  FLOOR_INSULATION_OPTIONS,
  GLAZING_TYPE_OPTIONS,
  HEATING_SYSTEM_OPTIONS,
  HEATING_CONTROLS_OPTIONS,
  HOT_WATER_OPTIONS,
  EPC_RECOMMENDATION_OPTIONS,
} from '@/lib/epc-analysis';
import type { EPCRating, PropertyType } from '@/lib/types';
import type {
  EPCAnalyserInputs,
  ConstructionAgeBand,
  WallTypeNoted,
  WallInsulationNoted,
  RoofInsulationNoted,
  FloorInsulationNoted,
  GlazingTypeNoted,
  MainHeatingSystem,
  HeatingControls,
  HotWaterSystem,
  EPCRecommendation,
} from '@/lib/epc-analysis';

interface EPCAnalyserFormProps {
  onSubmit: (inputs: EPCAnalyserInputs) => void;
  isAnalysing?: boolean;
}

type FormErrors = Partial<Record<keyof EPCAnalyserInputs, string>>;

const STEPS = [
  {
    id: 'basics',
    title: 'Basic Details',
    description: 'Tell us about your property and its current EPC rating',
  },
  {
    id: 'epc-details',
    title: 'What Your EPC Says',
    description: 'Enter the details from your current EPC certificate',
  },
  {
    id: 'recommendations',
    title: 'Recommendations Listed',
    description: 'Select the recommendations shown on your EPC',
  },
];

const stepIcons = [Home, ClipboardList, Lightbulb];

export function EPCAnalyserForm({ onSubmit, isAnalysing = false }: EPCAnalyserFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<Partial<EPCAnalyserInputs>>({
    currentRating: undefined,
    currentScore: undefined,
    propertyType: undefined,
    constructionAge: undefined,
    wallType: undefined,
    wallInsulation: undefined,
    roofInsulation: undefined,
    floorInsulation: undefined,
    glazingType: undefined,
    heatingSystem: undefined,
    heatingControls: undefined,
    hotWater: undefined,
    recommendations: [],
  });

  const totalSteps = STEPS.length;

  const updateField = useCallback(
    <K extends keyof EPCAnalyserInputs>(field: K, value: EPCAnalyserInputs[K]) => {
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

  const toggleRecommendation = useCallback((rec: EPCRecommendation) => {
    setFormData((prev) => {
      const current = prev.recommendations || [];
      const isSelected = current.includes(rec);
      return {
        ...prev,
        recommendations: isSelected
          ? current.filter((r) => r !== rec)
          : [...current, rec],
      };
    });
  }, []);

  const validateStep = useCallback(
    (step: number): boolean => {
      const newErrors: FormErrors = {};

      if (step === 0) {
        if (!formData.currentRating) newErrors.currentRating = 'Please select your current EPC rating';
        if (!formData.currentScore && formData.currentScore !== 0) {
          newErrors.currentScore = 'Please enter your EPC score';
        } else if (formData.currentScore !== undefined && (formData.currentScore < 1 || formData.currentScore > 100)) {
          newErrors.currentScore = 'Score must be between 1 and 100';
        }
        if (!formData.propertyType) newErrors.propertyType = 'Please select a property type';
        if (!formData.constructionAge) newErrors.constructionAge = 'Please select construction age';
      } else if (step === 1) {
        if (!formData.wallType) newErrors.wallType = 'Please select wall type';
        if (!formData.wallInsulation) newErrors.wallInsulation = 'Please select wall insulation';
        if (!formData.roofInsulation) newErrors.roofInsulation = 'Please select roof insulation';
        if (!formData.floorInsulation) newErrors.floorInsulation = 'Please select floor insulation';
        if (!formData.glazingType) newErrors.glazingType = 'Please select glazing type';
        if (!formData.heatingSystem) newErrors.heatingSystem = 'Please select heating system';
        if (!formData.heatingControls) newErrors.heatingControls = 'Please select heating controls';
        if (!formData.hotWater) newErrors.hotWater = 'Please select hot water system';
      }
      // Step 3 (recommendations) is optional - no validation required

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
        onSubmit(formData as EPCAnalyserInputs);
      }
    }
  }, [currentStep, totalSteps, validateStep, onSubmit, formData]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const progress = ((currentStep + 1) / totalSteps) * 100;

  // Filter EPC ratings to exclude 'unknown'
  const epcRatingOptions = EPC_RATING_OPTIONS.filter((opt) => opt.value !== 'unknown');

  return (
    <Card variant="elevated" padding="none" className="overflow-hidden">
      {/* Progress Header */}
      <div className="border-b border-neutral-200 bg-primary-50 px-6 py-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileSearch className="h-5 w-5 text-primary-700" aria-hidden="true" />
            <span className="font-semibold text-primary-800">EPC Analyser</span>
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
          ariaLabel={`Analyser progress: step ${currentStep + 1} of ${totalSteps}`}
        />
      </div>

      {/* Step Indicators */}
      <div className="border-b border-neutral-200 bg-white">
        <nav className="flex" aria-label="Analyser steps">
          {STEPS.map((step, index) => {
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
            {STEPS[currentStep].title}
          </CardTitle>
          <CardDescription className="text-base">
            {STEPS[currentStep].description}
          </CardDescription>
        </CardHeader>

        <div className="mt-6 space-y-6">
          {/* Step 1: Basic Details */}
          {currentStep === 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Current EPC Rating"
                  options={epcRatingOptions.map((opt) => ({
                    value: opt.value,
                    label: opt.label,
                  }))}
                  value={formData.currentRating || ''}
                  onChange={(e) => updateField('currentRating', e.target.value as EPCRating)}
                  placeholder="Select rating..."
                  error={errors.currentRating}
                  hint="The letter rating shown on your EPC (A-G)"
                />

                <Input
                  label="Current EPC Score"
                  type="number"
                  min={1}
                  max={100}
                  value={formData.currentScore ?? ''}
                  onChange={(e) => updateField('currentScore', parseInt(e.target.value, 10) || 0)}
                  placeholder="e.g., 58"
                  error={errors.currentScore}
                  hint="The numeric score (1-100) shown on your EPC"
                />
              </div>

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
                hint="Choose the type that best describes your property"
              />

              <Select
                label="Construction Age Band"
                options={CONSTRUCTION_AGE_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.constructionAge || ''}
                onChange={(e) => updateField('constructionAge', e.target.value as ConstructionAgeBand)}
                placeholder="Select age band..."
                error={errors.constructionAge}
                hint="When was your property originally built?"
              />
            </>
          )}

          {/* Step 2: EPC Details */}
          {currentStep === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Wall Type Noted"
                  options={WALL_TYPE_OPTIONS.map((opt) => ({
                    value: opt.value,
                    label: opt.label,
                  }))}
                  value={formData.wallType || ''}
                  onChange={(e) => updateField('wallType', e.target.value as WallTypeNoted)}
                  placeholder="Select wall type..."
                  error={errors.wallType}
                  hint="As shown in your EPC wall description"
                />

                <Select
                  label="Wall Insulation Noted"
                  options={WALL_INSULATION_OPTIONS.map((opt) => ({
                    value: opt.value,
                    label: opt.label,
                  }))}
                  value={formData.wallInsulation || ''}
                  onChange={(e) => updateField('wallInsulation', e.target.value as WallInsulationNoted)}
                  placeholder="Select insulation level..."
                  error={errors.wallInsulation}
                  hint="Level of wall insulation recorded"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Roof Insulation Noted"
                  options={ROOF_INSULATION_OPTIONS.map((opt) => ({
                    value: opt.value,
                    label: opt.label,
                  }))}
                  value={formData.roofInsulation || ''}
                  onChange={(e) => updateField('roofInsulation', e.target.value as RoofInsulationNoted)}
                  placeholder="Select insulation depth..."
                  error={errors.roofInsulation}
                  hint="Depth of loft insulation if recorded"
                />

                <Select
                  label="Floor Insulation Noted"
                  options={FLOOR_INSULATION_OPTIONS.map((opt) => ({
                    value: opt.value,
                    label: opt.label,
                  }))}
                  value={formData.floorInsulation || ''}
                  onChange={(e) => updateField('floorInsulation', e.target.value as FloorInsulationNoted)}
                  placeholder="Select floor insulation..."
                  error={errors.floorInsulation}
                  hint="Floor insulation status"
                />
              </div>

              <Select
                label="Glazing Type"
                options={GLAZING_TYPE_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.glazingType || ''}
                onChange={(e) => updateField('glazingType', e.target.value as GlazingTypeNoted)}
                placeholder="Select glazing type..."
                error={errors.glazingType}
                hint="Type of windows as noted on EPC"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Main Heating System"
                  options={HEATING_SYSTEM_OPTIONS.map((opt) => ({
                    value: opt.value,
                    label: opt.label,
                  }))}
                  value={formData.heatingSystem || ''}
                  onChange={(e) => updateField('heatingSystem', e.target.value as MainHeatingSystem)}
                  placeholder="Select heating system..."
                  error={errors.heatingSystem}
                  hint="Primary heating system type"
                />

                <Select
                  label="Heating Controls"
                  options={HEATING_CONTROLS_OPTIONS.map((opt) => ({
                    value: opt.value,
                    label: opt.label,
                  }))}
                  value={formData.heatingControls || ''}
                  onChange={(e) => updateField('heatingControls', e.target.value as HeatingControls)}
                  placeholder="Select controls..."
                  error={errors.heatingControls}
                  hint="Level of heating controls installed"
                />
              </div>

              <Select
                label="Hot Water System"
                options={HOT_WATER_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formData.hotWater || ''}
                onChange={(e) => updateField('hotWater', e.target.value as HotWaterSystem)}
                placeholder="Select hot water system..."
                error={errors.hotWater}
                hint="How hot water is heated"
              />
            </>
          )}

          {/* Step 3: Recommendations */}
          {currentStep === 2 && (
            <>
              <p className="text-sm text-neutral-600 mb-4">
                Select all the recommendations that appear on your EPC certificate. This helps us analyse which improvements have been suggested and identify any that may have been missed.
              </p>

              <div className="space-y-2">
                {EPC_RECOMMENDATION_OPTIONS.map((option) => (
                  <Checkbox
                    key={option.value}
                    label={option.label}
                    checked={formData.recommendations?.includes(option.value) || false}
                    onChange={() => toggleRecommendation(option.value)}
                  />
                ))}
              </div>

              {/* Summary before submission */}
              <div className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <h3 className="mb-3 font-medium text-neutral-800">Summary</h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <dt className="text-neutral-600">Current Rating:</dt>
                  <dd className="font-medium text-neutral-800">
                    {formData.currentRating || '-'} ({formData.currentScore || '-'} points)
                  </dd>
                  <dt className="text-neutral-600">Property:</dt>
                  <dd className="font-medium text-neutral-800">
                    {PROPERTY_TYPE_OPTIONS.find((o) => o.value === formData.propertyType)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Age:</dt>
                  <dd className="font-medium text-neutral-800">
                    {CONSTRUCTION_AGE_OPTIONS.find((o) => o.value === formData.constructionAge)?.label || '-'}
                  </dd>
                  <dt className="text-neutral-600">Recommendations:</dt>
                  <dd className="font-medium text-neutral-800">
                    {formData.recommendations?.length || 0} selected
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
          isLoading={isAnalysing}
          rightIcon={
            currentStep < totalSteps - 1 ? (
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            ) : (
              <FileSearch className="h-4 w-4" aria-hidden="true" />
            )
          }
        >
          {currentStep < totalSteps - 1 ? 'Next' : 'Analyse My EPC'}
        </Button>
      </div>
    </Card>
  );
}

export default EPCAnalyserForm;
