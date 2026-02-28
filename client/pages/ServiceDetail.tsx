import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';
import { SERVICES, getService } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '@/config/seo';
import { generateServiceSchema, generateOrganizationSchema } from '@/utils/structured-data';
import { ServiceHero } from '@/components/ServiceHero';
import { OfferGrid } from '@/components/OfferCard';
import { DeliverableAccordion } from '@/components/DeliverableAccordion';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { CaseStudyCarousel } from '@/components/CaseStudyCarousel';
import { DynamicCalculator } from '@/components/DynamicCalculator';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTABanner } from '@/components/CTABanner';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = getService(id || '');
  const formRef = useRef<HTMLDivElement>(null);

  if (!service) {
    return (
      <>
        <SEOHead
          title="Service Not Found"
          description="The service you're looking for doesn't exist."
          noindex={true}
        />
        <Layout>
          <section className="container-custom section-py text-center">
            <h1 className="text-3xl font-bold text-brand-text mb-4">Service Not Found</h1>
            <p className="text-brand-text-soft mb-8">The service you're looking for doesn't exist.</p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white border-2 border-brand-primary rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-colors font-medium"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </Layout>
      </>
    );
  }

  const relatedServices = SERVICES.filter(s => s.slug !== id).slice(0, 3);

  // Generate SEO metadata
  const seoTitle = service.seo_meta_title || service.title;
  const seoDescription = service.seo_meta_description || service.tagline;

  // Generate structured data including breadcrumb
  const structuredData = [
    generateOrganizationSchema(),
    generateServiceSchema(id || '', service.title, service.tagline, service.what_we_offer.map(o => o.title)),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://operateforyou.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://operateforyou.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: `https://operateforyou.com/service/${service.slug}`,
        },
      ],
    },
  ];

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in ${service.title} services.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        url={`${SEO_CONFIG.defaults.url}/service/${id}`}
        structuredData={structuredData}
      />
      <Layout>
        {/* Hero Section */}
        <ServiceHero
          service={service}
          onPrimaryCTA={handleScrollToForm}
          onSecondaryCTA={handleWhatsAppClick}
        />

        {/* Main Content with Sidebar */}
        <section className="py-8 md:py-16 lg:py-24 w-full">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-0">
                {/* What We Offer */}
                <OfferGrid
                  service={service}
                  onLearnMore={() => handleScrollToForm()}
                />

                {/* Deliverables & Metrics */}
                <DeliverableAccordion service={service} />

                {/* Process Timeline */}
                <ProcessTimeline service={service} />

                {/* Case Studies Carousel */}
                <CaseStudyCarousel service={service} />

                {/* Dynamic Calculator */}
                <DynamicCalculator service={service} />

                {/* FAQ Accordion */}
                <FAQAccordion service={service} />
              </div>

              {/* Sidebar - Contact Form */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div
                  className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 lg:p-6 shadow-sm"
                  ref={formRef}
                  data-contact-form
                >
                  <h3 className="text-xl md:text-2xl lg:text-xl font-bold text-brand-text mb-3">
                    Get Started
                  </h3>
                  <p className="text-sm md:text-base lg:text-xs text-brand-text-soft mb-4">
                    Tell us about your needs and we'll get back to you shortly.
                  </p>
                  <ContactForm defaultService={id} variant="compact" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <CTABanner
          service={service}
          onPrimaryCTA={handleScrollToForm}
          onSecondaryCTA={handleWhatsAppClick}
        />

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="bg-brand-bg section-py w-full">
            <div className="container-custom">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-8 md:mb-12 text-center">
                Other Services You Might Need
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    to={`/service/${relatedService.slug}`}
                    className="dynamic-glow service-card group"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white"
                      style={{ backgroundColor: relatedService.color_accent }}
                    >
                      {relatedService.icon && <relatedService.icon className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-brand-text-soft text-sm mb-6">
                      {relatedService.tagline}
                    </p>
                    <div
                      className="font-semibold flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                      style={{ color: relatedService.color_accent }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </Layout>
    </>
  );
}
