<template lang="pug">
section.works-section(id="works")
    .works-section__container.container
        .works-section__decor
        .works-section__content
            .works-section__content-item(
                v-for="(work, index) in sortedWorks"
            )
                ui-work-card.works-section__card(
                    v-bind="work"
                    :index="index"
                )
</template>

<script setup lang="ts">
import works from '@/assets/data/works'
import UiWorkCard from '@/components/ui/UiWorkCard.vue'

const sortedWorks = [...works].sort((a, b) => a.order - b.order)
</script>

<style lang="scss">
.works-section {
    position: relative;
    padding: px-to-vh(100) 0 px-to-vh(50);

    &__container {
        position: relative;
    }

    &__decor {
        position: absolute;
        right: px-to-rem(250);
        top: 5%;
        height: 100%;
        width: 1px;

        &::before {
            content: "Works";
            position: absolute;
            top: 50%;
            left: 0;
            font-size: px-to-rem(200);
            color: $color2;
            transform-origin: 50% 50%;
            transform: translate(-50%, -50%) rotate(90deg);
            text-transform: uppercase;
        }
    }

    &__content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: max-content;
        gap: px-to-rem(80);
        padding-left: px-to-rem(150);
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h10v10H0V10zM10 0h10v10H10V0z' fill='%231e1e1c' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E");
        background-size: px-to-rem(70) auto;

        &-item {
            &:nth-child(even) {
                transform: translateY(50%);
            }
        }
    }

    &__skills {
        width: 100%;
        height: px-to-rem(100);
        background: black;
    }

    @media (--viewport-portrait-layout) {
        padding: px-to-rem(50, true) 0 0;

        &__decor {
            &::before {
                font-size: px-to-rem(140, true);
            }
        }

        &__content {
            display: block;
            padding-left: 0;
            width: 100%;

            &-item {
                &:nth-child(even) {
                    transform: translateY(0%);
                }
            }
        }
    }
}
</style>