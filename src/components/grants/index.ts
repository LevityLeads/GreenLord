/**
 * Grant Eligibility Checker Components
 *
 * This module exports all components for the Grant Eligibility Checker feature,
 * which helps landlords identify grants they may be eligible for based on
 * property details and tenant circumstances.
 */

export { GrantCheckerForm } from './GrantCheckerForm';
export { GrantResults } from './GrantResults';
export { GrantCard } from './GrantCard';

// Re-export types for convenience
export type { GrantEligibilityInputs, GrantEligibilityResult, GrantEligibilityMatch } from '@/lib/types';
