/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://phoeelectric.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/server-sitemap.xml` : 'https://phoeelectric.com/server-sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Set higher priority for homepage
    const priority = path === '/' ? 1.0 : config.priority;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/'),
    ]
  },
}
