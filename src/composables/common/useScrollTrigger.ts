import { nextTick, onBeforeUnmount, onMounted, ref } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { Ref } from "vue"
import { getProcess } from "@/assets/js/core/process"

interface Settings {
    start: string;
    end: string;
    once: boolean;
}

export const useScrollTrigger = (element: Ref<string | null>, customSettings: Settings | null = null) => {
    const scrollTriggerElementEntered = ref<boolean>(false)
    let scrollTrigger: ScrollTrigger | null = null

    const commonSettings = {
        start: '50% 95%',
        end: 'bottom top',
        once: true,
    }

    const addScrollTrigger = () => {
        gsap.registerPlugin(ScrollTrigger)

        if (element.value) {
            scrollTrigger = ScrollTrigger.create({
                trigger: element.value,
                ...commonSettings,
                ...(customSettings || {}),
                onEnter: () => {
                    scrollTriggerElementEntered.value = true
                }
            })
        }
    }


    onMounted(async () => {
        if (!getProcess().client) return

        await nextTick()

        addScrollTrigger()
    })

    onBeforeUnmount(() => {
        if (!scrollTrigger) return

        scrollTrigger.kill(false)
    })

    return {
        scrollTriggerElementEntered
    }
}