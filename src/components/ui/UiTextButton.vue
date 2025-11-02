<template lang="pug">
button.ui-text-button
    .ui-text-button__inner
        span(v-html="text")
</template>

<script setup lang="ts">
defineProps<{
    text: string
}>()
</script>

<style lang="scss">
.ui-text-button {
    position: relative;
    opacity: 0.9;
    transition: z-index 0.5s step-end, opacity 0.5s linear;
    
    &__inner {
        position: relative;
        display: block;
        cursor: pointer;
        text-transform: uppercase;
        color: $color3;
        // box-shadow: 0 0 0.6em 0.4em $color2;
        padding: 0.8em 1em;
        border-radius: 0 1.2em 1.2em 0;
        background: $color2;
        z-index: 2;
        transform-origin: 0 50%;
        transition: transform 0.5s ease;

        span {
            position: relative;
            z-index: 3;
        }

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient($color3, transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    }

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        aspect-ratio: 1 / 1;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle at 0% 50%, rgb(0 0 0 / 100%) 20%, transparent 80%);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease;
    }

    @include hover {
        &:hover {
            z-index: 10;
            opacity: 1;
            transition: z-index 0.5s step-start, opacity 0.5s linear;

            &::before {
                opacity: 1;
            }
        }

        &:hover & {
            &__inner {
                transform: translateX(0.3em);

                &::after {
                    opacity: 0.3;
                }
            }
        }
    }
}
</style>