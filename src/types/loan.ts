export type Language = "en" | "te";

export type LoanCategory = "all" | "property" | "business" | "personal" | "special";

export interface LoanItem {
  id: string;
  nameEn: string;
  nameTe: string;
  category: LoanCategory;
  icon: string;
  descriptionEn: string;
  descriptionTe: string;
  badgeEn?: string;
  badgeTe?: string;
  isConditional?: boolean;
}

export interface EmiResult {
  monthlyEmi: number;
  totalInterest: number;
  totalPayable: number;
}

export interface EligibilityFormData {
  fullName: string;
  phone: string;
  loanType: string;
  loanAmount: string;
  monthlyIncome: string;
  locationArea: string;
}

export interface TrustItem {
  titleEn: string;
  titleTe: string;
  descEn: string;
  descTe: string;
  icon: string;
}

export interface StepItem {
  stepNumber: number;
  titleEn: string;
  titleTe: string;
  descEn: string;
  descTe: string;
  icon: string;
}

export interface DocumentItem {
  categoryEn: string;
  categoryTe: string;
  detailsEn: string[];
  detailsTe: string[];
  icon: string;
}
