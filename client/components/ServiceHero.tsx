import { ArrowRight } from 'lucide-react';
import { Service } from '@/data/services';

interface ServiceHeroProps {
  service: Service;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
}

export function ServiceHero({
  service,
  onPrimaryCTA,
  onSecondaryCTA,
}: ServiceHeroProps) {
  return (
    <section className="bg-brand-bg py-8 md:py-16 lg:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
          {/* Hero Image - animated slide-in from left on desktop, top on mobile */}
          {service.hero_image && (
            <div className="order-first lg:order-none rounded-2xl overflow-hidden shadow-lg animate-fade">
              <img
                src={service.hero_image}
                alt={`${service.title} hero image`}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                loading="lazy"
              />
            </div>
          )}

          {/* Hero Content - fade-up animation */}
          <div className="animate-fade" style={{ animationDelay: '0.1s' }}>
            {/* Badge - optional */}
            {service.hero_badge && (
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold text-white animate-fade"
                style={{
                  backgroundColor: service.color_accent,
                  animationDelay: '0.2s',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-white"></span>
                {service.hero_badge}
              </div>
            )}

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight mb-4 md:mb-6"
              style={{
                animation: 'fadeInOut 0.8s ease-out forwards',
              }}
            >
              {service.title}
            </h1>

            {/* Tagline */}
            <p
              className="text-lg md:text-xl lg:text-2xl text-brand-text-soft font-semibold mb-4 md:mb-6"
              style={{
                animation: 'fadeInOut 0.8s ease-out 0.1s forwards',
              }}
            >
              {service.tagline}
            </p>

            {/* Short Intro */}
            <p
              className="text-base md:text-lg text-brand-text-soft leading-relaxed mb-6 md:mb-8 max-w-md"
              style={{
                animation: 'fadeInOut 0.8s ease-out 0.2s forwards',
              }}
            >
              {service.short_intro}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
              style={{
                animation: 'fadeInOut 0.8s ease-out 0.3s forwards',
              }}
            >
              {/* Primary CTA */}
              <button
                onClick={onPrimaryCTA}
                className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
                style={{
                  backgroundColor: service.color_accent,
                  borderColor: service.color_accent,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {service.hero_cta_text}
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onSecondaryCTA}
                className="btn-secondary inline-flex items-center justify-center gap-2 whitespace-nowrap"
                style={{
                  borderColor: service.color_accent,
                  color: service.color_accent,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${service.color_accent}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                {service.hero_secondary_cta_text}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
