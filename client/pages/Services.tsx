import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SERVICES } from '@/data/services';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '@/config/seo';
import { generateProfessionalServiceSchema, generateOrganizationSchema } from '@/utils/structured-data';

export default function Services() {
  const [selectedCategory] = useState<string | null>(null);
  const seoConfig = SEO_CONFIG.pages.services;
  const structuredData = [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
  ];

  return (
    <>
      <SEOHead
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        structuredData={structuredData}
      />
      <Layout>
      {/* Hero with Gradient */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-white to-orange-50/20 -z-10"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-32 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container-custom">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-brand-accent" />
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wide">Our Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-6 leading-tight">
            Everything Your Business<br />
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Needs to Thrive</span>
          </h1>

          <p className="text-xl text-brand-text-soft max-w-3xl leading-relaxed">
            From digital marketing to web development—we're here to accelerate your growth with proven, results-driven strategies tailored just for you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-custom section-py">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(service => {
            const Icon = service.icon;
            const isPopular = service.id === 'digital-marketing' || service.id === 'web-development';

            return (
              <Link
                key={service.id}
                to={service.id === 'not-sure' ? '/contact' : `/service/${service.id}`}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
                  isPopular
                    ? 'border-brand-accent/50 bg-gradient-to-br from-white via-white to-orange-50/30 lg:scale-105'
                    : 'border-gray-100 bg-white hover:border-brand-primary/30'
                }`}
              >
                {/* Gradient shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand-accent/5 to-transparent pointer-events-none"></div>

                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-brand-accent/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    Popular
                  </div>
                )}

                {/* Service Image */}
                {service.imageUrl && (
                  <div className="relative w-full h-40 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Color overlay based on accent */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col relative z-10">
                  {/* Icon and badge */}
                  <div className="flex items-start justify-between mb-4">
                    {Icon && (
                      <div className="p-3 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl group-hover:from-brand-primary/20 group-hover:to-brand-secondary/20 transition-colors">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-text-soft mb-4 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-brand-text-soft flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full px-4 py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-lg group-hover:shadow-orange-300/30'
                      : 'bg-gray-50 text-brand-primary border-2 border-gray-200 hover:bg-brand-primary hover:text-white hover:border-brand-primary'
                  }`}>
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background with subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white -z-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
              Why Choose OperateForYou?
            </h2>
            <p className="text-lg text-brand-text-soft max-w-3xl mx-auto">
              We're not just another service provider. We're your growth partner, committed to delivering results that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Expert Team',
                desc: 'Experienced professionals in every service area with proven track records',
                gradient: 'from-brand-primary/10 to-blue-50',
                accent: 'text-brand-primary'
              },
              {
                title: 'Custom Solutions',
                desc: 'Tailored approaches designed for your unique business goals and challenges',
                gradient: 'from-brand-secondary/10 to-green-50',
                accent: 'text-brand-secondary'
              },
              {
                title: 'Proven Results',
                desc: 'Track record of delivering measurable outcomes and real business impact',
                gradient: 'from-brand-accent/10 to-orange-50',
                accent: 'text-brand-accent'
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl p-8 border-2 border-gray-100 transition-all duration-300 hover:border-brand-primary/50 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${item.gradient}`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-transparent to-transparent pointer-events-none"></div>

                {/* Number badge */}
                <div className={`inline-block w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border-2 mb-4 flex items-center justify-center font-bold text-xl ${item.accent} relative z-10`}>
                  {idx + 1}
                </div>

                <h3 className="text-2xl font-bold text-brand-text mb-4 relative z-10">{item.title}</h3>
                <p className="text-brand-text-soft text-base leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5 -z-10"></div>

        {/* Decorative elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl -z-10"></div>

        <div className="container-custom">
          <div className="bg-gradient-to-r from-brand-primary via-blue-600 to-brand-secondary rounded-3xl px-8 md:px-12 py-16 md:py-20 text-center text-white border border-white/10 backdrop-blur-sm relative overflow-hidden group">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
            }}></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Grow?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                Let's explore which service can accelerate your business. Get a free consultation today.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-primary border-2 border-white rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-white/60 text-sm mt-6">
                No credit card required • Typically responds within 2 hours
              </p>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
