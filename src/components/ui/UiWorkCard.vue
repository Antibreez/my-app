<template lang="pug">
a.ui-work-card(
    :class="id"
    target="_blank"
    :href="link"
    :data-speed="parallaxSpeed[index]"
)
    .ui-work-card__inner
        span.ui-work-card__image.ui-work-card__image--desktop
            span.ui-work-card__image-inner
        span.ui-work-card__image.ui-work-card__image--mobile(:data-speed="0.95")
            span.ui-work-card__image-inner
        .ui-work-card__content
            p.ui-work-card__text(v-html="$t(textId)")
            ul.ui-work-card__tags
                li.ui-work-card__tag(v-for="tag in tags")
                    span(v-html="tag")
        //- .ui-work-card__arrow
        //- arrow-icon
    //- chevron-icon
</template>

<script setup lang="ts">
import arrowIcon from '@/assets/images/icons/arrow.svg'
import chevronIcon from '@/assets/images/icons/chevron.svg'

interface Props {
    order: number
    id: string
    text: string
    textId: string
    tags: string[]
    link: string
    index: number
}

defineProps<Props>()
const parallaxSpeed = [1.6, 1.5, 1.4, 1.3, 1.2]
</script>

<style lang="scss">
.ui-work-card {
    $fs: 23;

    display: flex;
    font-size: px-to-rem($fs + 2);
    width: px-to-em(498, $fs);
    font-weight: 300;
    text-decoration: none;
    color: $color3;
    box-shadow: 0 px-to-em(10, $fs) px-to-em(60, $fs) black;

    // & > svg {
    //     position: absolute;
    //     left: 100%;
    //     top: 50%;
    //     width: 2em;
    //     height: 1em;
    // }

    // &__arrow {
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    //     width: 50%;
    //     height: 100%;
    //     background: rgb(37 36 34 / 80%);
    //     z-index: 5;
    //     transform: translateX(100%);
    //     overflow: hidden;
    //     opacity: 0;
    //     transition: transform 0s ease-out 0.2s, opacity 0.2s;

    //     svg {
    //         position: absolute;
    //         top: 20%;
    //         left: 50%;
    //         width: 50%;
    //         transform: translateX(-200%);
    //         transition: transform 0s ease-in-out 0.2s;
    //     }
    // }
    
    &__inner {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: px-to-em(235, $fs);
        background: linear-gradient(180deg, $color3, $color1);
        overflow: hidden;

        svg {
            position: absolute;
            right: 0.5em;
            bottom: 0.2em;
            width: 2em;
            z-index: 5;
            opacity: 0;
            transform: translateX(-100%);
            transition: transform 0s ease 0.2s, opacity 0.2s;
        }
    }
    
    &__content {
        position: relative;
        background: $color1;
        z-index: 5;
        display: flex;
        flex-direction: column;
        padding: px-to-em(15, $fs);
        height: 100%;
        min-height: 6em;
    }

    &__image {
        position: absolute;
        display: block;
        
        &-inner {
            position: absolute;
            inset: 0;
            display: flex;
            background: $color1;
            transition: transform 0.3s ease;

            &::before {
                content: "";
                background: #fff;
                width: 100%;
                background-size: 100% auto;
                background-position: 50% 0%;
                background-repeat: no-repeat;
            }
        }

        &--desktop & {
            &-inner {
                border-radius: px-to-em(20, $fs);
                padding: px-to-em(15, $fs) px-to-em(15, $fs) 0;
    
                &::before {
                    border-radius: px-to-em(10, $fs);
    
                    .ui-work-card.daichi & {
                        background-image: url("@/assets/images/works/daichi.jpg");
                    }
    
                    .ui-work-card.split-lineup & {
                        background-image: url("@/assets/images/works/split-lineup.jpg");
                    }
    
                    .ui-work-card.sharry & {
                        background-image: url("@/assets/images/works/sharrymania.jpg");
                    }
    
                    .ui-work-card.pobeda & {
                        background-image: url("@/assets/images/works/pobeda.jpg");
                    }
    
                    .ui-work-card.collect-rpl & {
                        background-image: url("@/assets/images/works/rpl.jpg");
                    }
                }
            }
        }

        &--desktop {
            top: px-to-em(28, $fs);
            left: px-to-em(30, $fs);
            width: px-to-em(350, $fs);
            height: px-to-em(260, $fs);
        }

        &--mobile & {
            &-inner {
                padding: px-to-em(6, $fs);
                box-shadow: 0 px-to-em(20, $fs) px-to-em(30, $fs) px-to-em(2, $fs) rgb(0 0 0 / 50%);
                border-radius: px-to-em(10, $fs);
                
                &::before {
                    border-radius: px-to-em(4, $fs);

                    .ui-work-card.daichi & {
                        background-image: url("@/assets/images/works/daichi-mob.jpg");
                    }
    
                    .ui-work-card.split-lineup & {
                        background-image: url("@/assets/images/works/split-lineup-mob.jpg");
                    }
                    
                    .ui-work-card.pobeda & {
                        background-image: url("@/assets/images/works/pobeda-mob.jpg");
                    }
                    
                    .ui-work-card.sharry & {
                        background-image: url("@/assets/images/works/sharrymania-mob.jpg");
                    }
                    
                    .ui-work-card.collect-rpl & {
                        background-image: url("@/assets/images/works/rpl-mob.jpg");
                    }
                }
            }
        }

        &--mobile {
            top: px-to-em(60, $fs);
            right: px-to-em(41, $fs);
            width: px-to-em(117, $fs);
            height: px-to-em(242, $fs);
        }
    }

    &__tags {
        margin-top: auto;
        display: flex;
        gap: px-to-em(30, $fs);
        font-size: px-to-em(18, $fs);
        font-weight: 200;
    }

    @include hover {
        &:hover & {
            &__image {
                &--desktop {
                    .ui-work-card__image-inner {
                        transform: translateX(-2%);
                    }
                }

                &--mobile {
                    .ui-work-card__image-inner {
                        transform: translateX(8%);
                    }
                }

                // transform: translateY(-5%);
                // svg {
                //     transform: translateX(0);
                //     opacity: 1;
                //     transition: transform 0.3s ease, opacity 0.3s;
                // }
            }
        }
    }

    @media (--viewport-portrait-layout) {
        // width: 100%;
        font-size: min(px-to-rem(14, true));
        margin: 0 auto;
    }
}
</style>