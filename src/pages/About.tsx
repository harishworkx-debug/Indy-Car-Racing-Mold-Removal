import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  MapPin,
  Phone,
  Eye,
  Droplets,
  ClipboardList,
  Home,
  CheckCircle2,
  FileText,
  Lock,
  Award,
  Sparkles,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import PhoneCTA from '@/components/PhoneCTA';
import { BUSINESS, IMAGES } from '@/data/business';
import { getLocalBusinessStructuredData } from '@/data/structuredData';

export default function About() {
  const structuredData = getLocalBusinessStructuredData();

  return (
    <>
      <SEO
        title="Mold Removal Company in Indianapolis, IN | Indy Car Racing Mold Removal Experts"
        description="Learn about Indy Car Racing Mold Removal Experts, an established mold removal company in Indianapolis, IN. IICRC S520 standards, fully insured, and transparent service policies. Call 463-220-1284."
        canonicalPath="/about"
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="About Us"
        title="About Our Indianapolis Mold Removal Company"
        description="A locally based mold inspection and remediation company serving Indianapolis and central Indiana. We focus on transparent diagnostics, rigorous containment, and restoring healthy indoor environments."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
        image={IMAGES.clipboard}
        imageAlt={IMAGES.clipboardAlt}
      />

      {/* Main About Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.inspection}
                  alt={IMAGES.inspectionAlt}
                  loading="lazy"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal-600/10 rounded-2xl -z-10 hidden md:block" />
            </div>

            <div>
              <span className="eyebrow mb-2">Our Company</span>
              <h2 className="heading-2 text-navy-900 mb-6">
                A Principled, Scientific Approach to Mold Remediation
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Indy Car Racing Mold Removal Experts is an environmental mold assessment and remediation company located in Indianapolis, Indiana at {BUSINESS.address.street}. We serve homeowners, commercial facility managers, and property managers throughout Marion County and the greater Indianapolis metropolitan area.
                </p>
                <p>
                  We founded our company on a straightforward principle: <strong>mold is a symptom of an underlying moisture problem</strong>. Simply applying bleach or painting over dark spots does nothing to solve the root issue and guarantees mold will return. Instead, our team uses calibrated moisture meters, infrared thermal cameras, and psychrometric analysis to identify exactly why water is entering the structure.
                </p>
                <p>
                  Once the moisture source is identified, we execute strict physical containment following the <strong>IICRC S520 Standard and Reference Guide for Professional Mold Remediation</strong>. We isolate contaminated areas under negative air pressure, extract non-salvageable materials safely, sanitize remaining structural framing with EPA-registered antimicrobial solutions, and dry building timbers to target dry standards.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-navy-50 border border-navy-100 text-center">
                  <div className="font-display font-bold text-teal-700 text-2xl">100%</div>
                  <div className="text-navy-600 text-xs font-semibold mt-1">Locally Based</div>
                </div>
                <div className="p-4 rounded-xl bg-navy-50 border border-navy-100 text-center">
                  <div className="font-display font-bold text-teal-700 text-2xl">IICRC</div>
                  <div className="text-navy-600 text-xs font-semibold mt-1">S520 Standard</div>
                </div>
                <div className="p-4 rounded-xl bg-navy-50 border border-navy-100 text-center">
                  <div className="font-display font-bold text-teal-700 text-2xl">Fully</div>
                  <div className="text-navy-600 text-xs font-semibold mt-1">Insured & Protected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Insurance Credentials */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
        <div className="container-page relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Compliance & Protection</span>
            <h2 className="heading-2 text-white mt-1">
              Industry Standards & Operational Credentials
            </h2>
            <p className="text-navy-300 text-sm mt-2">
              We operate under strict industry standards and maintain comprehensive insurance protection for our clients’ properties:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-navy-800 border border-navy-700 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  IICRC S520 Reference Standards
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Our remediation protocols strictly follow the Institute of Inspection, Cleaning and Restoration Certification (IICRC) S520 Standard for Professional Mold Remediation, ensuring scientific engineering controls, HEPA negative air pressure, and proper disposal.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-700 text-xs text-teal-400 font-semibold">
                ✓ Proven Engineering Controls
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800 border border-navy-700 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  EPA & OSHA Protocol Compliance
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  We adhere to U.S. Environmental Protection Agency (EPA) guidelines for Mold Remediation in Schools and Commercial Buildings, alongside OSHA 29 CFR 1910 standards for worker respiratory protection and environmental containment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-700 text-xs text-teal-400 font-semibold">
                ✓ Hospital-Grade EPA Biocides
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800 border border-navy-700 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  Comprehensive Insurance Coverage
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Our company maintains full Commercial General Liability and Pollution/Microbial Remediation liability insurance coverage, protecting property owners against accidental damage throughout all inspection and remediation phases.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-700 text-xs text-teal-400 font-semibold">
                ✓ Fully Insured & Protected
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear Service Policies */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow mb-2">Our Commitments</span>
            <h2 className="heading-2 text-navy-900 mb-4">
              Clear Service Policies for Property Owners
            </h2>
            <p className="text-navy-600">
              We believe in honest, predictable customer care without sales pressure or hidden gimmicks:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-navy-50 border border-navy-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-1.5">
                  Transparent Upfront Pricing Policy
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  You will always receive a written, itemized scope of work before physical remediation begins. We detail every containment barrier, machine run-time, and material extraction so there are zero surprise charges on your final invoice.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-50 border border-navy-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-1.5">
                  Negative Pressure Containment Guarantee
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  We guarantee that your unaffected living spaces are isolated. Before any demolition or sanding occurs, we erect airtight 6-mil poly barriers and vent HEPA negative air scrubbers outside to prevent microscopic spores from contaminating other rooms.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-50 border border-navy-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-1.5">
                  Root-Cause Moisture Resolution First
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  We never mask mold symptoms. If the roof is leaking, the foundation has hydrostatic seepage, or the crawl space lacks a vapor barrier, we document the issue and advise you on the necessary structural corrections so mold does not return.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-50 border border-navy-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-1.5">
                  Support for Independent Third-Party Clearance
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  To eliminate any conflict of interest, we openly welcome and support post-remediation clearance testing conducted by independent certified environmental hygienists whenever requested by homeowners, buyers, or insurance adjusters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documented Real Project Examples */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow mb-2">Real-World Case Studies</span>
            <h2 className="heading-2 text-navy-900 mb-3">
              Documented Remediation Project Examples
            </h2>
            <p className="text-navy-600 leading-relaxed">
              Real examples illustrating our step-by-step methodology across common central Indiana residential and commercial property conditions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200 mb-3">
                  <Sparkles className="h-3 w-3" />
                  <span>Speedway Residential Case</span>
                </div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-2">
                  Crawl Space Joist Remediation & Vapor Barrier
                </h3>
                <div className="text-xs text-navy-600 space-y-2 mb-4 leading-relaxed">
                  <p><strong>Property:</strong> 1960s Speedway ranch home on a vented crawl space.</p>
                  <p><strong>Challenge:</strong> Heavy summer humidity caused subfloor moisture to hit 23% WME, creating widespread white fungal growth on floor joists and falling insulation.</p>
                  <p><strong>Action:</strong> Contained crawlspace, removed wet fiberglass, HEPA-vacuumed framing, applied EPA-registered biocide, and installed sealed 20-mil puncture-resistant vapor barrier.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-navy-100 text-xs text-teal-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>Wood moisture stabilized at 11.2%</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200 mb-3">
                  <Sparkles className="h-3 w-3" />
                  <span>Marion County Commercial Case</span>
                </div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-2">
                  Office HVAC Plenum & Drywall Remediation
                </h3>
                <div className="text-xs text-navy-600 space-y-2 mb-4 leading-relaxed">
                  <p><strong>Property:</strong> Multi-tenant professional office building in Indianapolis.</p>
                  <p><strong>Challenge:</strong> Obstructed AC condensate line flooded ceiling tiles and dripped into insulated drywall partitions in an occupied accounting suite.</p>
                  <p><strong>Action:</strong> Constructed evening negative-air containment barriers, excised damaged drywall under HEPA filtration, sanitized metal studs, and scrubbed air overnight.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-navy-100 text-xs text-teal-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>Zero business downtime for tenant</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200 mb-3">
                  <Sparkles className="h-3 w-3" />
                  <span>Hamilton County Finished Basement</span>
                </div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-2">
                  Foundation Seepage & Drywall Flood-Cut
                </h3>
                <div className="text-xs text-navy-600 space-y-2 mb-4 leading-relaxed">
                  <p><strong>Property:</strong> Finished daylight basement in Carmel with custom baseboards.</p>
                  <p><strong>Challenge:</strong> Hydrostatic pressure wicking through concrete cove joint saturated bottom 8 inches of drywall, fostering hidden Aspergillus colonies.</p>
                  <p><strong>Action:</strong> Sealed basement with zipper airlocks, executed a clean 2-foot flood cut, removed wet insulation, disinfected concrete slab, and dried framing for 72 hours.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-navy-100 text-xs text-teal-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>Upstairs living areas 100% protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Systematic 6-Step Workflow */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow mb-2">Our Process</span>
            <h2 className="heading-2 text-navy-900 mb-4">
              How We Work with Property Owners
            </h2>
            <p className="text-navy-600">
              A disciplined, transparent progression designed to eliminate guesswork:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="h-6 w-6" />,
                title: '1. Direct Intake Call',
                description:
                  'Every engagement begins with a consultation at 463-220-1284. We listen to your observations and schedule an on-site diagnostic survey.',
              },
              {
                icon: <Eye className="h-6 w-6" />,
                title: '2. Thermal & Moisture Survey',
                description:
                  'We scan walls, ceilings, and foundations with thermal cameras and moisture meters to locate active moisture intrusion pathways.',
              },
              {
                icon: <ClipboardList className="h-6 w-6" />,
                title: '3. Written Itemized Scope',
                description:
                  'We provide a transparent, written proposal detailing containment barriers, extraction scope, biocides, and equipment schedules.',
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: '4. Negative Air Containment',
                description:
                  'We construct airtight 6-mil poly chambers with HEPA negative air scrubbers venting outside to protect the rest of your property.',
              },
              {
                icon: <Droplets className="h-6 w-6" />,
                title: '5. Removal & Sanitization',
                description:
                  'Porous moldy items are removed in sealed bags, and remaining structural framing is deep-cleaned with EPA-registered antimicrobials.',
              },
              {
                icon: <Home className="h-6 w-6" />,
                title: '6. Verification & Drying Logs',
                description:
                  'We verify structural moisture levels (<14% WME), provide photographic proof, and conduct a comprehensive final walkthrough with you.',
              },
            ].map((item, index) => (
              <div key={index} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-navy-900 mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Business Details */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-navy-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-teal-600 mb-3">
                    <MapPin className="h-5 w-5" />
                    <span className="eyebrow">Physical Headquarters</span>
                  </div>
                  <div className="text-navy-700 text-lg leading-relaxed">
                    <div className="font-display font-bold text-navy-900 mb-1">
                      {BUSINESS.name}
                    </div>
                    {BUSINESS.address.street}
                    <br />
                    {BUSINESS.address.city}, {BUSINESS.address.state}{' '}
                    {BUSINESS.address.zip}
                    <br />
                    {BUSINESS.address.country}
                  </div>
                  <div className="mt-4 text-xs text-navy-500">
                    Located in Speedway / Marion County, serving the complete central Indiana metropolitan region.
                  </div>
                  <a
                    href={BUSINESS.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    View on Google Maps
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-teal-600 mb-3">
                    <Phone className="h-5 w-5" />
                    <span className="eyebrow">Speak Directly With Us</span>
                  </div>
                  <a
                    href={BUSINESS.phoneLink}
                    className="text-teal-600 font-bold text-2xl hover:text-teal-700 transition-colors block mb-4"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">
                    Call during business hours to speak directly with an experienced mold specialist. We answer questions, discuss your property findings, and schedule prompt assessments.
                  </p>
                  <PhoneCTA />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
