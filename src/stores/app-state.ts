import { defineStore } from "pinia"
import { ref } from "vue"

export const useAppStateStore = defineStore('app-state-store', () => {
    const isLoading = ref<boolean>(true)

    const setAppLoaded = () => {
        isLoading.value = false
    }

    return {
        isLoading,
        setAppLoaded,
    }
})