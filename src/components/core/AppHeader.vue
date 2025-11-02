<template lang="pug">
.app-header(:class="{ shown, opened: isMenuOpened, 'underlayer-shown': underlayerShown }")
    .app-header__container.container
        ui-menu-button.app-header__menu-button(
            v-if="isPortraitLayout"
            :opened="isMenuOpened"
            @click="onMenuButtonClick"
        )
        .app-header__content(
            id="main-nav"
            v-bind="menuAttributes"
        )
            nav.app-header__nav
                ul.app-header__nav-list
                    li.app-header__nav-item
                        a.app-header__nav-link(href="#about" v-html="$t('about')" @click="isMenuOpened = false")
                    li.app-header__nav-item
                        a.app-header__nav-link(href="#works" v-html="$t('works')" @click="isMenuOpened = false")
                    li.app-header__nav-item
                        a.app-header__nav-link(href="#contacts" v-html="$t('contacts')" @click="isMenuOpened = false")
            ui-lang-toggle.app-header__lang-toggle(@change="isMenuOpened = false")
</template>

<script setup lang="ts">
import { useAppStateStore } from '@/stores/app-state'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref, watch, type ComputedRef } from 'vue'
import { waitForTimeOutPromise } from '@/assets/js/core/waitForTimeoutPromise'
import { getProcess } from '@/assets/js/core/process'
import { useI18n } from 'vue-i18n'
import UiLangToggle from '@/components/ui/UiLangToggle.vue'
import { useViewport } from '@/composables/common/useViewport'
import UiMenuButton from '@/components/ui/UiMenuButton.vue'

const appStateStore = useAppStateStore()

const { isPortraitLayout } = useViewport()

const { isLoading } = storeToRefs(appStateStore)
const shown = ref<boolean>(false)
const underlayerShown = ref<boolean>(false)
const isMenuOpened = ref<boolean>(false)

const menuAttributes: ComputedRef<{
    'aria-hidden': boolean;
} | {
    'aria-hidden'?: undefined;
}> = computed(() => isPortraitLayout.value ? { 'aria-hidden': !isMenuOpened.value } : {})

const onPageScroll = () => {
    if (document.documentElement.scrollTop > 100) {
        if (!underlayerShown.value) underlayerShown.value = true

        return
    }

    if (underlayerShown.value) underlayerShown.value = false
}

const onMenuButtonClick = () => {
    isMenuOpened.value = !isMenuOpened.value

    if (getProcess().client) {
        if (isMenuOpened.value) {
            document.body.classList.add('is-overflow-hidden')

            return
        }

        document.body.classList.remove('is-overflow-hidden')
    }
}

watch(isLoading, async (to) => {
    if (to) return

    await waitForTimeOutPromise(2700)

    shown.value = true
})

onMounted(async () => {
    if (!getProcess().client) return

    // gsap.registerPlugin(ScrollToPlugin)

    window.addEventListener('scroll', onPageScroll)

    // const links = gsap.utils.toArray("#main-nav a") as HTMLAnchorElement[]

    // console.log('###links', links);

    // await waitForTimeOutPromise(5000);
    
    // links.forEach((link: HTMLAnchorElement) => {
    //     console.log('###type', link.getAttribute('href'));
        
    //     const element = document.querySelector(link.getAttribute("href")!)

        
    //     const linkST = ScrollTrigger.create({
    //         trigger: element,
    //         start: 'top top',
    //         end: 'bottom 50%',
    //         markers: link.getAttribute('href') === '#works',
    //         onEnter: (e) => {link.getAttribute('href') === '#works' && console.log('#####toggle', e.start);},
    //         onLeave: () => {link.getAttribute('href') === '#works' && console.log('#####leave');}
    //     })
    //     console.log('####element', linkST.start);
        
    //     link.addEventListener("click", (e) => {
    //         console.log('####linkst', linkST.start);
            

    //         e.preventDefault()
    //         // gsap.to(document.getElementById('smooth-wrapper'), {
    //         //     duration: 1,
    //         //     scrollTo: linkST.start,
    //         // })

    //         window.scrollTo({
    //             top: 1673
    //         })
    //     })
    // })
})
</script>

<style lang="scss">
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    pointer-events: none;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 160%;
        background: linear-gradient(180deg, $color2, cubic-bezier(0.53, 0, 0.47, 1), transparent);
        transition: opacity 0.3s ease;
        opacity: 0;
    }

    &__container {
        display: flex;
    }

    &__content {
        width: 100%;
        display: flex;
        padding-top: px-to-rem(20);
        padding-bottom: px-to-rem(20);
        font-size: vw-vh-contain(30);
        transition: transform 1s ease;
    }

    &__lang-toggle {
        flex-shrink: 0;
        align-self: center;
        pointer-events: all;
    }

    &__nav {
        padding-left: px-to-vw(350);
        flex-grow: 1;
        margin-right: px-to-rem(50);

        &-list {
            display: flex;
            justify-content: space-between;
        }

        &-link {
            position: relative;
            display: inline-block;
            text-decoration: none;
            color: inherit;
            font-weight: 300;
            pointer-events: all;

            &::before {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                height: px-to-em(2, 30);
                width: 100%;
                background: $color3;
                transform: translateX(-50%) scaleX(0);
                transition: transform 0s ease 0.3s, opacity 0.2s ease;
                opacity: 0;
            }

            @include hover {
                &:hover {
                    &::before {
                        transform: translateX(-50%) scaleX(1);
                        transition-duration: 0.3s, 0s;
                        transition-delay: 0s, 0s;
                        opacity: 1;
                    }
                }
            }
        }
    }

    &.underlayer-shown {
        &::before {
            opacity: 1;
        }
    }
    
    &:not(.shown) & {
        &__content {
            transform: translateY(-100%);
        }
    }

    @media (--viewport-portrait-layout) {
        &::before {
            height: 220%;
        }

        &__container {
            padding-top: px-to-vh(10, true);
        }

        &__content {
            position: fixed;
            inset: 0;
            flex-direction: column;
            background: rgb(37 36 34 / 70%);
            backdrop-filter: blur(px-to-rem(5, true));
            padding: px-to-vh(100, true) px-to-rem(20, true);
            font-size: px-to-rem(24, true);
            transition-duration: 0.5s;
            pointer-events: all;
        }

        &__nav {
            margin-right: 0;
            padding-left: 0;

            &-list {
                flex-direction: column;
                gap: px-to-rem(20, true);
            }

            &-item {
                text-align: center;
            }
        }

        &__menu-button {
            transition: opacity 1s ease;
            pointer-events: all;
            z-index: 5;
        }

        &:not(.shown) & {
            &__content {
                transform: none;
            }

            &__menu-button {
                opacity: 0;
            }
        }

        &:not(.opened) & {
            &__content {
                transform: translateX(100%);
            }
        }
    }
}
</style>