import React, { useMemo, useState } from 'react';
import SEOHead from '../components/SEOHead';
import { FileField, TextArea, TextField } from '../components/forms/FormFields';
import { applyJob } from '../utils/api';

const JOBS = [
  { id: 'se-1', title: 'Senior Frontend Engineer', location: 'Remote', type: 'Full-time', tags: ['React', 'UI/UX'] },
  { id: 'de-2', title: 'DevOps Engineer', location: 'Remote', type: 'Full-time', tags: ['Kubernetes', 'AWS'] },
  { id: 'fe-3', title: 'Firmware Engineer', location: 'Onsite', type: 'Contract', tags: ['C', 'RTOS'] },
];

// PUBLIC_INTERFACE
export default function Careers() {
  /** Careers listing and simple application form with resume upload. */
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState({ s: 'idle', m: '' });

  const results = useMemo(() => {
    const q = query.toLowerCase();
    return JOBS.filter(j => j.title.toLowerCase().includes(q) || j.tags.join(' ').toLowerCase().includes(q));
  }, [query]);

  const onApply = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    try {
      setStatus({ s: 'loading', m: '' });
      await applyJob(fd);
      setStatus({ s: 'success', m: 'Application submitted successfully.' });
      form.reset();
    } catch (err) {
      setStatus({ s: 'error', m: err.message });
    }
  };

  return (
    <div className="section">
      <SEOHead title="Careers" description="Join TechNova — work on challenging problems that matter." path="/careers" />
      <div className="container">
        <h1 className="section-title">Careers</h1>
        <p className="section-subtitle">Search open roles and apply directly</p>

        <div className="grid grid-2">
          <div className="card" style={{ padding: 18 }}>
            <input
              className="input"
              placeholder="Filter by role, tech, or location"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Job search"
            />
            <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
              {results.map(job => (
                <button
                  key={job.id}
                  className="card"
                  onClick={() => setSelected(job)}
                  style={{
                    padding: 14,
                    textAlign: 'left',
                    border: `1px solid var(--border)`,
                    background: 'var(--glass)'
                  }}
                >
                  <strong>{job.title}</strong>
                  <div style={{ color: 'var(--muted)' }}>{job.location} • {job.type}</div>
                  <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {job.tags.map(t => <span key={t} className="kbd">{t}</span>)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <h3>Apply Now</h3>
            <p style={{ color: 'var(--muted)' }}>
              {selected ? `Applying for: ${selected.title}` : 'Select a role to prefill your application.'}
            </p>
            <form onSubmit={onApply}>
              <input type="hidden" name="jobId" value={selected?.id || ''} />
              <div style={{ display: 'grid', gap: 12 }}>
                <TextField name="name" label="Full Name" placeholder="Jane Doe" required />
                <TextField name="email" label="Email" type="email" placeholder="jane@domain.com" required />
                <TextArea name="message" label="Message" placeholder="Tell us about your experience..." />
                <FileField name="resume" label="Resume (PDF/Doc)" accept=".pdf,.doc,.docx" required />
                <button className="btn-primary btn" type="submit" disabled={status.s === 'loading'}>
                  {status.s === 'loading' ? 'Submitting...' : 'Submit Application'}
                </button>
                {status.m && <div style={{ color: status.s === 'error' ? '#f87171' : '#93c5fd' }}>{status.m}</div>}
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
