import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootIndex = path.join(__dirname, 'index.html');

if (fs.existsSync(rootIndex)) {
  let content = fs.readFileSync(rootIndex, 'utf-8');
  // Replace any compiled script or link tag with the source entrypoints
  content = content.replace(/<script type="module" crossorigin src="\/assets\/index-[^"]+\.js"><\/script>/g, '<script type="module" src="/src/main.tsx"></script>');
  content = content.replace(/<link rel="stylesheet"[^>]*href="\/assets\/index-[^"]+\.css[^"]*"[^>]*>/g, '<link rel="stylesheet" href="/src/index.css">');
  fs.writeFileSync(rootIndex, content, 'utf-8');
  console.log('✓ Prepared index.html with source entry /src/main.tsx for Vite build');
}
