import react from '@vitejs/plugin-react'
import postcssNormalize from 'postcss-normalize'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    !process.env.VITEST &&
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint --cache "./src/**/*.{ts,tsx}"',
        },
      }),
  ],
  css: {
    postcss: {
      plugins: [postcssNormalize()],
    },
  },
})
