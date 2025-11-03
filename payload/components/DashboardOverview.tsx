'use client';

import React from 'react';

const cards = [
  {
    title: 'Quick Start',
    description:
      'Create a blog post, add a product, or configure a promotion from the shortcuts below.',
    links: [
      { href: '/admin/collections/blog-posts/create', label: 'New Blog Post' },
      { href: '/admin/collections/products/create', label: 'New Product' },
      { href: '/admin/collections/promotions/create', label: 'New Promotion' },
    ],
  },
  {
    title: 'Next Steps',
    description:
      'Visit Site Settings to adjust global SEO and announcement banners.',
    links: [{ href: '/admin/globals/site-settings', label: 'Site Settings' }],
  },
];

const DashboardOverview = () => {
  return (
    <section style={{ marginTop: '1.5rem', display: 'grid', gap: '1.5rem' }}>
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            borderRadius: '0.75rem',
            border: '1px solid var(--theme-elevation-100)',
            padding: '1.5rem',
            background: 'var(--theme-elevation-0)',
          }}
        >
          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}
          >
            {card.title}
          </h3>
          <p style={{ marginBottom: '1rem', color: 'var(--theme-elevation-500)' }}>
            {card.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {card.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--theme-elevation-200)',
                  background: 'var(--theme-elevation-50)',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DashboardOverview;

