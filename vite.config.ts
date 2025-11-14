import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          router: ['vue-router'],
          vendor: ['axios', 'lodash'],  // ใส่ lib ใหญ่ๆ ตรงนี้
        }
      }
    }
  }
})
