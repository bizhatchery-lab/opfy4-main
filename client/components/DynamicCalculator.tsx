import { useState } from 'react';
import { Service } from '@/data/services';
import { ArrowRight } from 'lucide-react';

// Budget Estimator Calculator for Digital Marketing
function AdsBudgetEstimator({
  colorAccent,
  onConsultation,
}: {
  colorAccent: string;
  onConsultation: () => void;
}) {
  const [revenue, setRevenue] = useState(10000);
  const [targetCPL, setTargetCPL] = useState(500);
  const [conversionRate, setConversionRate] = useState(5);

  // Simple calculation: (revenue * conversionRate / 100) / (targetCPL)
  const estimatedLeads = Math.round(
    (revenue * (conversionRate / 100)) / targetCPL
  );
  const estimatedBudget = Math.round(revenue * 0.1); // 10% of revenue for marketing

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg">
      <h3 className="text-2xl font-bold text-brand-text mb-6">
        Ad Budget Calculator
      </h3>

      {/* Revenue Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-brand-text mb-2">
          Monthly Revenue: ₹{revenue.toLocaleString()}
        </label>
        <input
          type="range"
          min="5000"
          max="500000"
          step="5000"
          value={revenue}
          onChange={(e) => setRevenue(parseInt(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${colorAccent} 0%, ${colorAccent} ${
              (revenue / 500000) * 100
            }%, #e5e7eb ${(revenue / 500000) * 100}%, #e5e7eb 100%)`,
          }}
        />
      </div>

      {/* Target CPL Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-brand-text mb-2">
          Target Cost Per Lead (CPL): ₹{targetCPL}
        </label>
        <input
          type="range"
          min="100"
          max="5000"
          step="50"
          value={targetCPL}
          onChange={(e) => setTargetCPL(parseInt(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${colorAccent} 0%, ${colorAccent} ${
              (targetCPL / 5000) * 100
            }%, #e5e7eb ${(targetCPL / 5000) * 100}%, #e5e7eb 100%)`,
          }}
        />
      </div>

      {/* Conversion Rate Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-brand-text mb-2">
          Conversion Rate: {conversionRate}%
        </label>
        <input
          type="range"
          min="1"
          max="20"
          step="0.5"
          value={conversionRate}
          onChange={(e) => setConversionRate(parseFloat(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${colorAccent} 0%, ${colorAccent} ${
              (conversionRate / 20) * 100
            }%, #e5e7eb ${(conversionRate / 20) * 100}%, #e5e7eb 100%)`,
          }}
        />
      </div>

      {/* Results */}
      <div className="bg-brand-bg rounded-xl p-4 md:p-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-brand-text-soft font-semibold mb-1">
              Estimated Monthly Leads
            </p>
            <p
              className="text-2xl md:text-3xl font-bold"
              style={{ color: colorAccent }}
            >
              {estimatedLeads}
            </p>
          </div>
          <div>
            <p className="text-sm text-brand-text-soft font-semibold mb-1">
              Suggested Ad Budget
            </p>
            <p
              className="text-2xl md:text-3xl font-bold"
              style={{ color: colorAccent }}
            >
              ₹{estimatedBudget.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Outcome */}
      <p className="text-sm text-brand-text-soft mb-6">
        Based on your inputs, you could generate approximately{' '}
        <strong>{estimatedLeads} qualified leads</strong> per month with an ad
        spend of <strong>₹{estimatedBudget.toLocaleString()}</strong>.
      </p>

      {/* CTA */}
      <button
        onClick={onConsultation}
        className="w-full px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
        style={{ backgroundColor: colorAccent }}
      >
        Book a Consultation
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// Loan EMI Calculator for Finance & Loan
function LoanEMICalculator({
  colorAccent,
  onConsultation,
}: {
  colorAccent: string;
  onConsultation: () => void;
}) {
  const [principal, setPrincipal] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(36);

  // EMI calculation: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 100 / 12;
  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - principal;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg">
      <h3 className="text-2xl font-bold text-brand-text mb-6">
        Loan EMI Calculator
      </h3>

      {/* Principal Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-brand-text mb-2">
          Loan Amount: ₹{principal.toLocaleString()}
        </label>
        <input
          type="range"
          min="100000"
          max="5000000"
          step="50000"
          value={principal}
          onChange={(e) => setPrincipal(parseInt(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${colorAccent} 0%, ${colorAccent} ${
              (principal / 5000000) * 100
            }%, #e5e7eb ${(principal / 5000000) * 100}%, #e5e7eb 100%)`,
          }}
        />
      </div>

      {/* Interest Rate Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-brand-text mb-2">
          Interest Rate (p.a.): {interestRate.toFixed(1)}%
        </label>
        <input
          type="range"
          min="5"
          max="15"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${colorAccent} 0%, ${colorAccent} ${
              ((interestRate - 5) / 10) * 100
            }%, #e5e7eb ${((interestRate - 5) / 10) * 100}%, #e5e7eb 100%)`,
          }}
        />
      </div>

      {/* Tenure Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-brand-text mb-2">
          Tenure: {tenure} months ({(tenure / 12).toFixed(1)} years)
        </label>
        <input
          type="range"
          min="6"
          max="84"
          step="1"
          value={tenure}
          onChange={(e) => setTenure(parseInt(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${colorAccent} 0%, ${colorAccent} ${
              ((tenure - 6) / 78) * 100
            }%, #e5e7eb ${((tenure - 6) / 78) * 100}%, #e5e7eb 100%)`,
          }}
        />
      </div>

      {/* Results */}
      <div className="bg-brand-bg rounded-xl p-4 md:p-6 mb-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-sm text-brand-text-soft font-semibold">
              Monthly EMI
            </p>
            <p
              className="text-2xl md:text-3xl font-bold"
              style={{ color: colorAccent }}
            >
              ₹{Math.round(emi).toLocaleString()}
            </p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p className="text-brand-text-soft">Total Interest</p>
            <p className="font-semibold text-brand-text">
              ₹{Math.round(totalInterest).toLocaleString()}
            </p>
          </div>
          <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-3">
            <p className="text-brand-text-soft font-semibold">Total Amount Payable</p>
            <p
              className="font-bold text-lg"
              style={{ color: colorAccent }}
            >
              ₹{Math.round(totalAmount).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Outcome */}
      <p className="text-sm text-brand-text-soft mb-6">
        Your monthly EMI would be <strong>₹{Math.round(emi).toLocaleString()}</strong>.
      </p>

      {/* CTA */}
      <button
        onClick={onConsultation}
        className="w-full px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
        style={{ backgroundColor: colorAccent }}
      >
        Check Eligibility
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// GST Penalty Estimator for Business Registration / Accounting
function GSTPenaltyEstimator({
  colorAccent,
  onConsultation,
}: {
  colorAccent: string;
  onConsultation: () => void;
}) {
  const [unreportedTurnover, setUnreportedTurnover] = useState(500000);
  const [monthsDelayed, setMonthsDelayed] = useState(3);

  // Simple penalty: 5% of unreported turnover + ₹1000 per month delayed
  const penaltyRate = 0.05;
  const estimatedPenalty =
    unreportedTurnover * penaltyRate + monthsDelayed * 1000;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg">
      <h3 className="text-2xl font-bold text-brand-text mb-6">
        GST Penalty Estimator
      </h3>

      {/* Unreported Turnover Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-brand-text mb-2">
          Unreported Turnover: ₹{unreportedTurnover.toLocaleString()}
        </label>
        <input
          type="range"
          min="100000"
          max="5000000"
          step="50000"
          value={unreportedTurnover}
          onChange={(e) => setUnreportedTurnover(parseInt(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${colorAccent} 0%, ${colorAccent} ${
              (unreportedTurnover / 5000000) * 100
            }%, #e5e7eb ${(unreportedTurnover / 5000000) * 100}%, #e5e7eb 100%)`,
          }}
        />
      </div>

      {/* Months Delayed Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-brand-text mb-2">
          Months Delayed: {monthsDelayed}
        </label>
        <input
          type="range"
          min="1"
          max="24"
          step="1"
          value={monthsDelayed}
          onChange={(e) => setMonthsDelayed(parseInt(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${colorAccent} 0%, ${colorAccent} ${
              (monthsDelayed / 24) * 100
            }%, #e5e7eb ${(monthsDelayed / 24) * 100}%, #e5e7eb 100%)`,
          }}
        />
      </div>

      {/* Results */}
      <div className="bg-brand-bg rounded-xl p-4 md:p-6 mb-6">
        <p className="text-sm text-brand-text-soft font-semibold mb-2">
          Estimated Penalty
        </p>
        <p
          className="text-3xl md:text-4xl font-bold"
          style={{ color: colorAccent }}
        >
          ₹{Math.round(estimatedPenalty).toLocaleString()}
        </p>
      </div>

      {/* Outcome */}
      <p className="text-sm text-brand-text-soft mb-6">
        Avoid this penalty by filing your GST returns immediately. We can help
        you get compliant and avoid future penalties.
      </p>

      {/* CTA */}
      <button
        onClick={onConsultation}
        className="w-full px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
        style={{ backgroundColor: colorAccent }}
      >
        Get Compliant Now
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

interface DynamicCalculatorProps {
  service: Service;
}

export function DynamicCalculator({ service }: DynamicCalculatorProps) {
  if (!service.calculators) {
    return null;
  }

  const handleConsultation = () => {
    // Scroll to form or trigger modal
    const form = document.querySelector('[data-contact-form]');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="section-py w-full">
      <div className="container-custom">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Quick Calculator
          </h2>
          <p className="text-lg text-brand-text-soft">
            Get an instant estimate based on your needs
          </p>
        </div>

        <div className="max-w-2xl">
          {service.calculator_type === 'ads-budget-estimator' && (
            <AdsBudgetEstimator
              colorAccent={service.color_accent}
              onConsultation={handleConsultation}
            />
          )}

          {service.calculator_type === 'loan-emi' && (
            <LoanEMICalculator
              colorAccent={service.color_accent}
              onConsultation={handleConsultation}
            />
          )}

          {service.calculator_type === 'gst-penalty-estimator' && (
            <GSTPenaltyEstimator
              colorAccent={service.color_accent}
              onConsultation={handleConsultation}
            />
          )}
        </div>
      </div>
    </div>
  );
}
