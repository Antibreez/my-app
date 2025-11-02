import { getProcess } from "./process"

export const isTouch = () => {
    if (!getProcess().client) return

    return window.matchMedia && window.matchMedia("(hover: none), (pointer: coarse)").matches
}