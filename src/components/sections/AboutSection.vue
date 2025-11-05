<template lang="pug">
section.about-section(
    id="about"
    ref="element"
    :class="{ active: scrollTriggerElementEntered && active }"
)
    .about-section__container.container
        .about-section__decor(data-speed="1.15")
        .about-section__content(ref="content")
            //- h2.about-section__title.h2(v-html="'O'")
            .about-section__text(v-html="$t('description')")
</template>

<script setup lang="ts">
import { useScrollTrigger } from '@/composables/common/useScrollTrigger'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
    active: boolean
}

const element = ref<string | null>(null)
const content = ref<string | null>(null)

const { scrollTriggerElementEntered } = useScrollTrigger(element)

withDefaults(defineProps<Props>(), {
    active: false
})

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(content.value, {
        scrollTrigger: {
            trigger: content.value,
            scrub: true,
            start: 'top 30%',
            end: 'bottom 10%',
            onEnter: () => {
                console.log('####entered')
                
            }
        },
        opacity: 0,
        ease: 'none'
    })

})
</script>

<style lang="scss">
.about-section {
    position: relative;
    padding-top: px-to-vh(100);
    padding-bottom: px-to-vh(50);
    z-index: 2;

    &__container { 
        position: relative;
    }

    &__decor {
        position: absolute;
        bottom: 50%;
        left: px-to-vw(20);
        display: flex;
        font-size: px-to-rem(150);
        color: $color2;
        transform-origin: 50% 50%;
        transform: translate(-0.5em, 50%) rotate(-90deg);

        
        &::before {
            content: 'Hello';
            transition: opacity 1s ease 0.4s, transform 1s cubic-bezier(.16,.33,.42,.99) 0.4s;
            text-transform: uppercase;
        }
    }


    &__content {
        position: relative;
        padding-left: px-to-vw(350);
        padding-right: px-to-vw(200);
        font-weight: 300;
        z-index: 2;

        ul {
            margin: 1em 0;
        }

        li {
            &::before {
                content: '- ';
            }
        }
    }

    &__text {
        transition: transform 1.2s cubic-bezier(.16,.33,.42,.99) 0.1s, opacity 1.2s cubic-bezier(.16,.33,.42,.99) 0.1s;
        transform-origin: 100% 50%;
    }
    
    &:not(.active) & {
        &__decor {
            &::before {
                opacity: 0;
                transform: translateX(-20%);
            }
        }

        &__text {
            transform: translateY(30%);
            opacity: 0;
        }
    }

    @media (--viewport-portrait-layout) {
        padding-top: px-to-rem(50, true);
        padding-bottom: px-to-rem(20, true);

        &__content {
            padding-left: px-to-vw(60, true);
            padding-right: 0;
        }

        &__decor {
            // left: -18%;
            // bottom: 90%;

            left: px-to-vw(50);
            font-size: px-to-vw(58, true);
            transform: translate(-50%, 50%) rotate(-90deg);
        }
    }
}
</style>