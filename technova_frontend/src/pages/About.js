import React from 'react';
import SEOHead from '../components/SEOHead';

// PUBLIC_INTERFACE
export default function About() {
  /** About page describing mission and approach. */
  return (
    <div className="section">
      <SEOHead title="About" description="About TechNova — our mission, values, and engineering culture." path="/about" />
      <div className="container">
        <h1 className="section-title">About TechNova</h1>
        <p className="section-subtitle">Our mission is to engineer the future.</p>
        <div className="card" style={{ padding: 18 }}>
          <p>
            We are a team of engineers, designers, and product strategists passionate about crafting
            high-performance systems. From embedded firmware to cloud-native platforms, we ship quality with speed.
          </p>
          <p style={{ color: 'var(--muted)' }}>
            Our values: reliability, craftsmanship, empathy, and continuous learning.
          </p>
        </div>
      </div>
    </div>
  );
}
