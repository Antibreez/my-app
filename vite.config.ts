import { defineConfig } from 'vite'
import css from './config/style'
import resolve from './config/resolve'
import plugins from './config/plugins'

// https://vite.dev/config/
export default defineConfig({
  plugins,
  css,
  resolve
})
