import { Link } from 'react-router-dom';
import { Shield, MapPin, Wrench, FileText, ArrowRight, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { BUSINESS, IMAGES } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { getLocalBusinessStructuredData } from '@/data/structuredData';

export default function Sitemap() {
  const structuredData = getLocalBusinessStructuredData();

  return (
    <>
      <SEO
        title="HTML Sitemap | Indy Car Racing Mold Removal Experts"
        description="Comprehensive site map of Indy Car Racing Mold Removal Experts. Easily access all our mold inspection, remediation services, and service areas across central Indiana."
        canonicalPath="/sitemap"
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Site Navigation"
        title="Website Sitemap"
        description="Browse all pages, mold remediation services, and service area locations offered by Indy Car Racing Mold Removal Experts in Indianapolis and surrounding areas."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Sitemap' }]}
        image={IMAGES.clipboard}
        imageAlt="Inspection checklist and documentation on clipboard"
      />

      <section className="section-padding bg-white">
        <div className="container-page max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Core Pages */}
            <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-600/10 flex items-center justify-center text-teal-600">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-navy-900">
                    Main Pages
                  </h2>
                  <p className="text-xs text-navy-500">Core company information</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-navy-700 hover:text-teal-600 font-medium transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-teal-500 flex-shrink-0" />
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 text-navy-700 hover:text-teal-600 font-medium transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-teal-500 flex-shrink-0" />
                    About Our Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-navy-700 hover:text-teal-600 font-medium transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-teal-500 flex-shrink-0" />
                    All Mold Services Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-areas"
                    className="flex items-center gap-2 text-navy-700 hover:text-teal-600 font-medium transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-teal-500 flex-shrink-0" />
                    Service Areas Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="flex items-center gap-2 text-navy-700 hover:text-teal-600 font-medium transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-teal-500 flex-shrink-0" />
                    Frequently Asked Questions (FAQs)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 text-navy-700 hover:text-teal-600 font-medium transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-teal-500 flex-shrink-0" />
                    Contact & Directions
                  </Link>
                </li>
              </ul>
            </div>

            {/* All 10 Services */}
            <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-600/10 flex items-center justify-center text-teal-600">
                  <Wrench className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-navy-900">
                    Mold Services
                  </h2>
                  <p className="text-xs text-navy-500">10 specialized service pages</p>
                </div>
              </div>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/${service.slug}`}
                      className="flex items-start gap-2 text-navy-700 hover:text-teal-600 font-medium text-sm transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* All 10 Service Areas */}
            <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-600/10 flex items-center justify-center text-teal-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-navy-900">
                    Service Areas
                  </h2>
                  <p className="text-xs text-navy-500">10 central Indiana locations</p>
                </div>
              </div>
              <ul className="space-y-3">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      to={`/mold-inspector-${loc.slug}`}
                      className="flex items-center gap-2 text-navy-700 hover:text-teal-600 font-medium text-sm transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 text-teal-500 flex-shrink-0" />
                      <span>{loc.city}, {loc.state}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* XML Sitemap vs HTML Sitemap Clarification */}
          <div className="mt-8 text-center text-xs text-navy-500">
            <span>Looking for our machine-readable XML index for search engines? View our </span>
            <a
              href="https://www.moldremoval-speedway.com/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-semibold underline hover:text-teal-700"
            >
              XML Sitemap (sitemap.xml)
            </a>
            <span>. This HTML sitemap is maintained as a human-navigable architectural index of our website.</span>
          </div>

          {/* Quick Contact Box */}
          <div className="mt-8 p-8 bg-navy-950 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-600/20 flex items-center justify-center text-teal-400">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold">
                  {BUSINESS.name}
                </h3>
                <p className="text-navy-300 text-sm">
                  {BUSINESS.address.full}
                </p>
              </div>
            </div>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/30"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
