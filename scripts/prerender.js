const { buildSync } = require('esbuild');
const { readFileSync, writeFileSync, unlinkSync } = require('fs');
const { execSync } = require('child_process');
const { join } = require('path');

const rootDir = join(__dirname, '..');
const buildDir = join(rootDir, 'build');
const bundlePath = join(buildDir, '_prerender.js');

console.log('Pre-rendering: bundling React app for server-side rendering...');

// Bundle the React app for Node.js using esbuild
buildSync({
  entryPoints: [join(__dirname, 'prerender-entry.tsx')],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  outfile: bundlePath,
  // CSS files are not needed for HTML generation — ignore them
  // Image/asset imports are not used (components use direct paths like /logo.png)
  loader: {
    '.css': 'empty',
    '.png': 'text',
    '.jpg': 'text',
    '.jpeg': 'text',
    '.svg': 'text',
    '.gif': 'text',
    '.ico': 'text',
    '.woff': 'file',
    '.woff2': 'file',
    '.ttf': 'file',
    '.eot': 'file',
  },
  logLevel: 'warning',
});

console.log('Pre-rendering: generating HTML from React components...');

// Execute the bundle to produce rendered HTML
const renderedHtml = execSync(`node "${bundlePath}"`, {
  encoding: 'utf-8',
  cwd: rootDir,
});

// Read the CRA-built index.html
const indexHtmlPath = join(buildDir, 'index.html');
const indexHtml = readFileSync(indexHtmlPath, 'utf-8');

// Inject pre-rendered content into the root div
const prerenderedHtml = indexHtml.replace(
  '<div id="root"></div>',
  `<div id="root">${renderedHtml}</div>`
);

writeFileSync(indexHtmlPath, prerenderedHtml);

// Clean up temporary bundle
unlinkSync(bundlePath);

// Verify the output contains actual content
const contentCheck = prerenderedHtml.includes('Technology That');
console.log(
  contentCheck
    ? 'Pre-rendering: SUCCESS — HTML contains visible page content'
    : 'Pre-rendering: WARNING — rendered HTML may be empty'
);

// Update sitemap.xml lastmod dates to current build date
const sitemapPath = join(buildDir, 'sitemap.xml');
const today = new Date().toISOString().split('T')[0];
const sitemap = readFileSync(sitemapPath, 'utf-8');
const updatedSitemap = sitemap.replace(
  /<lastmod>[^<]+<\/lastmod>/g,
  `<lastmod>${today}</lastmod>`
);
writeFileSync(sitemapPath, updatedSitemap);
console.log(`Sitemap: updated lastmod dates to ${today}`);
