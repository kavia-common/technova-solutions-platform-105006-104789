import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  { title: 'Designing with Glassmorphism', date: '2025-06-01', excerpt: 'Practical tips to craft elegant glass UI.' },
  { title: 'DevOps Pipelines that Scale', date: '2025-05-15', excerpt: 'From code to cloud with confidence.' },
  { title: 'Security by Design', date: '2025-04-02', excerpt: 'Integrating security at every stage.' },
];

// PUBLIC_INTERFACE
export default function BlogList() {
  /** Basic 3-card blog preview for homepage or blog page. */
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">From Our Blog</h2>
        <p className="section-subtitle">Insights on building and scaling modern products</p>
        <div className="grid grid-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              className="card"
              style={{ padding: 18 }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <div className="kbd" style={{ width: 'fit-content' }}>{p.date}</div>
              <h3 style={{ margin: '10px 0 8px' }}>{p.title}</h3>
              <p style={{ color: 'var(--muted)' }}>{p.excerpt}</p>
              <button className="btn" style={{ marginTop: 8 }}>Read</button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
