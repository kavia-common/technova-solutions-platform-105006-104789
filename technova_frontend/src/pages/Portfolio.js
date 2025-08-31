import React from 'react';
import SEOHead from '../components/SEOHead';
import PortfolioGrid from '../components/PortfolioGrid';

// PUBLIC_INTERFACE
export default function Portfolio() {
  /** Portfolio page listing selected projects. */
  return (
    <>
      <SEOHead title="Portfolio" description="Selected TechNova projects across industries and platforms." path="/portfolio" />
      <PortfolioGrid />
    </>
  );
}
