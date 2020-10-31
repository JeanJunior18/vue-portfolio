import { creeateWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue';


const history = creeateWebHistory()
const router = createRouter({
    history,
    router: [
        {
            path: "/",
            component: Home,
        }
    ]
})

export default router;