import React from 'react';
import SEOHead from '../components/SEOHead';
import BlogList from '../components/BlogList';

// PUBLIC_INTERFACE
export default function Blog() {
  /** Blog listing page. */
  return (
    <>
      <SEOHead title="Blog" description="Insights, tutorials, and updates from TechNova." path="/blog" />
      <BlogList />
    </>
  );
}
