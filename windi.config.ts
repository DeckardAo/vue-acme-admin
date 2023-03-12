import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';
import config from './src/config/index';

export default defineConfig({
    darkMode: 'class',
    safelist: 'p-3 p-4 p-5',
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            primary: config.theme.primary,
            secondary: '#ffed4a',
        }),
        extend: {
            colors: {
                teal: {
                    100: '#096',
                },
            },
        },
    },
    plugins: [formsPlugin],
});