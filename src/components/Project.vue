<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import img1 from '/src/assets/Screenshot 2026-06-10 220301.png'
import img2 from '/src/assets/Screenshot 2026-05-01 201959.png'
import img3 from '/src/assets/Screenshot 2026-05-18 191618.png'



const proj = ref(null)

const project = ref([
    {
        id: 1,
        title: "Web App",
        img: img1,
        sub: "Beginhub",
        par: "Online certification platform for beginners students and to showcase your knwolegde and soft skills.",
        year: "2025",
        view: "View project",
        link: "https://beginhub.vercel.app"
    },
    {
        id: 2,
        title: "Web App",
        img: img2,
        sub: "Sarah Keyk",
        par: "A digital marketing showcase designed to boost brand visibility, featuring high-end visuals and optimized for seamless customer inquiries.",
        year: "2025",
        view: "View project",
        link: "https://botikangwapo.github.io/SarahKeyk"
    },
    {
        id: 3,
        title: "Web App",
        img: img3,
        sub: "Halamanerong Islander",
        par: "An immersive digital platform designed to highlight artisanal plant collections, optimized for brand growth and community engagement.",
        year: "2025",
        view: "View project",
        link: "#"
    }
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
    <section class="flex items-center justify-center w-full transition-colors duration-500 light:bg-white">
        <div class="2xl:p-3 p-5 w-full flex items-center justify-center flex-col">
            <div
                class="mx-auto max-w-7xl w-full text-slate-100 light:text-gray-900 font-black p-3 flex items-center justify-between transition-colors duration-500">
                <h1 class="text-lg">Project</h1>
                <router-link to="/Projectmore"
                    class="flex items-center justify-center gap-3 text-sm font-normal text-slate-100 light:text-gray-700">
                    View more
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </router-link>
            </div>

            <div
                class="mx-auto max-w-7xl w-full grid 2xl:grid-cols-3 md:grid-cols-3 grid-cols-1 pt-2 2xl:gap-4 gap-2.5">
                <div ref="proj" v-for="pro in project" :key="pro.id">
                    <div
                        class="p-3 grid grid-cols-1 gap-3 text-slate-100 light:text-gray-800 bg-[#0f0f0f] light:bg-[#fefefe] light:border-gray-200/50 transition-colors duration-500">
                        <h1 class="text-sm text-gray-300/90 light:text-black">{{ pro.title }}</h1>
                        <!-- <img :src="pro.img" alt="" class="h-40 w-full object-cover grayscale-100 hover:grayscale-0"> -->
                        <h2 class="font-bold">{{ pro.sub }}</h2>
                        <p cla s="text-sm text-gray-300 light:text-black">{{ pro.par }}</p>

                        <div
                            class="flex items-center justify-between pt-4 border-t border-gray-200/5 light:border-gray-200/50 transition-colors duration-500">
                            <p class="text-xs text-gray-300/90 light:text-black">{{ pro.year }}</p>
                            <a :href="pro.link" target="_blank"
                                class="text-xs hover:text-slate-100 light:hover:text-black transition-colors flex items-center gap-1">{{
                                    pro.view }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>