import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Hero() {
  /** Futuristic hero with gradient heading and CTA buttons. */
  return (
    <section className="hero">
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h1
          className="headline neon"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          Building Future-Ready Software and Hardware
        </motion.h1>
        <motion.p
          className="desc"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .1, duration: 0.55 }}
          viewport={{ once: true }}
        >
          TechNova delivers cutting-edge IT solutions with a focus on performance, scalability,
          and elegant user experiences. We blend innovation with reliability to accelerate your vision.
        </motion.p>
        <div className="hero-cta">
          <Link to="/services" className="btn-primary btn">Explore Services</Link>
          <Link to="/portfolio" className="btn">See Portfolio</Link>
        </div>
        <div style={{ marginTop: 14, color: 'var(--muted)' }}>
          Press <span className="kbd">G</span> to toggle glow mode soon
        </div>
      </div>
    </section>
  );
}
