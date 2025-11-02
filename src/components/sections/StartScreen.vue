<template lang="pug">
section.start-screen(:class="{ active }")
    .start-screen__container.container
        .start-screen__content(ref="content" :data-speed="0.8")
            h1.start-screen__title(ref="title")
                span.start-screen__title-item
                    span(v-html="`${$t('name').split(' ')[0]} `")
                span.start-screen__title-item
                    span(v-html="`${$t('name').split(' ')[1]}`")
            span.start-screen__line
            p.start-screen__role
                span(v-html="$t('role')")
    ui-socials.start-screen__socials(:active="active")
    a.start-screen__scroll-button(id="start-scroll" href="#about")
        chevron-icon
</template>

<script setup lang="ts">
import UiSocials from '@/components/ui/UiSocials.vue'
import chevronIcon from '@/assets/images/icons/chevron.svg'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
    active: boolean
}

withDefaults(defineProps<Props>(), {
    active: false
})

const content = ref<string | null>(null)

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(content.value, {
        scrollTrigger: {
            trigger: content.value,
            scrub: true,
            start: 'top 30%',
            end: 'bottom 10%'
        },
        opacity: 0,
        ease: 'none'
    })
})
</script>

<style lang="scss">
.start-screen {
    $fs: 150;
    $font-border: 3px;
    $easing: cubic-bezier(.18,0,.33,1.01);

    position: relative;
    display: flex;
    min-height: 100dvh;
    color: $color3;

    &__container {
        position: relative;
        display: flex;
        align-items: center;
        min-width: 1px;

        &::before,
        &::after {
            content: "";
            position: absolute;
            aspect-ratio: 3 / 1;
            width: 150%;
            background: radial-gradient(closest-side at 50% 50%, $color3, cubic-bezier(0, 0, 0, 1), $color1);
            transition: opacity 1s ease 1.8s;
            pointer-events: none;
        }

        &::before {
            top: 0;
            left: 50%;
            transform: translate(-50%, calc(-50% - px-to-vw(100)));
            opacity: 0.5;
        }

        &::after {
            width: 200%;
            left: 50%;
            top: 50%;
        }
    }

    &__content {
        position: relative;
        flex-grow: 1;
        font-size: min(vw-vh-contain($fs), px-to-rem($fs));
        padding-left: px-to-vw(350);
        z-index: 2;
    }

    &__title {
        // display: inline-flex;
        // flex-wrap: wrap;
        font-size: inherit;
        font-weight: 300;
        line-height: 0;
        text-transform: uppercase;
        width: px-to-em(650, 150);
        margin-bottom: px-to-em(30, 150);
        
        &-item {
            display: inline-block;
            overflow: hidden;
            line-height: 80%;

            &:first-child {
                span {
                    padding-bottom: px-to-em(10, 150);
                }
            }

            &:nth-child(2) {
                span {
                    padding-top: px-to-em(10, 150);
                }
            }

            span {
                display: inline-block;
                transition: transform 1s $easing;
            }
        }
        
        // column-gap: 0.2em;
    }

    &__line {
        display: block;
        width: 100vw;
        height: px-to-em(5, 150);
        background: $color3;
        transition: transform 0.5s cubic-bezier(.03,.15,.19,1) 1s;
        transform-origin: 100% 50%;
    }

    &__role {
        padding-top: px-to-em(20, 40);
        font-size: px-to-em(40, 150);
        font-weight: 250;
        text-transform: uppercase;
        overflow: hidden;

        span {
            display: inline-block;
            transition: transform 1s $easing 1.5s;
        }
    }

    &__scroll-button {
        position: absolute;
        bottom: px-to-vh(60);
        left: 50%;
        transform: translateX(-50%);
        z-index: 5;
        width: px-to-rem(74);
        color: $color3;
        transition: transform 0.5s ease 3s, opacity 0.5s ease 3s;
        cursor: pointer;

        svg {
            width: 100%;
            animation: pulse-bottom-1 1s ease infinite;
        }
    }
    
    &:not(.active) & {
        &__container {
            &::before,
            &::after {
                opacity: 0;
            }
        }

        &__title {
            &-item {
                &:first-child {
                    span {
                        transform: translateY(100%);
                    }
                }

                &:nth-child(2) {
                    span {
                        transform: translateY(-100%);
                    }
                }
            }
        }

        &__line {
            transform: scaleX(0);
        }

        &__role {
            span {
                transform: translateY(-200%);
            }
        }

        &__scroll-button {
            opacity: 0;
            transform: translate(-50%, -50%);
        }
    }

    @media (--viewport-portrait-layout) {
        &__container {
            &::before,
            &::after {
                width: 250%;
            }

            &::before {
                transform: translate(-50%, -50%);
            }
        }

        &__content {
            font-size: px-to-rem(60, true);
            padding-left: 0;
        }
    }
}
</style>