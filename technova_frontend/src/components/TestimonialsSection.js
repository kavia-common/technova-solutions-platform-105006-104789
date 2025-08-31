import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { author: 'Ava M.', role: 'CTO, FinTechCo', text: 'TechNova transformed our infrastructure and accelerated delivery.' },
  { author: 'Liam K.', role: 'Head of Product, HealthPlus', text: 'Outstanding UX and performance — our users noticed immediately.' },
  { author: 'Noah S.', role: 'Founder, IoTWorks', text: 'Their embedded systems expertise is world-class.' },
];

// PUBLIC_INTERFACE
export default function TestimonialsSection() {
  /** Animated testimonial cards. */
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">We strive for excellence and it shows</p>
        <div className="grid grid-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              className="card"
              style={{ padding: 18, minHeight: 160 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <p style={{ marginTop: 4, color: 'var(--text)' }}>"{t.text}"</p>
              <div style={{ marginTop: 12, color: 'var(--muted)' }}>
                — {t.author}, {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
