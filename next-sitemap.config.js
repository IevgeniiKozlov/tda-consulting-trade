/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tda-consulting-trade.com',
  generateRobotsTxt: true, // (optional)
  priority: 1,
}
