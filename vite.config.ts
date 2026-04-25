import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import { readFile, writeFile } from 'fs/promises'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import sharp from 'sharp'
import pkg from './package.json'

function optimizeRasterAssets(): Plugin {
  return {
    name: 'optimize-raster-assets',
    apply: 'build',
    async writeBundle(outputOptions, bundle) {
      const outDir = outputOptions.dir;

      if (!outDir) return;

      const assetsToOptimize = Object.values(bundle).filter((chunk) => {
        if (chunk.type !== 'asset') return false;

        return /\.(png|jpe?g)$/i.test(chunk.fileName);
      });

      await Promise.all(
        assetsToOptimize.map(async (asset) => {
          const assetPath = path.join(outDir, asset.fileName);
          const sourceBuffer = await readFile(assetPath);
          const sourceSize = sourceBuffer.byteLength;
          const image = sharp(sourceBuffer);
          const ext = path.extname(asset.fileName).toLowerCase();

          const optimizedBuffer =
            ext === '.png'
              ? await image.png({ compressionLevel: 9, effort: 10 }).toBuffer()
              : await image.jpeg({ quality: 80, mozjpeg: true }).toBuffer();

          if (optimizedBuffer.byteLength < sourceSize) {
            await writeFile(assetPath, optimizedBuffer);
          }
        }),
      );
    },
  };
}

export default defineConfig({
  base: pkg.homepage ? new URL(pkg.homepage).pathname : '/', // ← Для GitHub Pages поддиректории
  
  plugins: [react(), tailwindcss(), optimizeRasterAssets()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      {
        find: /^figma:asset\/(.+\.(png|jpg|jpeg|svg|gif|webp))?$/,
        replacement: path.resolve(__dirname, 'src/assets/$1')
      }
    ],
  },
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.gif', '**/*.webp'],
})
