<template lang="pug">
.side-panel
    ui-text-button.side-panel__button(
        v-for="chapter in chapters"
        :text="chapter.label"
        @click="emit('click', chapter)"
    )
</template>

<script setup lang="ts">
import chapters from '@/assets/data/chapters'
import UiTextButton from '@/components/ui/UiTextButton.vue'

const emit = defineEmits(['click'])

console.log('####chapters', chapters)
</script>

<style lang="scss">
.side-panel {
    position: absolute;
    top: px-to-vh(100);
    z-index: 100;

    &__button {
        display: block;
        font-size: px-to-rem(30);
        font-family: inherit;
        font-weight: 300;
        margin-left: -0.3em;

        &:not(:last-child) {
            margin-bottom: px-to-rem(30);
        }
    }
}
</style>