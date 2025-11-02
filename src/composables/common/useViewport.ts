import { onMounted, ref } from "vue"
import { MediaQueries } from "@/assets/js/constants/mediaQueries"

export const useViewport = () => {
    const isPortraitLayout = ref<boolean>(window.matchMedia(MediaQueries.PORTRAIT_LAYOUT).matches)

    const onResize = () => {
        isPortraitLayout.value = window.matchMedia(MediaQueries.PORTRAIT_LAYOUT).matches
    }

    onMounted(() => {
        window.addEventListener('resize', onResize)
    })

    return {
        isPortraitLayout
    }
}