import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home.vue'

let history = createWebHistory()
let routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

export default createRouter({ history, routes })