import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiPhoneCall } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

// PUBLIC_INTERFACE
export default function Navbar() {
  /** Sticky navbar with theme toggle and quick WhatsApp link. */
  const { theme, toggle } = useTheme();

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="logo" />
          <span className="neon">TechNova</span>
        </Link>

        <div className="nav-links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}

          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />} {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          <a
            className="btn"
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="Chat on WhatsApp"
          >
            <FiPhoneCall /> WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
