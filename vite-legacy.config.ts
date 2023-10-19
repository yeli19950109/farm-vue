import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    plugins: [
        vue(),
        legacy({
            polyfills: true,
            renderModernChunks: false,
        }),
    ],
    build: {
        outDir: 'dist/vite-legacy',
    },
});