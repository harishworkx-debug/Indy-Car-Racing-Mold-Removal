import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppRoutes } from './App';
import { services } from './data/services';
import { locations } from './data/locations';
import { generalFaqs } from './data/faqs';
import { IMAGES } from './data/business';
import {
  getLocalBusinessStructuredData,
  getServiceStructuredData,
  getFAQStructuredData,
} from './data/structuredData';

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
  structuredData?: object[];
}

const localBusinessData = getLocalBusinessStructuredData();

export const routes: RouteMeta[] = [
  {
    path: '/',
    title: 'Mold Removal & Inspection in Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    description: 'Professional mold removal and inspection services in Indianapolis, IN. Non-invasive moisture testing, IICRC S520 remediation, and clear pricing. Call 463-220-1284.',
    image: IMAGES.hero,
    structuredData: [localBusinessData, getFAQStructuredData(generalFaqs.slice(0, 5))],
  },
  {
    path: '/services',
    title: 'Mold Removal & Inspection Services in Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    description: 'Explore our full range of 10 specialized mold inspection, assessment, and remediation services in Indianapolis, IN. Call 463-220-1284 for expert assistance.',
    image: IMAGES.hero,
    structuredData: [localBusinessData],
  },
  {
    path: '/service-areas',
    title: 'Mold Inspection Service Areas in Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    description: 'Explore mold inspection service areas in Indianapolis, Carmel, Fishers, Noblesville, Greenwood, and central Indiana. Call 463-220-1284 for expert mold services.',
    image: IMAGES.indianapolisSkyline,
    structuredData: [localBusinessData],
  },
  {
    path: '/about',
    title: 'Mold Removal Company in Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    description: 'Learn about Indy Car Racing Mold Removal Experts, an established mold removal company in Indianapolis, IN. IICRC S520 standards, fully insured, and transparent service policies. Call 463-220-1284.',
    image: IMAGES.clipboard,
    structuredData: [localBusinessData],
  },
  {
    path: '/contact',
    title: 'Contact Mold Removal Company in Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    description: 'Contact our Indianapolis mold removal company at 463-220-1284. Request a quote, consultation, or callback, or visit 1302 N Main St, Indianapolis, IN 46224.',
    image: IMAGES.hero,
    structuredData: [localBusinessData],
  },
  {
    path: '/faqs',
    title: 'Mold Removal FAQs | Indy Car Racing Mold Removal Experts',
    description: 'Frequently asked questions about mold removal, mold inspection, moisture problems, and cost factors in Indianapolis, IN. Call 463-220-1284 for expert answers.',
    image: IMAGES.hero,
    structuredData: [getFAQStructuredData(generalFaqs)],
  },
  {
    path: '/sitemap',
    title: 'HTML Sitemap | Indy Car Racing Mold Removal Experts',
    description: 'Comprehensive site map of Indy Car Racing Mold Removal Experts. Easily access all our mold inspection, remediation services, and service areas across central Indiana.',
    image: IMAGES.clipboard,
    structuredData: [localBusinessData],
  },
  ...services.map((s) => ({
    path: `/${s.slug}`,
    title: s.metaTitle,
    description: s.metaDescription,
    image: s.heroImage,
    structuredData: [
      localBusinessData,
      getServiceStructuredData(s.title, s.metaDescription),
      getFAQStructuredData(s.faqs),
    ],
  })),
  ...locations.map((l) => ({
    path: `/mold-inspector-${l.slug}`,
    title: l.metaTitle,
    description: l.metaDescription,
    image: l.heroImage,
    structuredData: [localBusinessData, getFAQStructuredData(l.faqs)],
  })),
];
