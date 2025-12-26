const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing GitHub Pages deployment issues...');

// 1. Update all relative paths in HTML
let html = fs.readFileSync('index.html', 'utf8');

// Replace all href/src that might be absolute with relative
html = html
  .replace(/href="\//g, 'href="./')
  .replace(/src="\//g, 'src="./')
  .replace(/href="icons\//g, 'href="./icons/')
  .replace(/src="icons\//g, 'src="./icons/');

// Add base tag for GitHub Pages
const baseTag = '<base href="./">';
if (!html.includes('<base href')) {
  html = html.replace('<head>', `<head>\n    ${baseTag}`);
}

fs.writeFileSync('index.html', html);
console.log('✅ Updated index.html with relative paths');

// 2. Create a proper 404.html for SPA routing
const notFoundHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Agrifarmers</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        // Redirect to main app
        sessionStorage.redirect = location.pathname;
        location.replace('./');
    </script>
</head>
<body>
    <noscript>
        <p>JavaScript is required for this application. Please enable JavaScript and refresh.</p>
        <p>If you continue to see this message, please go to the <a href="./">home page</a>.</p>
    </noscript>
</body>
</html>`;

fs.writeFileSync('404.html', notFoundHtml);
console.log('✅ Created 404.html for SPA routing');

// 3. Create .nojekyll file to disable Jekyll processing
fs.writeFileSync('.nojekyll', '');
console.log('✅ Created .nojekyll file');

// 4. Update package.json with GitHub Pages specific scripts
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
packageJson.scripts = {
  ...packageJson.scripts,
  "deploy": "gh-pages -d . -b gh-pages",
  "predeploy": "node fix-github-pages.js && npm run build"
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json scripts');

console.log('\n🚀 Fixes complete!');
console.log('Next steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run deploy');
console.log('3. Visit: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/');
