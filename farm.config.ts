import type { UserConfig } from '@farmfe/core';
import farmJsPluginVue from '@farmfe/js-plugin-vue';

function defineConfig(config: UserConfig) {
    return config;
}

export default defineConfig({
    plugins: [farmJsPluginVue()],
    compilation: {
        output: {
            path: 'dist/farm',
            format: 'esm',
        },
        sourcemap: false,
    },
});
