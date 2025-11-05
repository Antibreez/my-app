<template lang="pug">
.main-page(id="smooth-wrapper")
    .main-page__inner(id="smooth-content")
        .main-page__content
            .main-page__bg
                .main-page__bg-container.container
            start-screen.main-page__start-screen(:active="loaded")
            about-section.main-page__about-section(:active="loaded")
            works-section.main-page__works-seciton
            contacts-section.main-page__contacts-sectoin
</template>

<script setup lang="ts">
import { useDefaultFirstLoadingComplete } from '@/composables/common/useDefaultFirstLoadingComplete'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { waitForTimeOutPromise } from '@/assets/js/core/waitForTimeoutPromise'
import StartScreen from '@/components/sections/StartScreen.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import WorksSection from '@/components/sections/WorksSection.vue'
import ContactsSection from '@/components/sections/ContactsSection.vue'
import { getProcess } from '@/assets/js/core/process'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { isTouch } from '@/assets/js/core/isTouch'

const loaded = ref<boolean>(false)

let links

onMounted(async () => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin)

    let smother = ScrollSmoother.create({
        smooth: isTouch() ? 0 : 1,
        speed: isTouch() ? 0.4 : 0.6,
        effects: true,
        normalizeScroll: true
    })
    
    await waitForTimeOutPromise(500)

    useDefaultFirstLoadingComplete()

    await waitForTimeOutPromise(1700)

    loaded.value = true

    links = gsap.utils.toArray("#main-nav a") as HTMLAnchorElement[]
    const startScrollLink = document.querySelector('a#start-scroll') as HTMLAnchorElement
    links.push(startScrollLink)

    links.forEach((link: HTMLAnchorElement) => {
        const element = document.querySelector(link.getAttribute("href")!)
        const elementST = ScrollTrigger.create({
            trigger: element,
            start: "top top"
        })
        
        link.addEventListener("click", (e) => {
            e.preventDefault()

            if (isTouch()) {
                window.scrollTo({
                    top: elementST.start - 100,
                    behavior: 'smooth'
                })

                return
            }
            
            smother.scrollTo(element, true, '-70rem')
        })
    })
})
</script>

<style lang="scss">
.main-page {
    &__content {
        overflow: hidden;
    }
}
</style>