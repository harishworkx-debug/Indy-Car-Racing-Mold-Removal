import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import PhoneCTA from '@/components/PhoneCTA';
import { getService } from '@/data/services';
import { locations } from '@/data/locations';
import { getLocalBusinessStructuredData, getServiceStructuredData, getFAQStructuredData } from '@/data/structuredData';
import { BUSINESS } from '@/data/business';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const localBusinessData = getLocalBusinessStructuredData();
  const serviceData = getServiceStructuredData(service.title, service.metaDescription);
  const faqData = getFAQStructuredData(service.faqs);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/${service.slug}`}
        ogImage={service.heroImage}
        structuredData={[localBusinessData, serviceData, faqData]}
      />

      <PageHero
        eyebrow={service.shortTitle}
        title={service.h1}
        description={service.metaDescription}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.shortTitle },
        ]}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-3 text-navy-900 mb-6">Overview</h2>
              <div className="space-y-4 text-navy-600 leading-relaxed text-lg">
                <p>{service.intro}</p>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-navy-900 rounded-2xl p-8 sticky top-28">
                <h3 className="font-display font-bold text-white text-xl mb-3">
                  Have Questions About This Service?
                </h3>
                <p className="text-navy-300 text-sm mb-6 leading-relaxed">
                  Call us to discuss your specific situation. We can help you understand
                  whether this service is appropriate for your needs.
                </p>
                <a
                  href={BUSINESS.phoneLink}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/30"
                >
                  <Phone className="h-5 w-5" />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-3 text-navy-900 mb-6">{service.signsHeading}</h2>
              <div className="space-y-3">
                {service.signs.map((sign, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={service.image2}
                alt={service.image2Alt}
                loading="lazy"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <h2 className="heading-3 text-navy-900 mb-4">{service.processHeading}</h2>
            <p className="text-navy-600 text-lg leading-relaxed">
              {service.processParagraph}
            </p>
          </div>

          <div className="space-y-4">
            {service.processSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 bg-navy-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-display font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900 text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <PhoneCTA size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="heading-3 text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-navy-600">
              Common questions about {service.shortTitle.toLowerCase()}.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="eyebrow mb-2">Explore Related Services</p>
              <h2 className="heading-3 text-navy-900">Complementary Mold Solutions</h2>
            </div>
            <Link to="/services" className="text-teal-600 font-semibold text-sm hover:text-teal-700 flex items-center gap-1">
              View All 10 Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.relatedServices.map((related) => (
              <Link
                key={related.slug}
                to={`/${related.slug}`}
                className="card p-6 group"
              >
                <h3 className="font-display font-bold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {related.label}
                </h3>
                <span className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas for this service */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 text-teal-600 mb-3">
              <MapPin className="h-5 w-5" />
              <span className="eyebrow">Service Coverage</span>
            </div>
            <h2 className="heading-3 text-navy-900 mb-4">
              Communities We Serve with {service.shortTitle}
            </h2>
            <p className="text-navy-600">
              Indy Car Racing Mold Removal Experts provides professional {service.shortTitle.toLowerCase()} across central Indiana. Select your community below to learn more about localized service:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/mold-inspector-${loc.slug}`}
                className="p-3.5 rounded-xl bg-white hover:bg-teal-50 border border-navy-100 hover:border-teal-200 text-navy-800 hover:text-teal-700 font-medium text-sm flex items-center justify-between group transition-colors shadow-sm"
              >
                <span>{loc.city}, {loc.state}</span>
                <ArrowRight className="h-4 w-4 text-teal-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm"
            >
              View All Service Areas & Coverage Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
