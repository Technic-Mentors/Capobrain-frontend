const fs = require('fs');

// List your React app routes here
const routes = [
  '/',
  '/#/about',
  '/#/features',
  '/#/user-manual',
  '/#/blog',
  '/#/contact',
  '/#/demo',
  // Add more routes as needed
];

function generateXml(urls) {
  const xml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `<url><loc>${url}</loc></url>`).join('\n')}
    </urlset>
  `;

  return xml;
}

function generateSitemap() {
  const fullUrls = routes.map(route => `https://capobrain.com${route}`);
  const xmlContent = generateXml(fullUrls);

  // Write the XML content to a file
  const sitemapPath = './public/sitemap.xml'; // Adjust the path as needed
  fs.writeFileSync(sitemapPath, xmlContent);

  console.log(`Sitemap generated at ${sitemapPath}`);
}

// Run the function
generateSitemap();
