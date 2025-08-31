import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

// PUBLIC_INTERFACE
export default function ScrollToTopBtn() {
  /** Shows a floating button when scrolled down; scrolls to page top. */
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        borderRadius: 12,
        padding: 12,
        background: 'linear-gradient(135deg, rgba(16,185,129,.9), rgba(37,99,235,.9))',
        color: 'white',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 10px 20px rgba(16,185,129,.25)',
        zIndex: 60
      }}
    >
      <FiArrowUp />
    </button>
  );
}
