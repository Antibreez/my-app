// @ts-nocheck
import { Languages } from '@/assets/js/constants/languages'
import ru from '@/assets/data/localization/ru'
import en from '@/assets/data/localization/en'

const LANGAUGES = [...Object.values(Languages)]
const DEFAULT_LANGUAGE = 'en'

const detectLanguage = () => {
  const lng = window.navigator.userLanguage || window.navigator.language

  document.documentElement.setAttribute('lang', lng)

  return LANGAUGES.find((l) => lng.toLowerCase().includes(l)) || DEFAULT_LANGUAGE
}

export const i18nConfig = {
    legacy: false,
    locale: localStorage.getItem("ak-portfolio-lang") ||
    detectLanguage() || DEFAULT_LANGUAGE,
    locales: LANGAUGES,
    messages: {
        ru,
        en
    }
}