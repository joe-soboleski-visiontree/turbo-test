/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  envPrefix: 'VUE_APP_',
  build: {
    cssCodeSplit: false,
    sourcemap: true,
    lib: {
      entry: path.join(__dirname, 'index.ts'),
			name: 'ui',
      fileName: 'ui',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
  ],
  server: {
    port: 8001,
  },
})
