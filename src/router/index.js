import { createRouter, createWebHistory } from "vue-router";
import homepage from "../view/homepage.vue";
import Techskillsmore from "../view/Techskillsmore.vue";
import Projectmore from "../view/Projectmore.vue";

const routes = [
    {
        path: "/",
        name: "homepage",
        component: homepage
    },
    {
        path: "/Techmore",
        name: "Techmore",
        component: Techskillsmore,
    },
    {
        path: "/Projectmore",
        name: "Projectmore",
        component: Projectmore,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
});


export default router;