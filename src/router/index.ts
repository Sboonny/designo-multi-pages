import Vue from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import { def } from '@vue/shared'


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