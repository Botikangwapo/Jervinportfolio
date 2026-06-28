<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { Icon } from '@iconify/vue';

const categoriesRef = ref(null)
const skillsRefs = ref([])
const section = ref(null)


const frontendSkills = ref([
    { id: 1, skill: 'HTML5', icon: 'vscode-icons:file-type-html' },
    { id: 2, skill: 'CSS3', icon: 'vscode-icons:file-type-css' },
    { id: 3, skill: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
    { id: 4, skill: 'Vue.js', icon: 'vscode-icons:file-type-vue' },
    { id: 5, skill: 'Tailwind', icon: 'vscode-icons:file-type-tailwind' },
    { id: 6, skill: 'Bootstrap', icon: 'devicon:bootstrap' },
])

const backendSkills = ref([
    { id: 1, skill: 'Node.js', icon: 'vscode-icons:file-type-node' },
    { id: 2, skill: 'Express.js', icon: 'simple-icons:express' },
    { id: 7, skill: 'Authentication', icon: 'material-symbols:security' },
])

const databaseSkills = ref([
    { id: 1, skill: 'Supabase', icon: 'simple-icons:supabase' },
    { id: 2, skill: 'MySQL', icon: 'vscode-icons:file-type-mysql' },
    { id: 3, skill: 'PostgreSQL', icon: 'vscode-icons:file-type-postgresql' },
    { id: 5, skill: 'SQL', icon: 'vscode-icons:file-type-sql' },
])

onMounted(() => {
    if (categoriesRef.value) {
        gsap.set(categoriesRef.value, {
            opacity: 0,
            y: 30
        })

        gsap.to(categoriesRef.value, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        })
    }

    skillsRefs.value.forEach((el) => {
        gsap.set(el, {
            opacity: 0,
            y: 20
        })

        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            stagger: 0.05,
            ease: 'power3.out'
        })
    })

})

onMounted(() => {
    gsap.set(section.value, {
        opacity: 0,
        y: 30
    })

    gsap.to(section.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    })

})

</script>

<template>
    <section ref="section"
        class="w-full flex items-start justify-center 2xl:pt-14 pt-1 pb-5 h-screen transition-colors duration-500">
        <div
            class="mx-auto max-w-7xl w-full p-3 bg-[#0f0f0f] light:bg-gray-50 border border-gray-200/5 light:border-gray-300 2xl:p-6 p-6 transition-colors duration-500">

            <div class="text-slate-100 light:text-black pb-6 transition-colors">
                <router-link to="/" class="flex items-center justify-start gap-3 pb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                    Back to Home
                </router-link>
                <h1 class="font-black text-4xl">Tech Skills Breakdown</h1>
                <p class="text-gray-300/90 light:text-black pt-2 transition-colors">Comprehensive overview of my
                    technical expertise</p>
            </div>

            <div class="pb-8">
                <h3 class="text-slate-100 light:text-gray-900 font-black text-lg pb-4 transition-colors">Frontend Stack
                </h3>
                <div class="grid 2xl:grid-cols-5 grid-cols-3 gap-2.5 w-fit">
                    <div v-for="skill in frontendSkills" :key="skill.id" :ref="el => skillsRefs.push(el)">
                        <div
                            class="flex items-center justify-center gap-4 border border-gray-200/5 light:border-gray-200/50 p-2 text-center hover:bg-gray-200/5 light:hover:bg-gray-200 transition-colors">
                            <Icon :icon="skill.icon" class="text-[16px]" />
                            <p class="text-slate-100 light:text-black text-sm font-medium transition-colors">{{
                                skill.skill }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-8">
                <h3 class="text-slate-100 light:text-gray-900 font-black text-lg pb-4 transition-colors">Backend Stack
                </h3>
                <div class="grid 2xl:grid-cols-5 grid-cols-2 gap-2.5 w-fit">
                    <div v-for="skill in backendSkills" :key="skill.id" :ref="el => skillsRefs.push(el)">
                        <div
                            class="flex items-center justify-center gap-4 border border-gray-200/5 light:border-gray-200/50 p-2 text-center hover:bg-gray-200/5 light:hover:bg-gray-200 transition-colors">
                            <Icon :icon="skill.icon" class="text-[16px]" />
                            <p class="text-slate-100 light:text-black text-sm font-medium transition-colors">{{
                                skill.skill }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-slate-100 light:text-gray-900 font-black text-lg pb-4 transition-colors">Database Stack
                </h3>
                <div class="grid 2xl:grid-cols-5 grid-cols-3 gap-2.5 w-fit">
                    <div v-for="skill in databaseSkills" :key="skill.id" :ref="el => skillsRefs.push(el)">
                        <div
                            class="flex items-center justify-center gap-4 border border-gray-200/5 light:border-gray-200/50 p-2 text-center hover:bg-gray-200/5 light:hover:bg-gray-200 transition-colors">
                            <Icon :icon="skill.icon" class="text-[16px]" />
                            <p class="text-slate-100 light:text-black text-sm font-medium transition-colors">{{
                                skill.skill }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>