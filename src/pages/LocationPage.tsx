import { useParams, Navigate, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
  Building,
  Shield,
  ClipboardCheck,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import PhoneCTA from '@/components/PhoneCTA';
import { getLocation, locations } from '@/data/locations';
import { services } from '@/data/services';
import { BUSINESS } from '@/data/business';
import { getLocalBusinessStructuredData, getFAQStructuredData } from '@/data/structuredData';

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const actualSlug = slug?.startsWith('mold-inspector-') ? slug.replace('mold-inspector-', '') : slug;
  const location = actualSlug ? getLocation(actualSlug) : undefined;

  if (!location) {
    return <Navigate to="/service-areas" replace />;
  }

  const localBusinessData = getLocalBusinessStructuredData();
  const faqData = getFAQStructuredData(location.faqs);

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        canonicalPath={`/mold-inspector-${location.slug}`}
        ogImage={location.heroImage}
        structuredData={[localBusinessData, faqData]}
      />

      <PageHero
        eyebrow={`${location.city}, ${location.state}`}
        title={location.h1}
        description={location.metaDescription}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Service Areas', path: '/service-areas' },
          { label: `${location.city}, ${location.state}` },
        ]}
        image={location.heroImage}
        imageAlt={location.heroImageAlt}
      />

      {/* Intro & Local Dynamics Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="eyebrow mb-2">Local Service Overview</span>
              <h2 className="heading-3 text-navy-900 mb-6">
                Mold Inspection & Remediation in {location.city}, IN
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed text-lg">
                <p>{location.intro}</p>
                <p>{location.localContext}</p>
              </div>

              {/* Neighborhoods Served in this City */}
              {location.neighborhoods && location.neighborhoods.length > 0 && (
                <div className="mt-8 p-6 rounded-2xl bg-navy-50 border border-navy-100">
                  <div className="flex items-center gap-2 text-teal-700 font-semibold mb-3">
                    <MapPin className="h-5 w-5" />
                    <span>Neighborhoods & Districts Covered in {location.city}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {location.neighborhoods.map((nbr, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-navy-200 text-navy-800 shadow-sm"
                      >
                        {nbr}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Property Landscape Note */}
              {location.propertyLandscape && (
                <div className="mt-6 p-6 rounded-2xl bg-teal-50/60 border border-teal-100 text-navy-700 leading-relaxed text-sm">
                  <div className="flex items-center gap-2 text-teal-800 font-bold mb-2">
                    <Building className="h-4 w-4" />
                    <span>{location.city} Housing Architecture & Foundation Profile</span>
                  </div>
                  <p>{location.propertyLandscape}</p>
                </div>
              )}
            </div>

            {/* Sticky Call Card */}
            <div className="lg:col-span-1">
              <div className="bg-navy-900 rounded-2xl p-8 sticky top-28 shadow-xl text-white">
                <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Rapid Local Dispatch</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3">
                  Serving {location.city}, {location.state}
                </h3>
                <p className="text-navy-300 text-sm mb-6 leading-relaxed">
                  Call our Indianapolis headquarters at 463-220-1284 to discuss your {location.city} property concern. We provide prompt scheduling and clear assessment steps.
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
                    <FileText className="h-4 w-4 text-teal-400 flex-shrink-0" />
                    <span>Transparent Upfront Written Estimates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClipboardCheck className="h-4 w-4 text-teal-400 flex-shrink-0" />
                    <span>Insurance-Ready Documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documented Real Project Scenario Section */}
      {location.projectCase && (
        <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="container-page relative z-10">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Documented {location.city} Project Example</span>
              </div>
              <h2 className="heading-3 text-white mb-2">
                {location.projectCase.title}
              </h2>
              <p className="text-teal-300 text-sm font-medium">
                Location: {location.projectCase.neighborhood}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-navy-800/80 backdrop-blur rounded-2xl p-6 border border-navy-700">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm uppercase tracking-wider mb-3">
                  <FileText className="h-4 w-4" />
                  <span>The Problem Observed</span>
                </div>
                <p className="text-navy-200 text-sm leading-relaxed">
                  {location.projectCase.issue}
                </p>
              </div>

              <div className="bg-navy-800/80 backdrop-blur rounded-2xl p-6 border border-navy-700">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm uppercase tracking-wider mb-3">
                  <Shield className="h-4 w-4" />
                  <span>Remediation Protocol</span>
                </div>
                <p className="text-navy-200 text-sm leading-relaxed">
                  {location.projectCase.remediation}
                </p>
              </div>

              <div className="bg-navy-800/80 backdrop-blur rounded-2xl p-6 border border-navy-700">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm uppercase tracking-wider mb-3">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Verified Outcome</span>
                </div>
                <p className="text-navy-200 text-sm leading-relaxed">
                  {location.projectCase.outcome}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Common Concerns in This City */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={location.image2}
                alt={location.image2Alt}
                loading="lazy"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="eyebrow mb-2">Local Property Factors</p>
              <h2 className="heading-3 text-navy-900 mb-6">
                Common Mold Concerns in {location.city}
              </h2>
              <div className="space-y-3">
                {location.commonConcerns.map((concern, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{concern}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mold Services Available in this Location */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="eyebrow mb-2">Comprehensive Solutions</p>
            <h2 className="heading-3 text-navy-900 mb-4">
              Mold Services Available in {location.city}, IN
            </h2>
            <p className="text-navy-600 leading-relaxed">
              We provide full-spectrum mold inspection, moisture testing, and remediation services for residential and commercial property owners in {location.city}. Explore any specific service below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((srv) => (
              <Link
                key={srv.slug}
                to={`/${srv.slug}`}
                className="card p-6 group hover:border-teal-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {srv.shortTitle} in {location.city}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">
                    {srv.intro.slice(0, 115)}...
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all mt-auto pt-2">
                  <span>Explore {srv.shortTitle}</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all duration-300"
            >
              View Complete Services Guide
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other Communities We Serve */}
      <section className="section-padding bg-navy-50 border-t border-navy-100">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 text-teal-600 mb-2">
              <MapPin className="h-5 w-5" />
              <span className="eyebrow">Central Indiana Coverage</span>
            </div>
            <h2 className="heading-3 text-navy-900 mb-3">
              Other Nearby Communities We Serve
            </h2>
            <p className="text-navy-600 text-sm">
              In addition to {location.city}, Indy Car Racing Mold Removal Experts provides professional mold remediation to surrounding central Indiana areas:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {locations
              .filter((l) => l.slug !== actualSlug)
              .map((otherLoc) => (
                <Link
                  key={otherLoc.slug}
                  to={`/mold-inspector-${otherLoc.slug}`}
                  className="p-3.5 rounded-xl bg-white hover:bg-teal-50 border border-navy-100 hover:border-teal-200 text-navy-800 hover:text-teal-700 font-medium text-sm flex items-center justify-between group transition-colors shadow-sm"
                >
                  <span>{otherLoc.city}</span>
                  <ArrowRight className="h-4 w-4 text-teal-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Location Info Bar */}
      <section className="bg-navy-900 py-12">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-teal-400 mb-2">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold text-sm uppercase tracking-wider">Our Location</span>
              </div>
              <div className="text-white text-lg">
                <div className="font-display font-bold">{BUSINESS.name}</div>
                <div className="text-navy-300 mt-1">
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </div>
              </div>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-teal-400 font-semibold hover:text-teal-300 transition-colors"
              >
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <PhoneCTA size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific FAQ Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow mb-2">Common Questions</span>
            <h2 className="heading-3 text-navy-900 mb-4">
              {location.city} Mold & Moisture FAQs
            </h2>
            <p className="text-navy-600 text-sm">
              Answers to specific property and environmental questions frequently asked by {location.city} homeowners and businesses:
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={location.faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
