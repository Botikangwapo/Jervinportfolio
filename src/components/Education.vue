<script setup>
import { ref } from 'vue';
import img1 from '/src/assets/307123781_466656242172756_4601884538598477164_n.jpg'
import img2 from '/src/assets/438305239_920154059908628_3853073436611594463_n.jpg'
import img3 from '/src/assets/515436782_1146882127460603_1661407609528652170_n.jpg'

const educ = ref([
    { id: 1, img: img1, school: 'University of Rizal system', loc: 'Calumpang Binangonan', year: '2024-2026' },
    { id: 2, img: img2, school: 'University of Rizal system', loc: 'Janosa Binangonan Rizal', year: '2024-2026' },
    { id: 3, img: img3, school: 'University of Rizal system', loc: 'Kaytome Binangonan Rizal', year: '2024-2026' }
])
</script>

<template>
    <section class="flex items-center justify-center">
        <div class="mx-auto max-w-7xl w-full p-4">
            <div class="font-black pb-2 p-2 text-lg">
                <h1>Edication</h1>
            </div>
            <div class="mx-auto max-w-7xl w-full">
                <div class="grid 2xl:grid-cols-3 grid-cols-1 gap-3">
                    <div v-for="education in educ" :key="educ.id" class="flex p-3 gap-3 bg-[#0f0f0f] light:bg-white">
                        <img class="w-8 h-8 rounded-4xl" :src="education.img" alt="">
                        <div class="text-sm tracking-tight">
                            <h1>{{ education.school }}</h1>
                            <p class="font-bold">{{ education.loc }}</p>
                            <span>{{ education.year }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>