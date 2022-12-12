import react from '@vitejs/plugin-react'
import postcssNormalize from 'postcss-normalize'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssNormalize()],
    },
  },
})
