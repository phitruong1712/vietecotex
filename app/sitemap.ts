import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vietecotex.com';
  // Add important URLs here as you build out pages
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/catalog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/our-commitment`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/certifications`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: 'yearly', priority: 0.3 },
    // add more routes as needed
  ];
}
