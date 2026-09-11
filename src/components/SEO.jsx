import { useEffect } from 'react';

export default function SEO({
  title = "LabelBuz — Where Businesses Become Brands",
  description = "LabelBuz is a premier digital growth agency specializing in Social Media Management, AI Video Production, Business Automation, Android & iOS App Development, Web Development, UI/UX, Graphic Design, and Paid Meta & Google Ads.",
  canonical = "https://labelbuz.com",
  ogImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  ogType = "website",
  schemaData = null
}) {
  useEffect(() => {
    // 1. Update Title
    document.title = title.includes("LabelBuz") ? title : `${title} | LabelBuz — Where Businesses Become Brands`;

    // Helper to set or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or create link tags
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index, follow');
    setLinkTag('canonical', canonical);

    // 3. Open Graph (FB / LinkedIn / WhatsApp)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', window.location.href);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'LabelBuz Agency');

    // 4. Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. JSON-LD Structured Data Schema
    let scriptElement = document.querySelector('script[type="application/ld+json"]#seo-schema');
    if (schemaData) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('id', 'seo-schema');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schemaData);
    } else if (scriptElement) {
      scriptElement.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "LabelBuz",
        "url": "https://labelbuz.com",
        "logo": "https://labelbuz.com/logo.png",
        "description": "Where Businesses Become Brands. Digital Growth Agency for AI Video, Mobile/Web Apps, Automation & High-ROI Ads.",
        "sameAs": [
          "https://twitter.com/labelbuz",
          "https://instagram.com/labelbuz",
          "https://linkedin.com/company/labelbuz"
        ]
      });
    }
  }, [title, description, canonical, ogImage, ogType, schemaData]);

  return null;
}
