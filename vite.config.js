import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        target: 'es2019',
        outDir: 'extension/scripts',
        sourcemap: true,
        minify: true,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                content: './src/index.js',
            },
            output: {
                entryFileNames: 'content.js',
                assetFileNames: 'content.js',
                chunkFileNames: '[name].js',
                format: 'es',
            },
        },
    },
});