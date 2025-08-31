import React from 'react';
import SEOHead from '../components/SEOHead';
import ServicesGrid from '../components/ServicesGrid';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Services() {
  /** Services page with detailed offerings. */
  return (
    <>
      <SEOHead title="Services" description="Explore TechNova's services across software, hardware, cloud, and AI." path="/services" />
      <div className="section">
        <div className="container">
          <h1 className="section-title">Services</h1>
          <p className="section-subtitle">From concept to scale, we've got you covered.</p>
          <ServicesGrid />
          <div className="card" style={{ padding: 18, marginTop: 18 }}>
            <h3>Need a custom solution?</h3>
            <p style={{ color: 'var(--muted)' }}>Tell us about your challenge and we will design the optimal path.</p>
            <Link to="/contact" className="btn-primary btn">Start a Project</Link>
          </div>
        </div>
      </div>
    </>
  );
}
