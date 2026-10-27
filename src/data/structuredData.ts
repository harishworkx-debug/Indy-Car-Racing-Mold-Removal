import { BUSINESS, IMAGES } from './business';

export function getLocalBusinessStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': 'https://www.moldremoval-speedway.com/#localbusiness',
    name: BUSINESS.name,
    legalName: BUSINESS.name,
    url: 'https://www.moldremoval-speedway.com/',
    image: IMAGES.hero,
    description:
      'Professional, direct mold removal, inspection, and remediation services in Speedway, Indianapolis, and surrounding Indiana areas.',
    telephone: BUSINESS.phoneDisplay,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Check, Insurance',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '39.784477671429656',
      longitude: '-86.24408158840433',
    },
    hasMap: BUSINESS.mapsLink,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '07:30',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Speedway', containedIn: 'Indiana' },
      { '@type': 'City', name: 'Indianapolis', containedIn: 'Indiana' },
      { '@type': 'City', name: 'Carmel', containedIn: 'Indiana' },
      { '@type': 'City', name: 'Fishers', containedIn: 'Indiana' },
      { '@type': 'City', name: 'Noblesville', containedIn: 'Indiana' },
      { '@type': 'City', name: 'Greenwood', containedIn: 'Indiana' },
      { '@type': 'City', name: 'Plainfield', containedIn: 'Indiana' },
      { '@type': 'City', name: 'Brownsburg', containedIn: 'Indiana' },
      { '@type': 'City', name: 'Avon', containedIn: 'Indiana' },
      { '@type': 'City', name: 'Zionsville', containedIn: 'Indiana' },
      { '@type': 'City', name: 'Lawrence', containedIn: 'Indiana' },
    ],
    knowsAbout: [
      'Mold Removal',
      'Mold Remediation',
      'Mold Inspection',
      'Basement Moisture Assessment',
      'Commercial Mold Remediation',
      'Water Leak Mold Assessment',
    ],
  };
}

export function getServiceStructuredData(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Indianapolis',
    },
  };
}

export function getFAQStructuredData(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbStructuredData(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path,
    })),
  };
}
