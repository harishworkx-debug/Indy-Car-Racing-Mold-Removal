import { useState, type FormEvent } from 'react';
import { Phone, MapPin, ArrowRight, Clock, Calendar, CheckCircle2, AlertCircle, Shield, Send } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import { BUSINESS, IMAGES } from '@/data/business';
import { services } from '@/data/services';
import { getLocalBusinessStructuredData } from '@/data/structuredData';

export default function Contact() {
  const structuredData = getLocalBusinessStructuredData();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityOrZip: '',
    serviceNeeded: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Front-end state feedback; can be connected to CRM or API endpoint
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Mold Removal Company in Indianapolis, IN | Indy Car Racing Mold Removal Experts"
        description="Contact our Indianapolis mold removal company at 463-220-1284. Request a quote, consultation, or callback, or visit 1302 N Main St, Indianapolis, IN 46224."
        canonicalPath="/contact"
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Contact & Quotes"
        title="Contact Our Indianapolis Mold Removal Company"
        description="Reach our Indianapolis specialists by phone at 463-220-1284, or submit our online callback request form for prompt scheduling and quote assessments."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
        image={IMAGES.hero}
        imageAlt={IMAGES.heroAlt}
      />

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Phone & Business Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="eyebrow mb-2">Get in Touch</span>
                <h2 className="heading-2 text-navy-900 mb-4">
                  We Are Here to Help
                </h2>
                <p className="text-navy-600 leading-relaxed mb-6">
                  Whether you have spotted visible mold, detected a persistent musty smell, or just experienced a plumbing leak, our local Indianapolis team is ready to assist.
                </p>
              </div>

              {/* Direct Call Card */}
              <div className="bg-teal-50 rounded-2xl p-7 border border-teal-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-navy-600 text-xs font-bold uppercase tracking-wider">Fastest Response</div>
                    <a
                      href={BUSINESS.phoneLink}
                      className="text-teal-700 font-bold text-2xl hover:text-teal-800 transition-colors block"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>
                <p className="text-navy-600 text-sm leading-relaxed mb-4">
                  Speak directly with an experienced technician. We answer questions, discuss your property findings, and arrange prompt on-site assessments.
                </p>
                <a
                  href={BUSINESS.phoneLink}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-md shadow-teal-600/20 text-center"
                >
                  <Phone className="h-5 w-5" />
                  Call Directly from Mobile
                </a>
              </div>

              {/* Business Hours Card */}
              <div className="bg-navy-50 rounded-2xl p-7 border border-navy-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-teal-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-lg">
                    Business Operating Hours
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm text-navy-700">
                  <li className="flex justify-between items-center py-1 border-b border-navy-200/60">
                    <span className="font-medium">Monday – Friday:</span>
                    <span className="font-bold text-navy-900">7:30 AM – 6:30 PM</span>
                  </li>
                  <li className="flex justify-between items-center py-1 border-b border-navy-200/60">
                    <span className="font-medium">Saturday:</span>
                    <span className="font-bold text-navy-900">8:00 AM – 4:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center py-1">
                    <span className="font-medium">Sunday / Emergency:</span>
                    <span className="font-semibold text-teal-700">On-Call Assessment</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-navy-200/60 text-xs text-navy-500">
                  Calls received outside operating hours are prioritized for callback next morning.
                </div>
              </div>

              {/* Physical Location Card */}
              <div className="bg-white rounded-2xl p-7 border border-navy-100 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-teal-400 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-navy-500 text-xs font-bold uppercase tracking-wider mb-1">
                      Our Operating Headquarters
                    </div>
                    <div className="text-navy-900 font-semibold leading-relaxed text-sm">
                      {BUSINESS.name}
                      <br />
                      {BUSINESS.address.street}
                      <br />
                      {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-navy-50/70 rounded-xl text-xs text-navy-600 leading-relaxed mb-3 border border-navy-100">
                  <strong>Service Note:</strong> All diagnostic assessments, air testing, and remediation services are conducted directly on-site at your property. Field technicians are dispatched daily across Greater Indianapolis and surrounding counties.
                </div>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Quote & Callback Request Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-navy-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Online Assessment Request</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl mb-2">
                    Request a Quote or Callback
                  </h3>
                  <p className="text-navy-300 text-sm mb-8 leading-relaxed">
                    Fill out the form below and one of our mold specialists will review your situation and contact you during your preferred time window.
                  </p>

                  {formSubmitted ? (
                    <div className="p-8 rounded-2xl bg-teal-900/60 border border-teal-500/40 text-center">
                      <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h4 className="font-display font-bold text-white text-xl mb-2">
                        Request Received!
                      </h4>
                      <p className="text-teal-100 text-sm leading-relaxed mb-6">
                        Thank you, <strong>{formData.fullName || 'Neighbor'}</strong>. We have received your property details and will reach out to <strong>{formData.phone}</strong> during your preferred callback window.
                      </p>
                      <div className="p-4 rounded-xl bg-navy-800 text-xs text-navy-300 leading-relaxed">
                        Need immediate assistance? You can also call us directly right now at{' '}
                        <a href={BUSINESS.phoneLink} className="text-teal-300 font-bold underline">
                          {BUSINESS.phoneDisplay}
                        </a>
                        .
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-navy-200 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Smith"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-700 text-white placeholder-navy-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-navy-200 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(463) 220-1284"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-700 text-white placeholder-navy-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-navy-200 mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-700 text-white placeholder-navy-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-navy-200 mb-1.5">
                            City or ZIP Code in IN *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Carmel / 46224"
                            value={formData.cityOrZip}
                            onChange={(e) => setFormData({ ...formData, cityOrZip: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-700 text-white placeholder-navy-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-navy-200 mb-1.5">
                            Service Needed
                          </label>
                          <select
                            value={formData.serviceNeeded}
                            onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-700 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors"
                          >
                            <option value="">Select a Service...</option>
                            {services.map((s) => (
                              <option key={s.slug} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                            <option value="General Inspection / Not Sure">General Inspection / Not Sure</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-navy-200 mb-1.5">
                            Preferred Callback Time
                          </label>
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-700 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors"
                          >
                            <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                            <option value="Afternoon (12:00 PM - 5:00 PM)">Afternoon (12:00 PM - 5:00 PM)</option>
                            <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                            <option value="ASAP / Urgent Water Issue">ASAP / Urgent Water Issue</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-navy-200 mb-1.5">
                          Describe What You Have Noticed *
                        </label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Please describe where you saw mold, any odors, when the issue started, or past water leaks..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-700 text-white placeholder-navy-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-xl shadow-teal-600/30 text-base"
                        >
                          <Send className="h-5 w-5" />
                          Submit Assessment Request
                        </button>
                      </div>

                      <p className="text-xs text-navy-400 text-center pt-2">
                        🔒 Your information is kept completely confidential and used solely to respond to your inquiry.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Moisture Triage Advice */}
      <section className="py-12 bg-amber-50/70 border-y border-amber-200">
        <div className="container-page">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
                Emergency Moisture Triage: What to Do Right Now
              </h3>
              <p className="text-navy-700 text-sm leading-relaxed mb-3">
                If you have an active leak or just discovered significant mold growth while waiting for your appointment:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-navy-800">
                <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-amber-200">
                  <span className="text-teal-700 font-bold">1.</span>
                  <span><strong>Shut off the water source:</strong> Close the main valve immediately if a pipe or fixture is leaking.</span>
                </div>
                <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-amber-200">
                  <span className="text-teal-700 font-bold">2.</span>
                  <span><strong>Do not blow fans on dry mold:</strong> Household fans disperse millions of microscopic spores into the air.</span>
                </div>
                <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-amber-200">
                  <span className="text-teal-700 font-bold">3.</span>
                  <span><strong>Avoid bleach on drywall:</strong> Chlorine evaporates while water feeds the roots, triggering rapid regrowth.</span>
                </div>
                <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-amber-200">
                  <span className="text-teal-700 font-bold">4.</span>
                  <span><strong>Keep doors closed:</strong> Isolate the room to prevent airborne spores from circulating upstairs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl mb-8">
            <span className="eyebrow mb-2">Find Us</span>
            <h2 className="heading-3 text-navy-900 mb-2">Find Us on the Map</h2>
            <p className="text-navy-600 text-sm">
              We are headquartered at {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip} in Speedway / Marion County.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-navy-100">
            <GoogleMapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
