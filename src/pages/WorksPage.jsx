import React from 'react';
import Portfolio from '../components/Portfolio';
import CtaBanner from '../components/CtaBanner';
import SEO from '../components/SEO';

export default function WorksPage({ onOpenContact }) {
  return (
    <main className="pt-24">
      <SEO
        title="Our Works & Case Studies — Proven Brand Metric Results"
        description="Explore real client case studies across mobile apps, AI automation engines, high-ROAS Meta & Google ads, and web platforms built by LabelBuz."
        canonical="https://labelbuz.com/works"
      />
      <Portfolio onOpenContact={onOpenContact} />
      <CtaBanner onOpenContact={onOpenContact} />
    </main>
  );
}
