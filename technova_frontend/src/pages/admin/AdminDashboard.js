import React from 'react';
import SEOHead from '../../components/SEOHead';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Mon', visits: 120, leads: 8 },
  { name: 'Tue', visits: 200, leads: 12 },
  { name: 'Wed', visits: 180, leads: 9 },
  { name: 'Thu', visits: 260, leads: 16 },
  { name: 'Fri', visits: 300, leads: 22 },
  { name: 'Sat', visits: 150, leads: 6 },
  { name: 'Sun', visits: 210, leads: 13 },
];

// PUBLIC_INTERFACE
export default function AdminDashboard() {
  /** Admin dashboard overview with simple analytics and placeholders for CMS actions. */
  return (
    <div className="section">
      <SEOHead title="Admin Dashboard" description="Admin dashboard for TechNova site management." path="/admin" />
      <div className="container">
        <h1 className="section-title">Admin Dashboard</h1>
        <p className="section-subtitle">Overview and quick actions</p>

        <div className="grid grid-3" style={{ marginBottom: 18 }}>
          <div className="card" style={{ padding: 18 }}>
            <div className="kbd">Visits (7d)</div>
            <strong style={{ fontSize: 24 }}>1,420</strong>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <div className="kbd">Leads (7d)</div>
            <strong style={{ fontSize: 24 }}>86</strong>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <div className="kbd">Applications (7d)</div>
            <strong style={{ fontSize: 24 }}>24</strong>
          </div>
        </div>

        <div className="card" style={{ padding: 18, height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.45)" />
              <YAxis stroke="rgba(255,255,255,0.45)" />
              <Tooltip contentStyle={{ background: 'rgba(15,23,42,.9)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, color: '#e5e7eb' }} />
              <Line type="monotone" dataKey="visits" stroke="#10b981" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="leads" stroke="#2563eb" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-2" style={{ marginTop: 18 }}>
          <div className="card" style={{ padding: 18 }}>
            <h3>Content Management</h3>
            <p style={{ color: 'var(--muted)' }}>Manage services, portfolio items, and blog posts.</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn">New Service</button>
              <button className="btn">New Portfolio Item</button>
              <button className="btn">New Blog Post</button>
            </div>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <h3>Leads & Applications</h3>
            <p style={{ color: 'var(--muted)' }}>Review incoming messages and job applications.</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn">View Contacts</button>
              <button className="btn">View Applications</button>
              <button className="btn">Export CSV</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
