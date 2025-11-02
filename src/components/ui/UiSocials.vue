<template lang="pug">
.ui-socials(:class="{ active }")
    ul.ui-socials__list
        li.ui-socials__item
            .ui-socials__link.ui-socials__link--github
                span.ui-socials__link-text(v-html="'Antibreez'")
                a.ui-socials__link-icon(href="https://github.com/Antibreez" target="_blank")
                    github-icon
        li.ui-socials__item
            .ui-socials__link.ui-socials__link--tg
                span.ui-socials__link-text(v-html="'@Antibreez'")
                a.ui-socials__link-icon(href="tg://resolve?domain=Antibreez")
                    tg-icon
        li.ui-socials__item
            .ui-socials__link.ui-socials__link--mail
                span.ui-socials__link-text(v-html="'kiyananton@gmail.com'")
                a.ui-socials__link-icon(href="mailto:kiyananton@gmail.com")
                    mail-icon
</template>

<script setup lang="ts">
import tgIcon from '@/assets/images/icons/tg.svg'
import mailIcon from '@/assets/images/icons/mail.svg'
import githubIcon from '@/assets/images/icons/github.svg'

interface Props {
    active: boolean
}

const props = withDefaults(defineProps<Props>(), {
    active: false
})
</script>

<style lang="scss">
.ui-socials {
    $fs: 88;

    position: absolute;
    right: 0;
    top: px-to-vh(196);
    font-size: vw-vh-contain($fs);
    padding-right: px-to-rem(60);
    z-index: 10;

    &__list {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: px-to-em(30, $fs);
    }

    &__item {
        transition: transform 0.6s ease;

        @for $i from 1 to 5 {
            &:nth-child(#{$i}) {
                transition-delay: #{2.2 + 0.1 * $i}s;
            }
        }
    }

    &__link {
        position: relative;
        display: flex;
        align-items: center;
        font-weight: 300;
        gap: px-to-em(30, $fs);
        color: inherit;
        
        &-icon {
            position: relative;
            width: 1em;
            height: 1em;
            display: flex;
            align-items: center;
            justify-content: center;

            &::before {
                content: "";
                position: absolute;
                inset: -20%;
                background: radial-gradient(closest-side at 50% 50%, $color3, cubic-bezier(0.5, 0, 0.5, 1), transparent);
                pointer-events: none;
                transition: transform 0.5s ease;
            }

            svg {
                position: relative;
                z-index: 2;
                width: px-to-em(58, $fs);
                height: px-to-em(58, $fs);
            }
        }

        &-text {
            position: absolute;
            top: 50%;
            right: 90%;
            opacity: 0;
            padding: px-to-em(20, 28) px-to-rem(30, 28);
            pointer-events: none;
            transform: translate(px-to-em(30, 28), -50%);
            font-size: px-to-em(28, $fs);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }

        &:hover & {
            &-icon {
                &::before {
                    transform: scale(1.2);
                }
            }

            &-text {
                pointer-events: all;
                opacity: 1;
                transform: translate(0, -50%);
            }
        }
    }

    &:not(.active) & {
        &__item {
            transform: translateX(200%);
        }
    }

    @media (--viewport-portrait-layout) {
        font-size: px-to-rem(50, true);
        top: px-to-vh(20, true);
        padding-right: px-to-rem(20, true);
    }
}
</style>