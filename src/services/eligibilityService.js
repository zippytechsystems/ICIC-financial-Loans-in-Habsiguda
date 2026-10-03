/**
 * Loan Eligibility Guidance Service
 * Employs standard Indian BFSI FOIR (Fixed Obligation to Income Ratio) calculations.
 *
 * RULES:
 * - Never promise approval.
 * - Never quote a single fixed interest rate.
 * - Always provide guidance status: 'likely eligible' | 'may need review' | 'needs documents/co-applicant'.
 * - Always include statutory bank disclaimer.
 */

function calculateEMI(principal, annualRate, tenureYears) {
  const monthlyRate = annualRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
              (Math.pow(1 + monthlyRate, totalMonths) - 1);
  return Math.round(emi);
}

function getIndicativeRateRange(loanType) {
  const typeStr = String(loanType).toLowerCase();
  
  if (typeStr.includes('personal') || typeStr.includes('consumer') || typeStr.includes('card')) {
    return { minRate: 11.5, maxRate: 15.5, label: '11.5% - 15.5% p.a. (indicative range)' };
  }
  if (typeStr.includes('business') || typeStr.includes('msme')) {
    return { minRate: 12.0, maxRate: 16.0, label: '12.0% - 16.0% p.a. (indicative range)' };
  }
  if (typeStr.includes('vehicle')) {
    return { minRate: 8.75, maxRate: 11.5, label: '8.75% - 11.5% p.a. (indicative range)' };
  }
  if (typeStr.includes('plot') || typeStr.includes('home') || typeStr.includes('lap') || 
      typeStr.includes('construction') || typeStr.includes('renovation') || typeStr.includes('transfer')) {
    return { minRate: 8.5, maxRate: 10.5, label: '8.50% - 10.50% p.a. (indicative range)' };
  }
  
  return { minRate: 9.0, maxRate: 12.0, label: '9.0% - 12.0% p.a. (indicative range)' };
}

function evaluateEligibility(params) {
  const { loan_type, monthly_income, existing_emi = 0, loan_amount, tenure_years } = params;

  const { minRate, maxRate, label: indicativeRateRange } = getIndicativeRateRange(loan_type);
  
  // Calculate indicative EMI range
  const emiMin = calculateEMI(loan_amount, minRate, tenure_years);
  const emiMax = calculateEMI(loan_amount, maxRate, tenure_years);
  const emiMid = Math.round((emiMin + emiMax) / 2);

  // Standard Indian Banking FOIR (Fixed Obligation to Income Ratio) rule:
  // Salaried/Self-employed allowed up to 50% for income < 50k, up to 60% for income >= 50k
  const allowedFoirPercent = monthly_income >= 50000 ? 0.60 : 0.50;
  const maxTotalEmiAllowed = Math.round(monthly_income * allowedFoirPercent);
  const permissibleNewEmi = Math.max(0, maxTotalEmiAllowed - existing_emi);

  const proposedTotalObligations = existing_emi + emiMid;
  const proposedFoirPercent = Math.round((proposedTotalObligations / monthly_income) * 100);

  let guidance = 'likely eligible';
  let guidanceMessage = '';
  let recommendations = [];

  if (proposedTotalObligations <= maxTotalEmiAllowed) {
    guidance = 'likely eligible';
    guidanceMessage = 'Based on your stated monthly income and existing commitments, your estimated debt-to-income ratio (FOIR) is within typical banking benchmarks.';
    recommendations.push('Keep last 6 months bank statement and last 3 months pay slips/ITRs ready for fast-track processing.');
  } else if (proposedTotalObligations <= monthly_income * (allowedFoirPercent + 0.10)) {
    guidance = 'may need review';
    guidanceMessage = 'Your estimated EMI is close to standard income eligibility thresholds.';
    recommendations.push('Opting for a longer tenure or a slightly lower loan amount will comfortably bring your EMI within lending limits.');
    recommendations.push('Clearing any short-term credit card dues or personal EMIs will expand your borrowing capacity.');
  } else {
    guidance = 'needs documents/co-applicant';
    guidanceMessage = 'Your proposed EMI exceeds standard single-applicant FOIR limits based on your stated income.';
    recommendations.push('Add an earning co-applicant (such as your working spouse, parent, or business partner) to pool incomes and double your eligible amount.');
    recommendations.push('Consider choosing a longer tenure to reduce the monthly EMI burden.');
  }

  return {
    guidance,
    guidanceMessage,
    indicativeEstimates: {
      loanAmount: loan_amount,
      tenureYears: tenure_years,
      indicativeRateRange,
      indicativeEmiRange: `₹${emiMin.toLocaleString('en-IN')} - ₹${emiMax.toLocaleString('en-IN')} / month`,
      indicativeMidpointEmi: emiMid,
      estimatedFoirRatio: `${proposedFoirPercent}%`,
      maxPermissibleEmi: permissibleNewEmi
    },
    recommendations,
    disclaimer: "Loan approval, interest rate, amount and eligibility are subject to the respective bank/financial institution's terms and approval."
  };
}

module.exports = {
  evaluateEligibility,
  calculateEMI,
  getIndicativeRateRange
};
