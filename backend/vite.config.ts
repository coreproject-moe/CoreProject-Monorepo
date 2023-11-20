import { join, resolve } from 'path';
import process from 'process';
import { defineConfig } from 'vite';

const STATIC_SRC = resolve('./django_core/static_src');

const JS_DIRECTORY = join(STATIC_SRC, 'js');
const CSS_DIRECTORY = join(STATIC_SRC, 'css');

export default defineConfig({
    root: resolve('./django_core/static_src'),
    base: '/static/',

    // css: {
    //     devSourcemap: true,
    // },
    build: {
        outDir: join(process.cwd(), 'django_core', 'static'),
        manifest: true,
        emptyOutDir: true,
        target: 'es2015',
        sourcemap: true,
        rollupOptions: {
            input: [
                // Vendor packages
                join(JS_DIRECTORY, 'vendor', 'htmx.ts'),
                join(JS_DIRECTORY, 'vendor', 'hyperscript.ts'),

                // Tailwind.css
                join(CSS_DIRECTORY, 'index.postcss'),

                // Texteditor
                join(JS_DIRECTORY, 'texteditor.ts'),
                // Easytimer
                join(JS_DIRECTORY, 'easytimer.ts'),
                // Register Page
                join(JS_DIRECTORY, 'register.ts'),
                // join(IMAGE_DIRECTORY, 'favicon', 'favicon.svg'),
            ],
            output: {
                chunkFileNames: undefined,
            },
        },
    },
});
