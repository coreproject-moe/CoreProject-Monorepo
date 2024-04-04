import { join, resolve } from "path";
import process from "process";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
const STATIC_SRC = resolve("./django_core/static_src");

const COMPONENT_DIRECTORY = join(STATIC_SRC, "components");
const JS_DIRECTORY = join(STATIC_SRC, "js");
const CSS_DIRECTORY = join(STATIC_SRC, "css");

export default defineConfig({
    root: resolve("./django_core/static_src"),
    base: "/static/",
    resolve: {
        alias: {
            $tailwind: join(resolve("./tailwind.config.ts")),
            $stores: join(STATIC_SRC, "stores"),
            $functions: join(STATIC_SRC, "functions"),
            $components: join(STATIC_SRC, "components"),
            $icons: join(STATIC_SRC, "components", "icons"),
            $skeleton: join(STATIC_SRC, "skeleton"),
            $types: join(STATIC_SRC, "types"),
            $constants: join(STATIC_SRC, "constants")
        }
    },
    plugins: [
        tailwindcss(),
        svelte({
            compilerOptions: {
                customElement: true
            },
            configFile: join(process.cwd(), "svelte.config.js")
        })
    ],
    css: {
        devSourcemap: true,
        // Switch to lightning.css when tailwind supports it
        transformer: "postcss"
    },
    esbuild: {
        // legalComments: "external"
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true
        },
        outDir: join(process.cwd(), "django_core", "static"),
        manifest: true,
        chunkSizeWarningLimit: 2048,
        emptyOutDir: true,
        target: "es2022",
        cssTarget: "es2015",
        minify: "terser",
        // sourcemap: true,
        rollupOptions: {
            input: [
                // Tailwind.css
                join(CSS_DIRECTORY, "index.postcss"),

                // join(IMAGE_DIRECTORY, 'favicon', 'favicon.svg'),
                // Components
                join(STATIC_SRC, "main.ts")
            ],
            output: {
                manualChunks: undefined,
                entryFileNames: `coreproject.entry.[name].[hash].js`,
                chunkFileNames: `coreproject.chunk.[name].[hash].js`,
                assetFileNames: `coreproject.asset.[name].[hash].[ext]`
            }
        }
    }
});
