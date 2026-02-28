import { Service, ProcessStep } from '@/data/services';
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

interface ProcessStepItemProps {
  step: ProcessStep;
  stepNumber: number;
  isLast: boolean;
  colorAccent: string;
}

function ProcessStepItem({
  step,
  stepNumber,
  isLast,
  colorAccent,
}: ProcessStepItemProps) {
  const IconComponent = ICON_MAP[step.step_icon] || Users;

  return (
    <div className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
      {/* Step Circle */}
      <div className="relative flex flex-col items-center">
        <div
          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-4 border-white"
          style={{ backgroundColor: colorAccent }}
        >
          <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </div>

        {/* Vertical line for mobile and desktop */}
        {!isLast && (
          <div
            className="hidden md:block absolute top-14 left-1/2 transform -translate-x-1/2 w-1 h-16 md:h-20"
            style={{ backgroundColor: colorAccent, opacity: 0.2 }}
          />
        )}
        {!isLast && (
          <div
            className="md:hidden absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-16"
            style={{ backgroundColor: colorAccent, opacity: 0.2 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 md:pb-0 md:pt-2">
        <h3 className="text-lg md:text-xl font-bold text-brand-text mb-2">
          {step.step_title}
        </h3>
        <p className="text-sm md:text-base text-brand-text-soft leading-relaxed">
          {step.step_desc}
        </p>
      </div>

      {/* Step number badge */}
      <div
        className="hidden md:flex absolute -left-6 top-0 w-10 h-10 rounded-full items-center justify-center text-white font-bold text-sm"
        style={{ backgroundColor: colorAccent, opacity: 0.15 }}
      >
        <span style={{ color: colorAccent }}>{stepNumber}</span>
      </div>
    </div>
  );
}

interface ProcessTimelineProps {
  service: Service;
}

export function ProcessTimeline({ service }: ProcessTimelineProps) {
  return (
    <div className="section-py w-full">
      <div className="container-custom">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            How It Works
          </h2>
          <p className="text-lg text-brand-text-soft max-w-2xl">
            A clear, step-by-step process to get you results
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-6 mb-8">
            {service.process_steps.map((step, idx) => {
              const IconComponent = ICON_MAP[step.step_icon] || Users;
              return (
                <div key={idx} className="text-center">
                  {/* Step indicator */}
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: service.color_accent }}
                  >
                    {idx + 1}
                  </div>
                  {/* Title */}
                  <h3 className="font-bold text-brand-text mb-2">
                    {step.step_title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-brand-text-soft leading-relaxed">
                    {step.step_desc}
                  </p>

                  {/* Connector line */}
                  {idx < service.process_steps.length - 1 && (
                    <div
                      className="absolute left-1/2 top-20 w-16 h-1 transform translate-x-12 -translate-y-1/2"
                      style={{
                        backgroundColor: service.color_accent,
                        opacity: 0.2,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Horizontal progress line */}
          <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-500"
              style={{
                backgroundColor: service.color_accent,
                width: '33%',
              }}
            />
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative pl-6 md:pl-8">
            {/* Vertical line */}
            <div
              className="absolute left-2 md:left-3 top-0 bottom-0 w-1"
              style={{
                backgroundColor: service.color_accent,
                opacity: 0.1,
              }}
            />

            {/* Steps */}
            <div className="space-y-8">
              {service.process_steps.map((step, idx) => (
                <ProcessStepItem
                  key={idx}
                  step={step}
                  stepNumber={idx + 1}
                  isLast={idx === service.process_steps.length - 1}
                  colorAccent={service.color_accent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
