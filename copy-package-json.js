const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, 'package.json');
const destDir = path.resolve(__dirname, 'dist');
const dest = path.join(destDir, 'package.json');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src, dest);
console.log('package.json copied to dist folder');