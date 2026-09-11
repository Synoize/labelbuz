import React from 'react';
import Services from '../components/Services';
import CtaBanner from '../components/CtaBanner';
import SEO from '../components/SEO';

export default function ServicesPage({ onOpenContact }) {
  return (
    <main className="pt-24">
      <SEO
        title="Services — Social Media, AI Video, Apps, Web Dev & Ads"
        description="Comprehensive growth services: Social Media Management, AI Video Production, Business Automation, Android & iOS Apps, Website Development, Web Apps, UI/UX, Graphic Design, and Paid Ads."
        canonical="https://labelbuz.com/services"
      />
      <Services onSelectService={(serviceTitle) => onOpenContact(serviceTitle)} />
      <CtaBanner onOpenContact={onOpenContact} />
    </main>
  );
}
