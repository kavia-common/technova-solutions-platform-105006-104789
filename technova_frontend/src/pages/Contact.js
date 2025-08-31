import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { TextArea, TextField } from '../components/forms/FormFields';
import { submitContact } from '../utils/api';

// PUBLIC_INTERFACE
export default function Contact() {
  /** Contact and enquiry form with WhatsApp quick chat link. */
  const [status, setStatus] = useState({ s: 'idle', m: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    try {
      setStatus({ s: 'loading', m: '' });
      await submitContact(data);
      setStatus({ s: 'success', m: 'Thanks! We will get back to you shortly.' });
      e.target.reset();
    } catch (err) {
      setStatus({ s: 'error', m: err.message });
    }
  };

  return (
    <div className="section">
      <SEOHead title="Contact" description="Get in touch with TechNova — we'd love to hear about your project." path="/contact" />
      <div className="container">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle">Tell us about your goals and challenges</p>
        <div className="grid grid-2">
          <div className="card" style={{ padding: 18 }}>
            <form onSubmit={onSubmit}>
              <div style={{ display: 'grid', gap: 12 }}>
                <TextField name="name" label="Full Name" placeholder="John Doe" required />
                <TextField name="email" label="Email" type="email" placeholder="john@domain.com" required />
                <TextField name="subject" label="Subject" placeholder="Project enquiry" />
                <TextArea name="message" label="Message" placeholder="Your message..." required />
                <button className="btn-primary btn" type="submit" disabled={status.s === 'loading'}>
                  {status.s === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status.m && <div style={{ color: status.s === 'error' ? '#f87171' : '#93c5fd' }}>{status.m}</div>}
              </div>
            </form>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <h3>Prefer Instant Chat?</h3>
            <p style={{ color: 'var(--muted)' }}>Reach us directly on WhatsApp for quick questions.</p>
            <a className="btn" href="https://wa.me/1234567890" target="_blank" rel="noreferrer">Open WhatsApp</a>
            <div style={{ marginTop: 18, color: 'var(--muted)' }}>
              Or email us at <a href="mailto:hello@technova.io">hello@technova.io</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
