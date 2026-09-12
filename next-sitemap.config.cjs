/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bismillah-auto.netlify.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/api/',
      },
    ],
    additionalSitemaps: [
      'https://bismillah-auto.netlify.app/sitemap.xml',
    ],
  },
  exclude: ['/api/*'],
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      '/': {
        priority: 1.0,
        changefreq: 'daily',
      },
      '/product': {
        priority: 0.9,
        changefreq: 'weekly',
      },
      '/services': {
        priority: 0.8,
        changefreq: 'weekly',
      },
      '/contact': {
        priority: 0.7,
        changefreq: 'monthly',
      },
      '/legal': {
        priority: 0.5,
        changefreq: 'monthly',
      },
    };

    return {
      loc: path,
      changefreq: customConfig[path]?.changefreq || 'monthly',
      priority: customConfig[path]?.priority || 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};