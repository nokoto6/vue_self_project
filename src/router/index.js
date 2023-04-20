import { createRouter, createWebHistory } from 'vue-router'

import News from '../pages/News'
import About from '../pages/About'
import Donate from '../pages/Donate'
import Client from '../pages/Client'

import Layout from '../pages/Layout'

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/news',
                name: 'news',
                component: News
            },
            {
                path: '/about',
                name: 'about',
                component: About
            },
            {
                path: '/donate',
                name: 'donate',
                component: Donate
            },
            {
                path: '/client',
                name: 'client',
                component: Client
            },
            {
                path: '/discord',
                name: 'discord',
                beforeEnter: (to, from, next) => {
                    window.open("https://discord.gg/89eCnByNjv", '_blank');
                    //next({ name: from.name })
                }
            },
            {
                path: '/',
                redirect: 'news'
            }
        ]
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
