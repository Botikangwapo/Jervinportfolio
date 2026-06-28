<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { Icon } from '@iconify/vue';

const headlineRef = ref(null)
const paragraphRef = ref(null)
const buttonsRef = ref(null)
const socialRef = ref(null)
const imges = ref(null)

const info = ref([
    {
        id: 1,
        headline: "HI, I'M MARK JERVIN ANAIN VILLONES",
        paragraph: "Front-end developer crafting seamless, modern, and animated web experiences. Always learning, always building. Let’s collaborate!",
        DLCV: "DOWNLOAD CV",
        CONNECT: "CONNECT NOW"
    }
])

const socialLinks = ref([
    {
        id: 1,
        label: 'Binangonan Rizal',
        icon: 'lucide:map-pin',
        type: 'text'
    },
    {
        id: 2,
        label: 'email/gmail.com',
        icon: 'bi:envelope',
        link: 'mailto:jervinvillones6@gmail.com',
        type: 'link'
    },
    {
        id: 3,
        label: 'bortikan/github.com',
        icon: 'bi:github',
        link: 'https://github.com/Botikangwapo',
        type: 'link'
    },
    {
        id: 4,
        label: 'Jervin Anain Villones',
        icon: 'bi:facebook',
        link: 'https://www.facebook.com/villones.jervin',
        type: 'link'
    },
])

onMounted(() => {
    gsap.set([headlineRef.value, paragraphRef.value, buttonsRef.value, socialRef.value], {
        opacity: 0,
        y: 30
    })

    gsap.to([headlineRef.value, paragraphRef.value, buttonsRef.value, socialRef.value], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    })

    gsap.set(imges.value, {
        opacity: 0,
        x: -30
    })

    gsap.to(imges.value, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    })
})

</script>

<template>
    <section class="flex items-center justify-center w-full 2xl:pt-14 pt-8 light:bg-white">
        <div
            class="mx-auto max-w-7xl w-full h-auto overflow-hidden 2xl:p-4 p-6 gap-6 grid 2xl:grid-cols-2 md:grid-cols-2 grid-cols-1 item-center justify-between">
            <div ref="imges" class="2xl:flex md:flex hidden">
                <img src="/src/assets/jervinpogi.png" alt=""
                    class="w-full 2xl:h-90 md:h-70 block object-cover rounded-2xl grayscale-100">
            </div>
            <div v-for="infos in info" :key="info.id" class="flex flex-col gap-3.5">
                <h1 ref="headlineRef"
                    class="font-black 2xl:text-5xl text-3xl w-100 font-Russo light:text-black text-white">{{
                        infos.headline }}
                </h1>
                <p ref="paragraphRef"
                    class="font-sans tracking-tight text-md leading-7 light:text-black text-gray-300/90">{{
                        infos.paragraph }}
                </p>
                <div ref="buttonsRef" class="grid sm:grid-cols-2 items-start justify-start gap-4 w-fit">
                    <button
                        class="p-3 2xl:w-50 w-70 bg-slate-50 light:bg-black light:text-white text-black font-medium tracking-widest flex items-center justify-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-download" viewBox="0 0 16 16">
                            <path
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path
                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                        </svg> <a href="/src/CurriculumVitae/MarkJervinVilloneResume (2).pdf"
                            download="MarkJervinVilloneResume (2).pdf">{{
                                infos.DLCV
                            }}</a>
                    </button>
                    <button
                        class="p-3 2xl:w-50 w-60 light:bg-white light:text-black bg-[#171717] text-white font-medium border border-gray-200/10 light:border-gray-200/90 tracking-widest flex items-center justify-center gap-4">{{
                            infos.CONNECT
                        }}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg></button>
                </div>
                <div ref="socialRef"
                    class="grid grid-cols-2 w-fit gap-3 pt-2 items-start light:text-black text-gray-300/90">
                    <div v-for="social in socialLinks" :key="social.id" class="flex items-center justify-start gap-3">
                        <Icon :icon="social.icon" width="15" height="15" />

                        <a v-if="social.type === 'link'" :href="social.link" target="_blank" class="hover:underline">
                            <h1 class="2xl:text-[13px] text-[12px] light:text-black text-gray-200">
                                {{ social.label }}
                            </h1>
                        </a>

                        <h1 v-else class="2xl:text-[13px] text-[12px] light:text-black text-gray-200">
                            {{ social.label }}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
