import React from 'react';
import { Helmet } from 'react-helmet-async';

// PUBLIC_INTERFACE
export default function SEOHead({ title, description, path = '/', image }) {
  /** SEO meta tags and OpenGraph/Twitter for better previews. */
  const site = 'TechNova IT Solutions';
  const fullTitle = title ? `${title} • ${site}` : site;
  const url = typeof window !== 'undefined' ? window.location.origin + path : path;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#0b0f17" />
    </Helmet>
  );
}
