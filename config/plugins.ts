import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import stylelintPlugin from 'vite-plugin-stylelint'
import eslint from 'vite-plugin-eslint2'

export default [
    vue({
        template: {
            compilerOptions: {
                isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag)
            }
        }
    }),
    svgLoader(),
    stylelintPlugin(),
    eslint()
]
