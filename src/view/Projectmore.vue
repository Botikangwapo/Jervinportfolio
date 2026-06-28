<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const proj = ref(null)

const projects = ref([
    {
        id: 1,
        title: "Web App",
        sub: "Dashboard Analytics",
        par: "Real-time data visualization platform with interactive charts and custom reporting tools.",
        year: "2025",
        view: "View project",
        link: "https://beginhub.vercel.app"
    },
    {
        id: 2,
        title: "E-Commerce",
        sub: "Shopping Platform",
        par: "Full-stack e-commerce solution with product catalog, shopping cart, and payment integration.",
        year: "2024",
        view: "View project",
        link: "#"
    }
    // {
    //     id: 3,
    //     title: "Social Media",
    //     sub: "Community Network",
    //     par: "Social platform featuring user profiles, messaging, feeds, and real-time notifications.",
    //     year: "2024",
    //     view: "View project",
    //     link: "#"
    // },
    // {
    //     id: 4,
    //     title: "Task Manager",
    //     sub: "Productivity Tool",
    //     par: "Collaborative task management application with team features and deadline tracking.",
    //     year: "2024",
    //     view: "View project",
    //     link: "#"
    // },
    // {
    //     id: 5,
    //     title: "Weather App",
    //     sub: "Climate Forecast",
    //     par: "Weather forecasting application with real-time data, maps, and weather alerts.",
    //     year: "2023",
    //     view: "View project",
    //     link: "#"
    // },
])

onMounted(() => {
    gsap.set(proj.value, {
        opacity: 0,
        y: 30
    })

    gsap.to(proj.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    })
})
</script>

<template>
    <section ref="proj"
        class="flex items-start justify-center w-full 2xl:pt-6 pt-1 pb-10 overflow-hidden h-screen bg-[#0B0B0B] light:bg-white transition-colors duration-500">
        <div class="2xl:p-3 p-5 w-full flex items-center justify-center flex-col">
            <div class="mx-auto max-w-7xl w-full pb-8">
                <router-link to="/"
                    class="flex items-center justify-start gap-3 pb-10 text-white light:text-gray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                    Back to Home
                </router-link>
                <h1 class="text-slate-100 light:text-gray-900 font-black text-4xl pb-2 transition-colors">All Projects
                </h1>
                <p class="text-gray-300/90 light:text-black text-sm transition-colors">
                    Explore my complete portfolio of web applications and digital solutions
                </p>
            </div>

            <div class="mx-auto max-w-7xl w-full grid 2xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
                <div ref="proj" v-for="pro in projects" :key="pro.id">
                    <div
                        class="p-3 grid grid-cols-1 gap-3 text-slate-100 light:text-gray-800 bg-[#0f0f0f] light:bg-[#fefefe] light:border-gray-200/50 hover:border-gray-200/20 light:hover:border-gray-400 transition-colors duration-500 h-full">
                        <h1 class="text-sm text-gray-300/90 light:text-black">{{ pro.title }}</h1>
                        <h2 class="font-bold text-md">{{ pro.sub }}</h2>
                        <p class="text-sm text-gray-300 light:text-black">{{ pro.par }}</p>

                        <div
                            class="flex items-center justify-between pt-4 border-t border-gray-200/5 light:border-gray-200/50 transition-colors">
                            <p class="text-xs text-gray-300/90 light:text-black">{{ pro.year }}</p>
                            <a :href="pro.link"
                                class="text-xs hover:text-slate-100 light:hover:text-black transition-colors flex items-center gap-1">
                                {{ pro.view }}
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>