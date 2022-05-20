import VueRouter from 'vue-router'
import Home from '../views/HomeContent.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import { Component } from 'vue'

interface routeType {
path: string,
name: string,
componenent: Component
}

const routes: routeType = [
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