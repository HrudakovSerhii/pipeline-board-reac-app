import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mockApi } from './middleware/api.middleware.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), mockApi()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
})
