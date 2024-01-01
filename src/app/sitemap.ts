import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hiring-signal.vercel.',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
