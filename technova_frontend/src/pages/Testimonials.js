import React from 'react';
import SEOHead from '../components/SEOHead';
import TestimonialsSection from '../components/TestimonialsSection';

// PUBLIC_INTERFACE
export default function Testimonials() {
  /** Full testimonials page. */
  return (
    <>
      <SEOHead title="Testimonials" description="Hear from TechNova clients about our collaboration." path="/testimonials" />
      <TestimonialsSection />
    </>
  );
}
