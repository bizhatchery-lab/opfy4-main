import { ArrowRight, MessageCircle } from 'lucide-react';
import { Service } from '@/data/services';

interface CTABannerProps {
  service: Service;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
}

export function CTABanner({
  service,
  onPrimaryCTA,
  onSecondaryCTA,
}: CTABannerProps) {
  return (
    <div
      className="section-py w-full"
      style={{ backgroundColor: `${service.color_accent}10` }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-brand-text-soft leading-relaxed mb-8">
              Join hundreds of businesses already growing with our{' '}
              <strong>{service.title.toLowerCase()}</strong> services. Let's
              discuss how we can help you achieve your goals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
              {service.metrics.slice(0, 2).map((metric, idx) => (
                <div key={idx}>
                  <div
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: service.color_accent }}
                  >
                    {metric.value}
                  </div>
                  <p className="text-sm text-brand-text-soft font-medium">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Buttons */}
          <div className="flex flex-col gap-4">
            {/* Primary CTA */}
            <button
              onClick={onPrimaryCTA}
              className="w-full px-8 py-4 rounded-lg font-bold text-white text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: service.color_accent }}
            >
              {service.hero_cta_text}
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Secondary CTA - WhatsApp/Phone */}
            <button
              onClick={onSecondaryCTA}
              className="w-full px-8 py-4 rounded-lg font-bold border-2 transition-all duration-300 hover:bg-white flex items-center justify-center gap-3"
              style={{
                borderColor: service.color_accent,
                color: service.color_accent,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${service.color_accent}10`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>

            {/* Trust note */}
            <p className="text-xs md:text-sm text-brand-text-soft text-center mt-2">
              ✓ Free consultation • No obligation • Response within 2 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
