import { ServiceOffer, Service } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import {
  TrendingUp,
  Code2,
  Settings,
  BarChart3,
  Users,
  Award,
  Globe,
  Building2,
  Calculator,
  Banknote,
  HelpCircle,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  TrendingUp,
  Code2,
  Settings,
  BarChart3,
  Users,
  Award,
  Globe,
  Building2,
  Calculator,
  Banknote,
  HelpCircle,
};

interface OfferCardProps {
  offer: ServiceOffer;
  colorAccent: string;
  onLearnMore?: () => void;
}

export function OfferCard({
  offer,
  colorAccent,
  onLearnMore,
}: OfferCardProps) {
  const IconComponent = ICON_MAP[offer.icon] || Award;

  return (
    <div
      className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = colorAccent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#f3f4f6';
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 md:w-14 md:h-14 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300"
        style={{ backgroundColor: `${colorAccent}20` }}
      >
        <IconComponent
          className="w-6 h-6 md:w-7 md:h-7"
          style={{ color: colorAccent }}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-brand-text mb-3 line-clamp-2">
        {offer.title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-brand-text-soft leading-relaxed mb-4">
        {offer.short_desc}
      </p>

      {/* Learn More Link */}
      <div className="flex items-center gap-2 font-semibold text-sm transition-all duration-300 group-hover:gap-3"
        style={{ color: colorAccent }}
        onClick={onLearnMore}
      >
        How we do it
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}

interface OfferGridProps {
  service: Service;
  onLearnMore?: (index: number) => void;
}

export function OfferGrid({ service, onLearnMore }: OfferGridProps) {
  return (
    <div className="section-py w-full">
      <div className="container-custom">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-brand-text-soft max-w-2xl">
            Comprehensive solutions tailored to solve your specific challenges
          </p>
        </div>

        {/* Grid with responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {service.what_we_offer.map((offer, idx) => (
            <OfferCard
              key={idx}
              offer={offer}
              colorAccent={service.color_accent}
              onLearnMore={() => onLearnMore?.(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
