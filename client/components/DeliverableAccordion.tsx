import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Service, ServiceDeliverable, ServiceMetric } from '@/data/services';
import {
  Code2,
  Settings,
  BarChart3,
  Users,
  Award,
  Globe,
  Building2,
  Calculator,
  Banknote,
  TrendingUp,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Code2,
  Settings,
  BarChart3,
  Users,
  Award,
  Globe,
  Building2,
  Calculator,
  Banknote,
  TrendingUp,
};

interface DeliverableItemProps {
  deliverable: ServiceDeliverable;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  colorAccent: string;
}

function DeliverableItem({
  deliverable,
  isOpen,
  onToggle,
  index,
  colorAccent,
}: DeliverableItemProps) {
  const IconComponent = deliverable.icon
    ? ICON_MAP[deliverable.icon]
    : Award;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3 transition-all duration-300 hover:shadow-md">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-start gap-4 hover:bg-gray-50 transition-colors text-left"
        aria-expanded={isOpen}
        aria-controls={`deliverable-${index}`}
      >
        {/* Icon */}
        <div
          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
          style={{ backgroundColor: `${colorAccent}20` }}
        >
          <IconComponent
            className="w-5 h-5"
            style={{ color: colorAccent }}
          />
        </div>

        {/* Title and Chevron */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-brand-text">
            {deliverable.title}
          </h3>
        </div>

        <ChevronDown
          className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{
            color: colorAccent,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Content */}
      <div
        id={`deliverable-${index}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-4 pt-0 text-brand-text-soft border-t border-gray-200">
          {deliverable.description}
        </div>
      </div>
    </div>
  );
}

interface DeliverableAccordionProps {
  service: Service;
}

export function DeliverableAccordion({ service }: DeliverableAccordionProps) {
  // First 2 expanded on desktop, first 1 on mobile
  const initialExpanded = service.deliverables.map((_, idx) => idx < 2);
  const [expanded, setExpanded] = useState(initialExpanded);

  const toggleItem = (index: number) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className="section-py w-full">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Left: Accordion */}
          <div className="lg:col-span-2">
            <div className="mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
                What You Get
              </h2>
              <p className="text-lg text-brand-text-soft">
                Detailed breakdown of deliverables included in our service
              </p>
            </div>

            <div className="space-y-2">
              {service.deliverables.map((deliverable, idx) => (
                <DeliverableItem
                  key={idx}
                  deliverable={deliverable}
                  isOpen={expanded[idx]}
                  onToggle={() => toggleItem(idx)}
                  index={idx}
                  colorAccent={service.color_accent}
                />
              ))}
            </div>
          </div>

          {/* Right: Metrics Counter */}
          {service.metrics && service.metrics.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-brand-bg rounded-2xl p-6 md:p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-brand-text mb-6">
                  Our Track Record
                </h3>

                <div className="space-y-6">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div
                        className="text-3xl md:text-4xl font-bold mb-1"
                        style={{ color: service.color_accent }}
                      >
                        {metric.value}
                      </div>
                      <p className="text-sm md:text-base text-brand-text-soft font-medium">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="w-full mt-8 px-4 py-3 rounded-lg font-semibold text-white transition-opacity duration-300 hover:opacity-90"
                  style={{ backgroundColor: service.color_accent }}
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
