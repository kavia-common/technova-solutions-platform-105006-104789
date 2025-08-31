import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subscribeNewsletter } from '../utils/api';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer containing brand area and newsletter subscription. */
  const [email, setEmail] = useState('');
  const [state, setState] = useState({ status: 'idle', message: '' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      setState({ status: 'loading', message: '' });
      await subscribeNewsletter(email);
      setState({ status: 'success', message: 'Subscribed successfully!' });
      setEmail('');
    } catch (err) {
      setState({ status: 'error', message: err.message });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <div>
          <div className="brand">
            <span className="logo" />
            <span>TechNova IT Solutions</span>
          </div>
          <div style={{ color: 'var(--muted)', marginTop: 8 }}>
            Futuristic solutions in software and hardware.
          </div>
        </div>
        <form onSubmit={submit} style={{ display: 'flex', gap: 10 }}>
          <input
            className="input"
            type="email"
            placeholder="Your email for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button className="btn-primary btn" type="submit" disabled={state.status === 'loading'}>
            {state.status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
      <div className="container" style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', color: 'var(--muted)' }}>
        <small>© {new Date().getFullYear()} TechNova. All rights reserved.</small>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/careers" className="nav-link">Careers</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
