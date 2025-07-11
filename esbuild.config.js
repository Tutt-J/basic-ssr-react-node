// esbuild.config.js
const esbuild = require('esbuild');

// Build client
const buildClient = esbuild.build({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  outdir: 'dist',
  loader: {
    '.js': 'jsx',
    '.css': 'css',
  },
  format: 'esm',
  splitting: false,
  platform: 'browser',
  sourcemap: true,
}).then(() => {
  console.log('✅ Client built');
}).catch((e) => {
  console.error('❌ Client build failed:', e);
});

// Build server
const buildServer = esbuild.build({
  entryPoints: ['server/server.jsx'],
  bundle: true,
  outfile: 'build/server.js',
  platform: 'node',
  target: 'node22',
  sourcemap: true,
  external: ['express', 'react', 'react-dom'],
}).then(() => {
  console.log('✅ Server built');
}).catch((e) => {
  console.error('❌ Server build failed:', e);
});

Promise.all([buildClient, buildServer]);
