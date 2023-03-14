import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// @ts-ignore
import { getModifyVars } from './src/utils/themeUtil';
import WindiCss from 'vite-plugin-windicss';
import vueJsx from '@vitejs/plugin-vue-jsx';

// @ts-ignore
import * as path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: getModifyVars(),
                javascriptEnabled: true,
            }
        },
    },

    plugins: [
        vue(),
        vueJsx(),
        WindiCss(),
        Components({
            resolvers: [AntDesignVueResolver()]
        })
    ],
    resolve: {
        alias: {
            // @ts-ignore
            '@': path.resolve(__dirname, './src'),
        }
    }
});
