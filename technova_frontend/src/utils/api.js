const API_BASE = process.env.REACT_APP_API_BASE || '';

async function request(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`API ${res.status}: ${txt}`);
  }
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) return res.json();
  return res.text();
}

// PUBLIC_INTERFACE
export async function fetchServices() {
  /** Fetch services from backend */
  return request('/services');
}

// PUBLIC_INTERFACE
export async function fetchPortfolio() {
  /** Fetch portfolio items from backend */
  return request('/portfolio');
}

// PUBLIC_INTERFACE
export async function fetchBlog() {
  /** Fetch blog posts from backend */
  return request('/blog');
}

// PUBLIC_INTERFACE
export async function submitContact(payload) {
  /** Submit contact form */
  return request('/contact', { method: 'POST', body: JSON.stringify(payload) });
}

// PUBLIC_INTERFACE
export async function subscribeNewsletter(email) {
  /** Subscribe to newsletter */
  return request('/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
}

// PUBLIC_INTERFACE
export async function listJobs() {
  /** Get careers listing */
  return request('/careers');
}

// PUBLIC_INTERFACE
export async function applyJob(formData) {
  /** Apply to a job posting with file upload. */
  const res = await fetch(`${API_BASE}/apply`, { method: 'POST', body: formData });
  if (!res.ok) throw new Error('Failed to upload resume');
  return res.json();
}
