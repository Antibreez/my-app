import { createRouter, createMemoryHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes = [
    { path: '/', component: HomeView }
]

export const router = createRouter({
    scrollBehavior() {
        return { top: 0 }
    },
    history: createMemoryHistory(),
    routes
})
