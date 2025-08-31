import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { title: 'NeonDash', tag: 'Analytics', desc: 'Realtime dashboards with ML insights' },
  { title: 'EdgeSense', tag: 'IoT', desc: 'Edge AI for predictive maintenance' },
  { title: 'NovaPay', tag: 'Fintech', desc: 'Secure payments with zero-trust' },
  { title: 'CloudMesh', tag: 'Cloud', desc: 'Multi-cloud orchestration' },
  { title: 'Care+ App', tag: 'Health', desc: 'HIPAA compliant mobile suite' },
  { title: 'AutoPilot', tag: 'Automation', desc: 'RPA for back-office ops' },
];

// PUBLIC_INTERFACE
export default function PortfolioGrid() {
  /** Animated portfolio cards with hover accents. */
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">A glimpse into our recent projects</p>
        <div className="grid grid-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className="card"
              style={{ padding: 18 }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              viewport={{ once: true }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <strong>{it.title}</strong>
                <span className="kbd">{it.tag}</span>
              </div>
              <p style={{ color: 'var(--muted)' }}>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
