<template lang="pug">
.ui-lang-toggle
    ul.ui-lang-toggle__list
        li.ui-lang-toggle__item(v-for="lang in Object.keys(Languages)")
            button.ui-lang-toggle__button(
                :class="{ active: Languages[lang] === locale }"
                :aria-label="LanguagesText[lang]"
                @click="setLanguage(Languages[lang])"
            )
                span(
                    aria-hidden="true"
                    v-html="Languages[lang]"
                )
</template>

<script setup lang="ts">
import { Languages, LanguagesText } from '@/assets/js/constants/languages'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const emit = defineEmits(['change'])

const setLanguage = (lang: string) => {
    if (lang !== locale.value) emit('change')

    locale.value = lang
    localStorage.setItem('ak-portfolio-lang', lang)
    document.documentElement.setAttribute('lang', lang)
}
</script>

<style lang="scss">
.ui-lang-toggle {
    color: $color3;

    &__list {
        display: flex;
    }

    &__item {
        display: flex;
        position: relative;
        padding: 0 0.5em;

        &:first-child {
            &::after {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                width: 1px;
                height: 100%;
                background: $color3;
            }
        }
    }

    &__button {
        color: inherit;
        font-size: inherit;
        line-height: 100%;
        transition: opacity 0.3s ease;

        &:not(.active) {
            opacity: 0.5;

            @include hover {
                &:hover {
                    cursor: pointer;
                    opacity: 1;
                }
            }
        }
    }
}
</style>