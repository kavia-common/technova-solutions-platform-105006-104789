import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import PortfolioGrid from '../components/PortfolioGrid';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogList from '../components/BlogList';

// PUBLIC_INTERFACE
export default function Home() {
  /** Homepage with multiple sections and SEO metadata. */
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <>
      <SEOHead
        title="Home"
        description="TechNova IT Solutions — building future-ready software and hardware with modern design, performance, and security."
        path="/"
      />
      <Hero />
      <div data-aos="fade-up"><ServicesGrid /></div>
      <div data-aos="fade-up"><PortfolioGrid /></div>
      <div data-aos="fade-up"><TestimonialsSection /></div>
      <div data-aos="fade-up"><BlogList /></div>
    </>
  );
}
