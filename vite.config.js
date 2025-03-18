import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import webfontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), webfontDownload()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['vue', 'vue-router'],
                    ui: ['@headlessui/vue', 'radix-vue']
                }
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
})
