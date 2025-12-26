const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 Starting GitHub Pages Deployment...\n');

try {
  // 1. Install dependencies if needed
  console.log('📦 Checking dependencies...');
  if (!fs.existsSync('node_modules')) {
    execSync('npm install', { stdio: 'inherit' });
  }

  // 2. Fix paths for GitHub Pages
  console.log('🔧 Fixing paths for GitHub Pages...');
  
  // Read and update index.html
  let html = fs.readFileSync('index.html', 'utf8');
  
  // Make all paths relative
  html = html
    .replace(/href="\//g, 'href="./')
    .replace(/src="\//g, 'src="./')
    .replace('manifest.json', './manifest.json')
    .replace('service-worker.js', './service-worker.js');
  
  // Add base tag
  if (!html.includes('<base href')) {
    html = html.replace('<head>', '<head>\n    <base href="./">');
  }
  
  fs.writeFileSync('index.html', html);
  
  // 3. Build the project
  console.log('🏗️  Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // 4. Deploy to GitHub Pages
  console.log('🌐 Deploying to GitHub Pages...');
  execSync('npx gh-pages -d . -b gh-pages', { stdio: 'inherit' });
  
  console.log('\n✅ Deployment successful!');
  console.log('\n📱 Your PWA is now available at:');
  console.log('   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/');
  console.log('\n🔍 Please wait 1-2 minutes for GitHub to deploy.');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
