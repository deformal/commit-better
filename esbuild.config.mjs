import { build } from 'esbuild';
(async () => {
  await build({
    entryPoints: ['./src/main.ts'],
    bundle: true,
    minify: true,
    sourcemap: false,
    outdir: './dist',
    platform: 'node',
  });
})();
