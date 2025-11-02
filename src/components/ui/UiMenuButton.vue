<template lang="pug">
button.ui-menu-button(
    :class="{ opened }"
    :aria-expanded="opened"
    :aria-label="opened ? $t('closeMenu') : $t('openMenu')"
)
</template>

<script setup lang="ts">
defineProps<{
    opened: boolean
}>()
</script>

<style lang="scss">
.ui-menu-button {
    position: relative;
    width: px-to-rem(50, true);
    height: px-to-rem(50, true);

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: px-to-rem(3, true);
        background: $color3;
        transition: transform 0.3s ease-in-out;
    }

    &::before {
        transform: translate(0, -200%);
    }

    &::after {
        transform: translate(0, 100%);
    }

    &.opened { 
        &::before {
            transform: translate(0, -50%) rotate(45deg);
        }

        &::after {
            transform: translate(0, -50%) rotate(-45deg);
        }
    }
}
</style>