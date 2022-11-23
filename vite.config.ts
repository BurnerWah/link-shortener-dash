import react from '@vitejs/plugin-react'
import postcssNormalize from 'postcss-normalize'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import { qrcode } from 'vite-plugin-qrcode'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint --cache "./src/**/*.{ts,tsx}"',
      },
    }),
    qrcode(),
  ],
  css: {
    postcss: {
      plugins: [postcssNormalize()],
    },
  },
})
