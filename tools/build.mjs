import { build } from 'esbuild';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

await mkdir('release', { recursive: true });
await build({
  entryPoints: ['src/js/game.js'],
  bundle: true,
  minify: true,
  target: ['es2020'],
  outfile: 'release/game.bundle.js'
});
const html = await readFile('index.html', 'utf8');
const css = await readFile('assets/css/game.css', 'utf8');
const bundled = await readFile('release/game.bundle.js', 'utf8');
const standalone = html
  .replace('<link rel="stylesheet" href="assets/css/game.css">', '<style>\n' + css + '\n</style>')
  .replace('<script src="src/js/game.js"></script>', '<script>\n' + bundled + '\n</script>');
await writeFile('release/NEON_OVERDRIVE_NEXT_GEN.html', standalone);
console.log('Built release/NEON_OVERDRIVE_NEXT_GEN.html');
