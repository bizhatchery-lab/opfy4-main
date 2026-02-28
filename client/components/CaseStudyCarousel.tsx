import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Service } from '@/data/services';

interface CaseStudyCardProps {
  index: number;
  totalCases: number;
  onPrev: () => void;
  onNext: () => void;
  colorAccent: string;
}

export function CaseStudyCarousel({ service }: { service: Service }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  if (!service.case_studies || service.case_studies.length === 0) {
    return null;
  }

  const currentCase = service.case_studies[currentIndex];
  const totalCases = service.case_studies.length;

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalCases - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === totalCases - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="section-py w-full">
        <div className="container-custom">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-brand-text-soft">
              Real results from real clients we've worked with
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              {/* Left: Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 lg:h-96">
                <img
                  src={currentCase.image}
                  alt={currentCase.client_name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-between">
                {/* Client badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold w-fit mb-4"
                  style={{ backgroundColor: service.color_accent }}
                >
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  Case Study {currentIndex + 1}
                </div>

                {/* Client info */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-2">
                    {currentCase.client_name}
                  </h3>
                  <p
                    className="text-sm md:text-base font-semibold mb-4"
                    style={{ color: service.color_accent }}
                  >
                    {currentCase.industry}
                  </p>

                  {/* Problem-Solution */}
                  <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                    <div>
                      <h4 className="font-bold text-brand-text mb-2">
                        The Challenge
                      </h4>
                      <p className="text-brand-text-soft leading-relaxed">
                        {currentCase.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-brand-text mb-2">
                        Our Solution
                      </h4>
                      <p className="text-brand-text-soft leading-relaxed">
                        {currentCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results - Prominent */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="font-bold text-brand-text mb-3">Results</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.result_metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 rounded-lg text-white font-semibold text-sm"
                          style={{ backgroundColor: service.color_accent }}
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSelectedCase(currentIndex)}
                    className="px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: service.color_accent }}
                  >
                    See Full Case Study
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 md:mt-10">
              <div className="flex gap-3">
                <button
                  onClick={goToPrev}
                  className="p-3 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
                  aria-label="Previous case study"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="p-3 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
                  aria-label="Next case study"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {service.case_studies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className="w-2 h-2 rounded-full transition-colors"
                    style={{
                      backgroundColor:
                        idx === currentIndex
                          ? service.color_accent
                          : '#d1d5db',
                    }}
                    aria-label={`Go to case study ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="text-sm font-semibold text-brand-text-soft">
                {currentIndex + 1} / {totalCases}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full case study details */}
      {selectedCase !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 flex items-center justify-between p-6">
              <h2 className="text-2xl font-bold text-brand-text">
                {service.case_studies[selectedCase].client_name}
              </h2>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <img
                src={service.case_studies[selectedCase].image}
                alt={service.case_studies[selectedCase].client_name}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: service.color_accent }}
                  >
                    Industry
                  </h3>
                  <p className="text-brand-text-soft">
                    {service.case_studies[selectedCase].industry}
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: service.color_accent }}
                  >
                    The Challenge
                  </h3>
                  <p className="text-brand-text-soft leading-relaxed">
                    {service.case_studies[selectedCase].problem}
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: service.color_accent }}
                  >
                    Our Solution
                  </h3>
                  <p className="text-brand-text-soft leading-relaxed">
                    {service.case_studies[selectedCase].solution}
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-bold mb-4"
                    style={{ color: service.color_accent }}
                  >
                    Results & Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {service.case_studies[selectedCase].result_metrics.map(
                      (metric, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg text-white font-semibold"
                          style={{ backgroundColor: service.color_accent }}
                        >
                          {metric}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() =>
                    setSelectedCase((prev) =>
                      prev === 0 ? service.case_studies.length - 1 : prev! - 1
                    )
                  }
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  ← Previous
                </button>
                <button
                  onClick={() =>
                    setSelectedCase((prev) =>
                      prev === service.case_studies.length - 1 ? 0 : prev! + 1
                    )
                  }
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
