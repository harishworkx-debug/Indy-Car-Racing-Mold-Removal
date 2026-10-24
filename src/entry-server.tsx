import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppRoutes } from './App';
import { services } from './data/services';
import { locations } from './data/locations';
import { IMAGES } from './data/business';

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  image?: string;
}

export const routes: RouteMeta[] = [
  {
    path: '/',
    title: 'Indy Car Racing Mold Removal Experts | Professional Mold Remediation in Indianapolis',
    description: 'Professional mold removal and remediation services in Indianapolis, IN. We assess visible mold and moisture-related problems. Call 463-220-1284.',
    image: IMAGES.hero,
  },
  {
    path: '/services',
    title: 'Mold Remediation Services in Indianapolis | Indy Car Racing Mold Removal Experts',
    description: 'Explore our full range of mold inspection, assessment, and remediation services in Indianapolis, IN. Call 463-220-1284 to discuss your concern.',
    image: IMAGES.hero,
  },
  {
    path: '/service-areas',
    title: 'Service Areas in Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    description: 'We serve Indianapolis, Indiana and the surrounding area. Learn about our verified service areas and how we can help with your mold concerns. Call 463-220-1284.',
    image: IMAGES.indianapolisSkyline,
  },
  {
    path: '/about',
    title: 'About Indy Car Racing Mold Removal Experts | Indianapolis, IN',
    description: 'Learn about Indy Car Racing Mold Removal Experts, a locally based mold inspection and remediation business in Indianapolis, Indiana. Call 463-220-1284.',
    image: IMAGES.clipboard,
  },
  {
    path: '/contact',
    title: 'Contact Indy Car Racing Mold Removal Experts | Indianapolis, IN',
    description: 'Contact Indy Car Racing Mold Removal Experts in Indianapolis, IN. Call 463-220-1284 to discuss your mold-related concern. Located at 1302 N Main St.',
    image: IMAGES.hero,
  },
  {
    path: '/faqs',
    title: 'FAQs About Mold Remediation | Indy Car Racing Mold Removal Experts',
    description: 'Frequently asked questions about mold remediation, inspection, moisture problems, and when to call a professional. Call 463-220-1284 for answers.',
    image: IMAGES.hero,
  },
  {
    path: '/sitemap',
    title: 'HTML Sitemap | Indy Car Racing Mold Removal Experts',
    description: 'Comprehensive site map of Indy Car Racing Mold Removal Experts. Easily access all our mold inspection, remediation services, and service areas across central Indiana.',
    image: IMAGES.clipboard,
  },
  ...services.map((s) => ({
    path: `/${s.slug}`,
    title: s.metaTitle,
    description: s.metaDescription,
    image: s.heroImage,
  })),
  ...locations.map((l) => ({
    path: `/mold-inspector-${l.slug}`,
    title: l.metaTitle,
    description: l.metaDescription,
    image: l.heroImage,
  })),
];
