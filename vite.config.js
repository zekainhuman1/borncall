import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                confirm_form: resolve(__dirname, 'confirm_form/index.html'),
            },
        },
    },
})