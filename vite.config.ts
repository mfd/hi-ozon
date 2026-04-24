import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

export default defineConfig({
  base: pkg.homepage ? new URL(pkg.homepage).pathname : '/', // ← Для GitHub Pages поддиректории
  
  plugins: [react(), tailwindcss()],
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
