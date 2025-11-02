<template lang="pug">
section.contacts(id="contacts")
    .contacts__container.container
        .contacts__decor(data-speed="0.8")
        ul.contacts__list
            li.contacts__item.contacts__item--github
                a.contacts__link.contacts__link--github(
                    href="https://github.com/Antibreez"
                    target="_blank"
                )
                    .contacts__link-icons
                        span
                            github-icon
                        span
                            github-icon
                    span(v-html="'Antibreez'")
            li.contacts__item.contacts__item--tg
                a.contacts__link.contacts__link--tg(
                    href="tg://resolve?domain=Antibreez"
                    target="_blank"
                )
                    .contacts__link-icons
                        tg-icon
                        tg-icon
                    span(v-html="'@Antibreez'")
            li.contacts__item.contacts__item--mail
                a.contacts__link.contacts__link--mail(
                    href="mailto:kiyananton@gmail.com"
                    target="_blank"
                )
                    .contacts__link-icons
                        mail-icon
                        mail-icon
                    span(v-html="'kiyananton@gmail.com'")
</template>

<script setup lang="ts">
import mailIcon from '@/assets/images/icons/mail.svg'
import tgIcon from '@/assets/images/icons/tg.svg'
import githubIcon from '@/assets/images/icons/github.svg'
import texture from '@/assets/images/corner-texture.svg'
</script>

<style lang="scss">
.contacts {
    position: relative;
    padding-top: px-to-vh(150);
    padding-bottom: px-to-vh(250);

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60%;
        background: linear-gradient(0deg, #161615, $color1);
    }

    &__container {
        display: flex;
        justify-content: center;
    }

    &__list {
        position: relative;
        width: max-content;
        z-index: 2;
    }

    &__item {
        transition: background-color 0.5s ease;
        overflow: hidden;

        &--github,
        &--tg {
            svg {
                path {
                    fill: $color3;
                }
            }
        }

        &--mail {
            svg {
                path {
                    stroke: $color3;
                }
            }
        }

        &:not(:last-child) {
            margin-bottom: px-to-rem(50);
        }
    }

    &__link {
        color: $color3;
        font-size: px-to-rem(30);
        display: flex;
        gap: px-to-rem(30);
        align-items: center;
        text-decoration: none;
        padding: px-to-rem(20) px-to-rem(50);
        background: rgb(204 197 185 / 5%);
        backdrop-filter: blur(px-to-rem(8));
        transition: background-color 0.3s ease;

        &-icons {
            position: relative;
            width: px-to-rem(100);
            height: px-to-rem(100);
            border-radius: 50%;
            
            span {
                position: absolute;
                inset: 0;
            }
        }

        svg {
            position: absolute;
            width: 100%;
        }

        &--github & {
            &-icons {
                background: $color3;
                overflow: hidden;

                span {
                    background: radial-gradient(circle at 50% 50%,$color1 68%, transparent 68%);
                    transform-origin: 50% 120%;
                    border-radius: 50%;
    
                    &:nth-child(2) {
                        transform: rotate(-90deg);
                    }
                }
            } 
        }

        &--tg & {
            &-icons {
                svg {
                    &:first-child {
                        transform: translate(-130%, 130%);
                        opacity: 0;
                    }
                }
            }
        }

        &--mail & {
            &-icons {
                svg {
                    &:first-child {
                        transform: translate(-110%, 0%);
                        opacity: 0;
                    }
                }
            }
        }
        
        @include hover {
            &:hover {
                background: rgb(204 197 185 / 10%);
            }

            &--github {
                &:hover {
                    .contacts__link-icons {
                        span {
                            &:first-child {
                                opacity: 0;
                            }

                            &:nth-child(2) {
                                transform: rotate(0deg);
                                transition: transform 0.7s cubic-bezier(.45,1.58,.35,1);
                            }
                        }
                    }
                }
            }

            &--tg {
                &:hover {
                    .contacts__link-icons {
                        svg {
                            &:first-child {
                                opacity: 1;
                                transform: none;
                                transition: transform 0.5s cubic-bezier(.22,.53,.36,1);
                            }

                            &:nth-child(2) {
                                opacity: 0;
                            }
                        }
                    }
                }
            }

            &--mail {
                &:hover {
                    .contacts__link-icons {
                        svg {
                            &:first-child {
                                opacity: 1;
                                transform: none;
                                transition: transform 0.6s cubic-bezier(.45,1.58,.35,1);
                            }

                            &:nth-child(2) {
                                opacity: 0;
                            }
                        }
                    }
                }
            }
        }
    }

    &__decor {
        position: absolute;
        top: 33%;
        left: 50%;
        display: flex;
        transform: translate(-50%, -50%);
        color: $color2;
        font-weight: 500;

        &::before {
            content: "Contacts";
            font-size: px-to-rem(200);
            text-transform: uppercase;
        }
    }

    @media (--viewport-portrait-layout) {
        padding-top: px-to-rem(100, true);
        padding-bottom: px-to-rem(100, true);

        &__decor {
            top: 50%;
            
            &::before {
                font-size: px-to-rem(50, true);
            }
        }
    }
}
</style>