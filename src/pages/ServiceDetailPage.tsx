import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Shield,
  DollarSign,
  AlertTriangle,
  ClipboardCheck,
  Clock,
  Sparkles,
  Info,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
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

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="eyebrow mb-2">Service Overview</span>
              <h2 className="heading-3 text-navy-900 mb-6">{service.title} in Indianapolis</h2>
              <div className="space-y-4 text-navy-600 leading-relaxed text-lg">
                <p>{service.intro}</p>
              </div>

              {/* What is Included (Scope of Work) */}
              {service.scopeIncluded && service.scopeIncluded.length > 0 && (
                <div className="mt-10 p-8 rounded-2xl bg-navy-50 border border-navy-100">
                  <div className="flex items-center gap-2 text-teal-700 font-bold text-lg mb-4">
                    <ClipboardCheck className="h-6 w-6 text-teal-600" />
                    <span>What Is Included in This Service</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {service.scopeIncluded.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-navy-700 leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Sticky CTA Card */}
            <div className="lg:col-span-1">
              <div className="bg-navy-900 rounded-2xl p-8 sticky top-28 shadow-xl text-white">
                <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Direct Specialist Line</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3">
                  Discuss This Service
                </h3>
                <p className="text-navy-300 text-sm mb-6 leading-relaxed">
                  Call our Indianapolis office at 463-220-1284. We will listen to what you have observed and confirm whether this service matches your property needs.
                </p>
                <a
                  href={BUSINESS.phoneLink}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/30 text-center"
                >
                  <Phone className="h-5 w-5" />
                  {BUSINESS.phoneDisplay}
                </a>

                <div className="mt-6 pt-6 border-t border-navy-800 space-y-3 text-xs text-navy-300">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-teal-400 flex-shrink-0" />
                    <span>IICRC S520 Standards Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-teal-400 flex-shrink-0" />
                    <span>Itemized Upfront Estimates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-teal-400 flex-shrink-0" />
                    <span>Zero Hidden Fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need This Service (Trigger Situations) */}
      {service.whenNeeded && service.whenNeeded.length > 0 && (
        <section className="py-12 bg-teal-900 text-white">
          <div className="container-page">
            <div className="max-w-3xl mb-8">
              <span className="text-teal-300 text-xs font-bold uppercase tracking-wider">Applicable Scenarios</span>
              <h2 className="heading-3 text-white mt-1">
                When Is This Service Needed?
              </h2>
              <p className="text-teal-100 text-sm mt-2">
                This service is specifically designed for property owners encountering any of the following situations:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.whenNeeded.map((situation, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-teal-800/60 border border-teal-700/50 flex items-start gap-3 text-sm text-teal-50"
                >
                  <CheckCircle2 className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{situation}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Signs Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow mb-2">Visual & Olfactory Clues</span>
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

      {/* Pricing Factors & Scope Estimating */}
      {service.pricingFactors && service.pricingFactors.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-page">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-wider mb-2">
                <DollarSign className="h-4 w-4" />
                <span>Honest Pricing Guidance</span>
              </div>
              <h2 className="heading-3 text-navy-900 mb-3">
                What Influences the Cost of {service.shortTitle}?
              </h2>
              <p className="text-navy-600 leading-relaxed">
                We believe in transparent, upfront pricing. Because every property layout and moisture condition is unique, costs depend on verifiable project factors rather than arbitrary flat rates:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.pricingFactors.map((pf, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-navy-50 border border-navy-100 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-navy-900 mb-1.5">{pf.factor}</h3>
                    <p className="text-navy-600 text-sm leading-relaxed">{pf.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Limitations & Clear Boundaries */}
      {service.limitations && service.limitations.length > 0 && (
        <section className="py-12 bg-amber-50/60 border-y border-amber-200">
          <div className="container-page">
            <div className="flex items-start gap-4 max-w-4xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
                  Service Boundaries & Important Considerations
                </h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-3">
                  To ensure complete transparency and realistic expectations, please review these key boundaries for this service:
                </p>
                <ul className="space-y-2 text-sm text-navy-800">
                  {service.limitations.map((limit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{limit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step-by-Step Client Roadmap */}
      {service.nextStepsRoadmap && service.nextStepsRoadmap.length > 0 && (
        <section className="section-padding bg-navy-900 text-white">
          <div className="container-page">
            <div className="max-w-3xl mb-12">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Step-by-Step Roadmap</span>
              <h2 className="heading-3 text-white mt-1">
                What to Expect: From Call to Completion
              </h2>
              <p className="text-navy-300 text-sm mt-2">
                We make the process simple and stress-free. Here is exactly what happens when you work with us:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.nextStepsRoadmap.map((roadmap) => (
                <div
                  key={roadmap.step}
                  className="p-6 rounded-2xl bg-navy-800 border border-navy-700 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 font-bold text-sm mb-3">
                      {roadmap.step}
                    </div>
                    <h3 className="font-display font-bold text-white text-base mb-2">
                      {roadmap.title}
                    </h3>
                    <p className="text-navy-300 text-sm leading-relaxed">
                      {roadmap.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                  <p className="text-navy-600 leading-relaxed">{step.description || step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/30"
            >
              <Phone className="h-5 w-5" />
              Schedule Assessment: {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Available Across Central Indiana */}
      <section className="py-12 bg-navy-50 border-t border-navy-100">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <span className="eyebrow mb-1">Service Coverage</span>
            <h2 className="heading-3 text-navy-900 text-xl mb-2">
              Available Across Indianapolis & Surrounding Communities
            </h2>
            <p className="text-navy-600 text-sm">
              We provide {service.title.toLowerCase()} throughout Marion County and nearby central Indiana municipalities:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/mold-inspector-${loc.slug}`}
                className="px-4 py-2 rounded-xl bg-white border border-navy-200 text-navy-800 hover:text-teal-700 hover:border-teal-300 text-xs font-semibold shadow-sm transition-colors"
              >
                {loc.city}, IN
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-3 text-navy-900 mb-4">
              Frequently Asked Questions About {service.shortTitle}
            </h2>
            <p className="text-navy-600">
              Clear answers to the questions Indianapolis homeowners ask most about this service:
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="heading-3 text-navy-900 mb-4">Related Services</h2>
            <p className="text-navy-600 text-sm">
              Explore complementary mold assessment and moisture mitigation services:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {service.relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={`/${rel.slug}`}
                className="p-5 rounded-2xl bg-white border border-navy-100 hover:border-teal-300 hover:shadow-md transition-all group"
              >
                <div className="font-display font-bold text-navy-900 text-sm mb-2 group-hover:text-teal-700 transition-colors">
                  {rel.label}
                </div>
                <div className="inline-flex items-center gap-1 text-teal-600 text-xs font-semibold group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
