import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const State = () => import("../views/State.vue")
const Getters = () => import("../views/Getters.vue")
const Mutations = () => import("../views/Mutations.vue")
const Actions = () => import("../views/Actions.vue")
const routes = [
    {
        path: '/',
        redirect: 'State'
    },
    {
        path: '/State',
        component: State
    },
    {
        path: '/Getters',
        component: Getters
    },
    {
        path: '/Mutations',
        component: Mutations
    },
    {
        path: '/Actions',
        component: Actions
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
