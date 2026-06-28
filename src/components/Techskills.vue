<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { Icon } from '@iconify/vue';

const des = ref(null)
const dev = ref(null)
const uiux = ref(null)

const tech = ref([
    {
        id: 1, title: "Design", skills: "Graphic Designer", no: "10 project"
    },
    {
        id: 2, title: "Dev", skills: "Frontend Dev", no: "10 project"
    },
    {
        id: 3, title: "UI/UX", skills: "UI/UX Desinger", no: "10 project"
    }
])

const skillsinfo = ref([
    { id: 1, skill: 'HTML', icon: 'vscode-icons:file-type-html' },
    { id: 2, skill: 'CSS', icon: 'vscode-icons:file-type-css' },
    { id: 3, skill: 'JS', icon: 'vscode-icons:file-type-js-official' },
    { id: 4, skill: 'TAILWIND', icon: 'vscode-icons:file-type-tailwind' },
    { id: 5, skill: 'BOOTSTRAP', icon: 'devicon:bootstrap' },
    { id: 6, skill: 'VUE.JS', icon: 'vscode-icons:file-type-vue' },
    { id: 7, skill: 'FIGMA', icon: 'logos:figma' },
])
onMounted(() => {
    gsap.set(des.value, {
        opacity: 0,
        y: 30
    })

    gsap.to(des.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    })
})

</script>


<template>
    <section class="w-full flex items-center justify-center text-start 2xl:p-3 p-3 overflow-hidden pt-5 light:bg-white">
        <div class="mx-auto max-w-7xl w-full p-3 light:bg-white bg-[#0f0f0f]">
            <div class=" text-slate-100 light:text-black">
                <h1 class="text-lg font-black">
                    What id do?
                </h1>
            </div>
            <div
                class="text-slate-100 grid 2xl:grid-cols-3 md:grid-cols-3 grid-cols-1 2xl:gap-4 gap-2.5 mx-auto max-w-7xl w-full 2xl:p-3 pt-4">
                <div v-for="techs in tech" :key="tech.id">
                    <div ref="des" class=" light:border-gray-200/50 p-3 bg-[#0f0f0f] light:bg-[#fefefe]">
                        <h1 class="text-sm text-gray-300/90 light:text-black">{{ techs.title }}</h1>
                        <p class="font-bold light:text-black">{{ techs.skills }}</p>
                        <span class="text-sm text-gray-300/90 light:text-black">{{ techs.no }}</span>
                    </div>
                </div>
            </div>
            <div class="text-slate-100 light:text-black font-black pt-3 flex items-center justify-between">
                <h1 class="text-lg">Tech Stack</h1>
                <router-link to="/Techmore" class="flex items-center justify-center gap-3 text-sm font-normal">View more
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg></router-link>
            </div>
            <div class="grid 2xl:grid-cols-5 grid-cols-3 gap-2.5 w-fit text-slate-100 pt-4">
                <div ref="des" v-for="skills in skillsinfo" :key="skillsinfo.id">
                    <div
                        class="flex items-center justify-center gap-4 border border-gray-200/5 light:border-gray-200/50 p-1 text-[13px] text-center text-white light:text-black">
                        <Icon :icon="skills.icon" class="text-[16px]" />
                        <h1>{{ skills.skill }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>