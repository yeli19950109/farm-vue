import type { UserConfig } from '@farmfe/core';
// import farmJsPluginVue from '@farmfe/js-plugin-vue';
import vue from '@vitejs/plugin-vue';

function defineConfig(config: UserConfig) {
    return config;
}

export default defineConfig({
    // plugins: [farmJsPluginVue()],
    vitePlugins: [vue()],
    compilation: {
        output: {
            path: 'dist/farm-vite',
            format: 'esm',
        },
        sourcemap: false,
    },
});
