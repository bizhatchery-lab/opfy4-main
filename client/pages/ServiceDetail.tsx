import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';
import { SERVICES, getService } from '@/data/services';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
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
                  className="relative overflow-hidden rounded-2xl p-6 md:p-8 lg:p-7 shadow-lg border-2"
                  style={{
                    borderColor: service.color_accent,
                    background: `linear-gradient(135deg, white 0%, ${service.color_accent}05 100%)`
                  }}
                  ref={formRef}
                  data-contact-form
                >
                  {/* Accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: service.color_accent }}
                  ></div>

                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4" style={{ color: service.color_accent }} />
                    <span className="text-xs font-bold uppercase tracking-wide" style={{ color: service.color_accent }}>
                      Quick Start
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-xl font-bold text-brand-text mb-2">
                    Ready to Discuss?
                  </h3>
                  <p className="text-sm text-brand-text-soft mb-6">
                    Tell us about your goals and we'll create a custom plan for you.
                  </p>

                  {/* Quick benefits */}
                  <ul className="space-y-2 mb-6 text-xs text-brand-text-soft">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.color_accent }} />
                      Free consultation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.color_accent }} />
                      No commitment required
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.color_accent }} />
                      Expert guidance included
                    </li>
                  </ul>

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
          <section className="relative py-20 md:py-28 overflow-hidden w-full">
            {/* Background with subtle gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
                  Explore More Services
                </h2>
                <p className="text-lg text-brand-text-soft max-w-2xl mx-auto">
                  Complement your current solution with our other specialized services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => {
                  const Icon = relatedService.icon;
                  return (
                    <Link
                      key={relatedService.slug}
                      to={`/service/${relatedService.slug}`}
                      className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-200 p-7 flex flex-col"
                    >
                      {/* Hover gradient effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, ${relatedService.color_accent}05 0%, transparent 100%)`
                        }}
                      ></div>

                      {/* Accent top bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all"
                        style={{ backgroundColor: relatedService.color_accent }}
                      ></div>

                      <div className="relative z-10">
                        {/* Icon with colored background */}
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: relatedService.color_accent }}
                        >
                          {Icon && <Icon className="w-7 h-7" />}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:bg-clip-text transition-all">
                          {relatedService.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-brand-text-soft text-sm mb-6 leading-relaxed flex-grow">
                          {relatedService.tagline}
                        </p>

                        {/* CTA */}
                        <div
                          className="font-semibold flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                          style={{ color: relatedService.color_accent }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </Layout>
    </>
  );
}
