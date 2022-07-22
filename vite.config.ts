/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/app/index.tsx'],
      refresh: true
    }),
    eslintPlugin({
      fix: true,
      emitError: true,
      include: ['./resources/app/**/*.{tsx,ts,mdx}', './resources/stories/**/*.{ts,tsx,mdx}']
    })
  ],
  resolve: {
    alias: {
      '@': '/resources/app'
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './resources/test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
})
