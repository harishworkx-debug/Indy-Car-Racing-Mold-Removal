import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building, Shield, Phone, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { BUSINESS, IMAGES } from '@/data/business';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { getLocalBusinessStructuredData } from '@/data/structuredData';

export default function ServiceAreasLanding() {
  const structuredData = getLocalBusinessStructuredData();

  return (
    <>
      <SEO
        title="Mold Inspection Service Areas in Indianapolis, IN | Indy Car Racing Mold Removal Experts"
        description="Explore mold inspection service areas in Indianapolis, Carmel, Fishers, Noblesville, Greenwood, and central Indiana. Call 463-220-1284 for expert mold services."
        canonicalPath="/service-areas"
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Service Areas"
        title="Mold Inspection Service Areas in Indianapolis"
        description="Indy Car Racing Mold Removal Experts is based in Indianapolis, Indiana. We provide certified mold inspection, moisture mapping, and remediation services throughout 10 primary municipalities across Marion, Hamilton, Hendricks, and Boone counties."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Service Areas' }]}
        image={IMAGES.indianapolisSkyline}
        imageAlt={IMAGES.indianapolisSkylineAlt}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow mb-2">Verified Regional Coverage</span>
            <h2 className="heading-2 text-navy-900 mb-4">
              10 Dedicated Community Service Areas
            </h2>
            <p className="text-navy-600 text-lg leading-relaxed">
              Every city in our service territory has distinct soil characteristics, foundation types, and seasonal weather patterns. Explore our tailored local service pages below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locations.map((location) => (
              <div
                key={location.slug}
                className="card flex flex-col justify-between overflow-hidden group border border-navy-100 hover:border-teal-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={location.heroImage}
                      alt={location.heroImageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                      <MapPin className="h-5 w-5 text-teal-400 flex-shrink-0" />
                      <div>
                        <div className="font-display font-bold text-lg leading-tight">
                          {location.city}, {location.state}
                        </div>
                        <div className="text-teal-300 text-xs font-medium">
                          Verified Local Service Area
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-navy-600 text-sm leading-relaxed mb-4">
                      {location.intro.slice(0, 140)}...
                    </p>

                    {/* Neighborhoods snippet */}
                    {location.neighborhoods && location.neighborhoods.length > 0 && (
                      <div className="mb-4">
                        <div className="text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">
                          Neighborhoods Covered:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {location.neighborhoods.slice(0, 3).map((nbr, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-navy-50 text-navy-700 border border-navy-100"
                            >
                              {nbr}
                            </span>
                          ))}
                          {location.neighborhoods.length > 3 && (
                            <span className="px-2 py-1 text-xs text-navy-500">
                              +{location.neighborhoods.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/mold-inspector-${location.slug}`}
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold text-teal-700 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-sm"
                  >
                    <span>Explore {location.city} Page</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Quick Links & Call Card */}
          <div className="max-w-4xl mx-auto mt-16 bg-navy-900 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Need Confirmation For Your Address?</span>
              </span>
              <h3 className="font-display font-bold text-white text-2xl mb-3">
                Not Sure If We Cover Your Specific Neighborhood?
              </h3>
              <p className="text-navy-300 text-sm mb-6 leading-relaxed">
                We frequently accommodate properties in unincorporated areas and surrounding communities across central Indiana. Call us with your ZIP code to confirm dispatch availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={BUSINESS.phoneLink}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/30"
                >
                  <Phone className="h-5 w-5" />
                  Call {BUSINESS.phoneDisplay}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-navy-800 hover:bg-navy-700 border border-navy-700 transition-all duration-300"
                >
                  Request Online Callback
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Interlinking Section */}
      <section className="py-12 bg-navy-50 border-t border-navy-100">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <span className="eyebrow mb-1">Our Services</span>
            <h2 className="heading-3 text-navy-900 text-xl mb-2">
              Full Range of Mold Solutions Available Across All Areas
            </h2>
            <p className="text-navy-600 text-sm">
              Any of our 10 specialized services can be scheduled in the communities listed above:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {services.map((srv) => (
              <Link
                key={srv.slug}
                to={`/${srv.slug}`}
                className="px-4 py-2 rounded-xl bg-white border border-navy-200 text-navy-800 hover:text-teal-700 hover:border-teal-300 text-xs font-semibold shadow-sm transition-colors"
              >
                {srv.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
