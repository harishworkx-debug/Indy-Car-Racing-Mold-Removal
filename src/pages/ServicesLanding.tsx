import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Phone, HelpCircle, Layers, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import PhoneCTA from '@/components/PhoneCTA';
import { BUSINESS, IMAGES } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { getLocalBusinessStructuredData } from '@/data/structuredData';

export default function ServicesLanding() {
  const structuredData = getLocalBusinessStructuredData();

  return (
    <>
      <SEO
        title="Mold Removal & Inspection Services in Indianapolis, IN | Indy Car Racing Mold Removal Experts"
        description="Explore our full range of 10 specialized mold inspection, assessment, and remediation services in Indianapolis, IN. Call 463-220-1284 for expert assistance."
        canonicalPath="/services"
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Our Services"
        title="Mold Services in Indianapolis"
        description="Comprehensive, certified mold assessment and remediation services for residential and commercial properties across Indianapolis and central Indiana. Explore our 10 specialized solutions below."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
        image={IMAGES.hero}
        imageAlt={IMAGES.heroAlt}
      />

      {/* Services Grid with Rich Scope Summaries */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow mb-2">Comprehensive Solutions</span>
            <h2 className="heading-2 text-navy-900 mb-4">
              10 Dedicated Mold & Moisture Services
            </h2>
            <p className="text-navy-600 text-lg leading-relaxed">
              Every property faces different structural and moisture dynamics. We provide targeted protocols—from non-invasive infrared inspections to full commercial IICRC S520 remediation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="card flex flex-col justify-between p-6 border border-navy-100 hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="rounded-xl overflow-hidden mb-5 h-48 relative">
                    <img
                      src={service.heroImage}
                      alt={service.heroImageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-navy-900/90 text-teal-300 border border-teal-500/30 backdrop-blur-sm">
                      {service.shortTitle}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-navy-900 text-xl mb-2 group-hover:text-teal-700 transition-colors">
                    <Link to={`/${service.slug}`} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-navy-600 text-sm leading-relaxed mb-5">
                    {service.intro.slice(0, 140)}...
                  </p>

                  {/* Highlights from Scope */}
                  {service.scopeIncluded && service.scopeIncluded.length > 0 && (
                    <div className="space-y-1.5 mb-6 pt-4 border-t border-navy-100">
                      {service.scopeIncluded.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-navy-700">
                          <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <Link
                    to={`/${service.slug}`}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-teal-700 bg-teal-50 hover:bg-teal-600 hover:text-white transition-all group-hover:shadow-md"
                  >
                    <span>View Complete {service.shortTitle} Scope</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Selection Guide / Comparison */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl mb-12">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Decision Guide</span>
            <h2 className="heading-2 text-white mt-1">
              How to Choose the Right Service for Your Situation
            </h2>
            <p className="text-navy-300 text-sm mt-2">
              Not sure which service fits your current situation? Here is a quick reference guide:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-navy-800 border border-navy-700">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">
                Visible Surface Growth
              </h3>
              <p className="text-navy-300 text-xs leading-relaxed mb-4">
                If you see active black, green, or white patches on drywall, baseboards, or floor joists.
              </p>
              <div className="text-xs font-semibold text-teal-400">
                Recommended: <Link to="/mold-removal-indianapolis-in" className="underline hover:text-teal-300">Mold Removal</Link> or <Link to="/mold-remediation-indianapolis-in" className="underline hover:text-teal-300">Mold Remediation</Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-800 border border-navy-700">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">
                Odor Without Visible Mold
              </h3>
              <p className="text-navy-300 text-xs leading-relaxed mb-4">
                If you detect an earthy, musty smell or occupants have respiratory allergies with no obvious surface mold.
              </p>
              <div className="text-xs font-semibold text-teal-400">
                Recommended: <Link to="/mold-inspection-indianapolis-in" className="underline hover:text-teal-300">Mold Inspection</Link> or <Link to="/moisture-problem-assessment-indianapolis-in" className="underline hover:text-teal-300">Moisture Assessment</Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-800 border border-navy-700">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">
                Recent Water Leak or Sump Failure
              </h3>
              <p className="text-navy-300 text-xs leading-relaxed mb-4">
                If a pipe burst, water heater failed, or basement flooded within the past several days.
              </p>
              <div className="text-xs font-semibold text-teal-400">
                Recommended: <Link to="/post-leak-mold-concerns-indianapolis-in" className="underline hover:text-teal-300">Post-Leak Mold Concerns</Link> or <Link to="/basement-mold-inspection-indianapolis-in" className="underline hover:text-teal-300">Basement Inspection</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Across All 10 Communities */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="eyebrow mb-2">Coverage Across Central Indiana</span>
            <h2 className="heading-3 text-navy-900 mb-3">
              All 10 Services Available Throughout Central Indiana
            </h2>
            <p className="text-navy-600 text-sm">
              We dispatch from our Indianapolis headquarters to properties across the metropolitan area:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/mold-inspector-${loc.slug}`}
                className="p-3.5 rounded-xl bg-white hover:bg-teal-50 border border-navy-100 hover:border-teal-200 text-navy-800 hover:text-teal-700 font-medium text-sm flex items-center justify-between group transition-colors shadow-sm"
              >
                <span>{loc.city}</span>
                <ArrowRight className="h-4 w-4 text-teal-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <PhoneCTA size="lg" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-navy-900 bg-white border border-navy-200 hover:border-teal-500 hover:text-teal-700 transition-all shadow-sm"
              >
                Request an Online Callback / Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Discuss Your Specific Property Need?"
        description="Call 463-220-1284 to speak with our Indianapolis mold specialists. We will listen to your observations and schedule an on-site diagnostic survey."
      />
    </>
  );
}
