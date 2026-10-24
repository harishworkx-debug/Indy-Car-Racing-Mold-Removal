import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Read the base dist/index.html template
const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Please run vite build first.');
  process.exit(1);
}
const template = fs.readFileSync(templatePath, 'utf8');

// Load SSR bundle
const ssrPath = path.join(rootDir, 'dist-ssr', 'entry-server.js');
if (!fs.existsSync(ssrPath)) {
  console.error('Error: dist-ssr/entry-server.js not found. Please run vite build --ssr first.');
  process.exit(1);
}

const { render, routes } = await import(`file://${ssrPath.replace(/\\/g, '/')}`);

console.log(`Starting pre-rendering for ${routes.length} pages...`);

for (const route of routes) {
  try {
    const appHtml = render(route.path);
    const canonicalUrl = `https://www.moldremoval-speedway.com${route.path === '/' ? '/' : route.path}`;

    let html = template;

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

    // Replace Description
    html = html.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );

    // Replace / Insert Canonical
    const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
    if (html.includes('<link rel="canonical"')) {
      html = html.replace(/<link rel="canonical" href=".*?" \/>/, canonicalTag);
    } else {
      html = html.replace('</head>', `  ${canonicalTag}\n  </head>`);
    }

    // Open Graph
    html = html.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
    if (route.image) {
      html = html.replace(
        /<meta property="og:image" content=".*?" \/>/,
        `<meta property="og:image" content="${route.image}" />`
      );
    }

    // Inject rendered HTML into root
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Determine output directory & file
    let destDir;
    let destFile;

    if (route.path === '/') {
      destDir = distDir;
      destFile = path.join(destDir, 'index.html');
    } else {
      const cleanPath = route.path.replace(/^\//, '');
      destDir = path.join(distDir, cleanPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      destFile = path.join(destDir, 'index.html');
    }

    fs.writeFileSync(destFile, html, 'utf8');
    console.log(`✓ Pre-rendered: ${route.path} -> ${destFile.replace(rootDir, '')}`);
  } catch (err) {
    console.error(`✗ Error pre-rendering ${route.path}:`, err);
  }
}

console.log('✅ All routes successfully pre-rendered into static HTML!');
