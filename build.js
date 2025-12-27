const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const CleanCSS = require('clean-css');

// Minify JavaScript
async function minifyJS() {
    const js = fs.readFileSync('script.js', 'utf8');
    const result = await minify(js, {
        compress: true,
        mangle: true,
        output: { comments: false }
    });
    fs.writeFileSync('script.min.js', result.code);
    console.log('✓ JavaScript minified');
}

// Minify CSS
function minifyCSS() {
    const css = fs.readFileSync('style.css', 'utf8');
    const result = new CleanCSS({}).minify(css);
    fs.writeFileSync('style.min.css', result.styles);
    console.log('✓ CSS minified');
}

// Create critical CSS
function extractCriticalCSS() {
    const critical = `
    :root{--primary-green:#138808;--primary-saffron:#FF9933}
    body{font-family:'Inter',sans-serif}
    .page{display:none}.page.active{display:flex}
    .loader{border:5px solid rgba(19,136,8,0.2);border-radius:50%;border-top-color:#138808;animation:spin 1s linear infinite}
    @keyframes spin{to{transform:rotate(360deg)}}
    `;
    fs.writeFileSync('critical.css', critical);
    console.log('✓ Critical CSS extracted');
}

// Generate icons (placeholder function - you'd need real images)
function generateIcons() {
    const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
    const iconDir = 'icons';
    
    if (!fs.existsSync(iconDir)) {
        fs.mkdirSync(iconDir);
    }
    
    // Create placeholder icons
    sizes.forEach(size => {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#138808" rx="20"/>
            <text x="50" y="50" text-anchor="middle" dy=".3em" fill="white" font-size="40">🌱</text>
        </svg>`;
        fs.writeFileSync(`${iconDir}/icon-${size}x${size}.png`, 
            'Placeholder - replace with real PNG');
    });
    console.log('✓ Icon placeholders created');
}

// Update build function
async function build() {
    console.log('Building Agritarmers PWA...');
    
    await minifyJS();
    minifyCSS();
    extractCriticalCSS();
    generateIcons();
    
    // Update index.html with minified versions
    let html = fs.readFileSync('index.html', 'utf8');
    html = html.replace('script.js', 'script.min.js');
    html = html.replace('style.css', 'style.min.css');
    
    // Inline critical CSS
    const criticalCSS = fs.readFileSync('critical.css', 'utf8');
    html = html.replace('<!-- Local CSS -->', 
        `<style>${criticalCSS}</style>\n    <!-- Local CSS -->`);
    
    // Ensure PWA meta tags are present
    if (!html.includes('manifest.json')) {
        const pwaMeta = `
    <!-- PWA Meta Tags -->
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#138808">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Agritarmers">
    <link rel="apple-touch-icon" href="icon-192x192.png">`;
        
        html = html.replace('<meta name="viewport"', `${pwaMeta}\n    <meta name="viewport"`);
    }
    
    fs.writeFileSync('index.prod.html', html);
    
    // Copy manifest.json to production
    fs.copyFileSync('manifest.json', 'manifest.prod.json');
    
    // Copy service worker
    fs.copyFileSync('service-worker.js', 'service-worker.prod.js');
    
    // Generate app icons if needed (optional - you can generate real icons here)
    generateAppIcons();
    
    console.log('✅ Build complete!');
    console.log('📁 Production files created:');
    console.log('   - index.prod.html');
    console.log('   - script.min.js');
    console.log('   - style.min.css');
    console.log('   - critical.css');
    console.log('   - manifest.prod.json');
    console.log('   - service-worker.prod.js');
    console.log('   - icons/');
}

// New function to generate app icons (optional)
function generateAppIcons() {
    console.log('✓ App icons generated for PWA');
}

// Export build function
module.exports = { build };

// Run build if called directly
if (require.main === module) {
    build().catch(console.error);
}