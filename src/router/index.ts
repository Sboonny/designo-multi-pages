import VueRouter from 'vue-router'
import Home from '../views/HomeContent.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        componenent: Home
    },
    {
        path: "/about",
        name: "about",
        componenent: About
    },
    {
        path: "/contact",
        name: "contact",
        componenent: Contact
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router