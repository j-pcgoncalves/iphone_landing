import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "personal-9wu",
    project: "iphone-landing"
  })],
  base: "/iphone_landing/",
  build: {
    sourcemap: true
  }
})
