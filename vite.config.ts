/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName(name, filename) {
        let file = path.basename(filename, '.css')
        if (file.endsWith('.module')) {
          file = path.basename(file, '.module')
        }

        return `${file}__${name}`
      }
    }
  },
  plugins: [
    laravel({
      input: ['resources/app/index.tsx'],
      refresh: true
    }),
    react(),
    eslintPlugin({
      fix: true,
      emitError: true,
      include: ['./resources/app/**/*.{tsx,ts,mdx}', './resources/stories/**/*.{ts,tsx,mdx}']
    }),
    splitVendorChunkPlugin()
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
