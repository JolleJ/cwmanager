import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from "../components/LoginPage.vue"
import AddUserPage from "../components/AddUserPage.vue"
import MainToolbar from "../components/MainToolbar.vue"
import LandingPage from "../components/LandingPage.vue"
import Home from "../components/Home.vue"


Vue.use(VueRouter)

const routes =[
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/Home",
        name: "home",
        component: Home
    },
    {
        path: "/AddUserPage",
        name: "addUserPage",
        component: AddUserPage,
    }

]

export default new VueRouter({
    routes,
    base: "/",
})