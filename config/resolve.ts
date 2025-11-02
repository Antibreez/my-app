import { fileURLToPath, URL } from 'url'

export default {
    alias: {
        '@': fileURLToPath(new URL('../src', import.meta.url))
    }
}