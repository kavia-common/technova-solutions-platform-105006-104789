import React from 'react';

// PUBLIC_INTERFACE
export function TextField({ label, ...props }) {
  /** Text input with label */
  return (
    <label style={{ display: 'grid', gap: 8 }}>
      <span style={{ color: 'var(--muted)' }}>{label}</span>
      <input className="input" {...props} />
    </label>
  );
}

// PUBLIC_INTERFACE
export function TextArea({ label, ...props }) {
  /** TextArea with label */
  return (
    <label style={{ display: 'grid', gap: 8 }}>
      <span style={{ color: 'var(--muted)' }}>{label}</span>
      <textarea className="textarea" rows={4} {...props} />
    </label>
  );
}

// PUBLIC_INTERFACE
export function FileField({ label, ...props }) {
  /** File input with label */
  return (
    <label style={{ display: 'grid', gap: 8 }}>
      <span style={{ color: 'var(--muted)' }}>{label}</span>
      <input className="input" type="file" {...props} />
    </label>
  );
}
