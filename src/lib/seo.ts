export const siteConfig = {
  name: "SD Industries",
  description: "Global leaders in turnkey Steel Plant Project Management and Rolling Mill Solutions.",
  // TODO: Replace with verified production URL
  url: "https://example.com",
  ogImage: "/assets/og-image.jpg",
  // TODO: Replace with verified social media URLs
  links: {
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    linkedin: "https://linkedin.com/company/example",
    youtube: "https://youtube.com/@example",
  },
  contact: {
    // TODO: Replace with verified company address
    address: "123 Industrial Area, City, State – 000000, Country",
    // TODO: Replace with verified phone numbers
    phones: ["+1 555 000 0000", "+1 555 000 0001"],
    // TODO: Replace with verified email addresses
    emails: ["info@example.com", "support@example.com"],
  },
};

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/logo.jpg`,
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.linkedin,
      siteConfig.links.youtube,
    ],
    address: {
      "@type": "PostalAddress",
      // TODO: Replace with verified address components
      streetAddress: "123 Industrial Area",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "000000",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        // TODO: Replace with verified phone number
        telephone: "+1-555-000-0000",
        contactType: "sales",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        // TODO: Replace with verified phone number
        telephone: "+1-555-000-0001",
        contactType: "support",
        availableLanguage: ["English"],
      },
    ],
    // TODO: Replace with verified email
    email: siteConfig.contact.emails[0],
    // TODO: Verify founding year from official records
    foundingDate: "1998",
    knowsAbout: [
      "Rolling Mill Consultancy",
      "Steel Plant Engineering",
      "TMT Bar Mill Design",
      "Structural Mill Design",
      "Wire Rod Mill Design",
      "Mill Stand Manufacturing",
      "Reheating Furnace Design",
      "Rolling Mill Gearbox Manufacturing",
      "Greenfield Steel Plant Setup",
      "Brownfield Plant Modernization",
    ],
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateProductJsonLd(product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  sku?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image ? `${siteConfig.url}${product.image}` : undefined,
    brand: {
      "@type": "Brand",
      name: product.brand || siteConfig.name,
    },
    sku: product.sku,
    offers: product.offers
      ? {
          "@type": "Offer",
          price: product.offers.price,
          priceCurrency: product.offers.priceCurrency || "USD",
          availability: product.offers.availability || "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: siteConfig.name,
          },
        }
      : undefined,
  };
}

export function generateServiceJsonLd(service: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: service.provider || siteConfig.name,
    },
    areaServed: service.areaServed || ["Worldwide"],
    serviceType: "Industrial Engineering Consultancy",
  };
}

export function generateArticleJsonLd(article: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image ? `${siteConfig.url}${article.image}` : undefined,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.authorName,
      url: article.authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: article.publisherName || siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: article.publisherLogo || `${siteConfig.url}/assets/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/insights/blogs`,
    },
  };
}