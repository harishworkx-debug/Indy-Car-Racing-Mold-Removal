import { Link } from 'react-router-dom';
import { Shield, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      {/* CTA Bar */}
      <div className="border-b border-navy-800">
        <div className="container-page py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-white">
              Concerned About Mold in Your Property?
            </h3>
            <p className="text-navy-300 mt-2">
              Call us today to discuss what you have noticed. We are here to help throughout Indianapolis and surrounding areas.
            </p>
          </div>
          <a
            href={BUSINESS.phoneLink}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/30 hover:shadow-xl hover:-translate-y-0.5 text-lg flex-shrink-0"
          >
            <Phone className="h-5 w-5" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company info (col-span-3) */}
          <div className="lg:col-span-3">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center group-hover:bg-teal-600/20 transition-colors">
                <Shield className="h-6 w-6 text-teal-500" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-white text-sm">
                  Indy Car Racing
                </div>
                <div className="text-teal-400 font-semibold text-xs">
                  Mold Removal Experts
                </div>
              </div>
            </Link>
            <p className="text-sm text-navy-400 leading-relaxed mb-6">
              Professional mold inspection, assessment, and remediation services based in
              Indianapolis, Indiana. Helping local homeowners and businesses resolve moisture and mold issues.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={BUSINESS.phoneLink}
                className="flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phoneDisplay}
              </a>
              <div className="flex items-start gap-2 text-navy-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-teal-500" />
                <span>
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </span>
              </div>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 transition-colors pt-1"
              >
                Get Google Maps Directions
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* All 10 Services (col-span-4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display font-semibold text-white">Our Mold Services</h4>
              <Link to="/services" className="text-xs text-teal-400 hover:text-teal-300">
                All Services &rarr;
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    className="text-navy-400 hover:text-teal-400 transition-colors block py-0.5"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* All 10 Service Areas (col-span-3) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display font-semibold text-white">Service Areas</h4>
              <Link to="/service-areas" className="text-xs text-teal-400 hover:text-teal-300">
                All Areas &rarr;
              </Link>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2 text-sm">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/mold-inspector-${loc.slug}`}
                    className="text-navy-400 hover:text-teal-400 transition-colors block py-0.5"
                  >
                    {loc.city}, {loc.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Sitemap (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-navy-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-navy-800">
                <Link
                  to="/sitemap"
                  className="text-teal-400 font-medium hover:text-teal-300 transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy-500">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-navy-400">
            <span>{BUSINESS.address.full}</span>
            <Link to="/sitemap" className="hover:text-teal-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
