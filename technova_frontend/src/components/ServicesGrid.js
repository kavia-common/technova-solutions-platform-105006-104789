import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiCloud, FiShield, FiSmartphone, FiZap } from 'react-icons/fi';

const items = [
  { icon: <FiCpu />, title: 'Embedded Systems', desc: 'Firmware, IoT devices, and real-time systems.' },
  { icon: <FiLayers />, title: 'Full-Stack Apps', desc: 'Robust web and mobile applications.' },
  { icon: <FiCloud />, title: 'Cloud & DevOps', desc: 'CI/CD, containers, scaling, and observability.' },
  { icon: <FiShield />, title: 'Cybersecurity', desc: 'Audits, remediation, governance, and tooling.' },
  { icon: <FiSmartphone />, title: 'UI/UX & Mobile', desc: 'Futuristic designs and seamless experiences.' },
  { icon: <FiZap />, title: 'AI & Automation', desc: 'ML integrations, agents, and process automation.' },
];

// PUBLIC_INTERFACE
export default function ServicesGrid() {
  /** Animated services grid with glassmorphism cards. */
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">Engineering excellence across the stack</p>
        <div className="grid grid-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className="card"
              style={{ padding: 18 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12, display: 'grid', placeItems: 'center',
                background: 'linear-gradient(135deg, rgba(16,185,129,.25), rgba(37,99,235,.25))',
                border: '1px solid var(--border)', color: 'white'
              }}>
                {it.icon}
              </div>
              <h3 style={{ margin: '12px 0 6px' }}>{it.title}</h3>
              <p style={{ color: 'var(--muted)', margin: 0 }}>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
