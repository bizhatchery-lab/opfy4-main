import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Service, ServiceFAQ } from '@/data/services';

interface FAQItemProps {
  faq: ServiceFAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  colorAccent: string;
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
  colorAccent,
}: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3 transition-all duration-300 hover:shadow-md">
      {/* Question */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-${index}`}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white"
          style={{ backgroundColor: colorAccent }}
        >
          Q
        </div>
        <h3 className="text-base md:text-lg font-semibold text-brand-text flex-1">
          {faq.q}
        </h3>
        <ChevronDown
          className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{
            color: colorAccent,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Answer */}
      <div
        id={`faq-${index}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-4 pt-0 text-brand-text-soft border-t border-gray-200">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

interface FAQAccordionProps {
  service: Service;
}

export function FAQAccordion({ service }: FAQAccordionProps) {
  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    service.faqs.map((_, idx) => idx === 0) // First item expanded by default
  );

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  // Generate FAQ schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* Add FAQ schema to head */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="section-py w-full">
        <div className="container-custom">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-brand-text-soft">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl">
            {service.faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                isOpen={expandedItems[idx]}
                onToggle={() => toggleItem(idx)}
                index={idx}
                colorAccent={service.color_accent}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-2xl text-center"
            style={{ backgroundColor: `${service.color_accent}10` }}
          >
            <h3 className="text-2xl font-bold text-brand-text mb-3">
              Still have questions?
            </h3>
            <p className="text-brand-text-soft mb-6 max-w-md mx-auto">
              Our team is here to help. Get in touch with us for personalized
              guidance.
            </p>
            <button
              className="px-8 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: service.color_accent }}
              onClick={() => {
                const form = document.querySelector('[data-contact-form]');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
