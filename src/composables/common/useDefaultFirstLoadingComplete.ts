import { useAppStateStore } from "@/stores/app-state"

export const useDefaultFirstLoadingComplete = () => {
    const appStateStore = useAppStateStore()

    const { setAppLoaded } = appStateStore

    setAppLoaded()
}