<template>
    <div class="fixed bottom-6 2xl:right-6 right-0 z-50 flex flex-col items-end p-3">
        <div v-if="isOpen"
            class="w-95 2xl:w-100 h-[500px] shadow-2xl flex flex-col mb-4 overflow-hidden border border-gray-200/10">

            <!-- Header -->
            <div class="bg-black text-white p-4 flex justify-between items-center">
                <div class="flex items-center justify-center gap-4">
                    <div class="h-2 bg-green-500 flex items-center justify-center w-2">
                        <div class="h-2 w-4 bg-green-500 animate-ping">

                        </div>
                    </div>
                    <span class="font-bold tracking-wide">MJ CHATBOT</span>
                </div>
                <button @click="isOpen = false" class="hover:text-gray-400">✕</button>
            </div>

            <!-- Messages -->
            <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 flex flex-col">
                <div v-for="(msg, index) in messages" :key="index" class="flex items-end gap-2 mb-3">

                    <img v-if="msg.role === 'ai'" src="/src/assets/jervinpogi.png" alt="Avatar"
                        class="w-8 h-8 rounded-full object-cover border border-gray-200" />

                    <div
                        :class="['p-3 rounded-2xl max-w-[75%] text-sm shadow-sm',
                            msg.role === 'user' ? 'bg-black text-white self-end rounded-br-none ml-auto' : 'bg-white border border-gray-200 text-gray-800 self-start rounded-bl-none']">
                        {{ msg.content }}
                    </div>
                </div>
                <!-- Typing Indicator -->
                <div v-if="isTyping" class="text-xs text-gray-400 italic self-start animate-pulse">
                    Jervin is typing...
                </div>
            </div>

            <!-- Input -->
            <div class="p-4 border-t border-gray-100 flex gap-2 bg-white ">
                <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Magtanong..."
                    class="flex-1 border border-gray-300 light:text-black text-black px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                <button @click="sendMessage" :disabled="isTyping"
                    class="bg-black text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 disabled:opacity-50">
                    Send
                </button>
            </div>
        </div>

        <button @click="isOpen = !isOpen"
            class="w-14 h-14 bg-black text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
            💬
        </button>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { supabase } from '../supabase/supabase.js';
import { toggleDark } from '../composable/theme.js';

const isOpen = ref(false);
const userInput = ref('');
const isTyping = ref(false);
const messages = ref([{ role: 'ai', content: 'HI, its me jervin kamusta ka ano maitutulog ko sayong kupal ka?' }]);

const sendMessage = async () => {
    if (!userInput.value.trim() || isTyping.value) return;

    const query = userInput.value.toLowerCase();
    messages.value.push({ role: 'user', content: userInput.value });
    userInput.value = '';
    isTyping.value = true;

    await new Promise(resolve => setTimeout(resolve, 800));

    let response = '';
    let isSenti = false;

    // 1. Check Theme Commands
    if (query.includes('buksan ang dark mode') || query.includes('dark mode')) {
        response = 'Sige, binubuksan ko na ang dark mode para sayo!';
        toggleDark(true);
    }
    else if (query.includes('buksan ang light mode') || query.includes('light mode')) {
        response = 'Okay, balik tayo sa maliwanag na light mode.';
        toggleDark(false);
    }
    // 2. Database & Logic
    else if (query.includes('hi')) {
        response = 'hello! Ako ay chatbot ni Jervin, assistant for answering your question.';
    }

    else if (query.includes('hello')) {
        response = 'hi! chatbot ako ni jervin, assistant for answering your question.';
    }

    else {
        const { data } = await supabase.from('knowledgebase').select('*');
        const found = data?.find(item => item.keywords.some(k => query.includes(k)));
        response = found ? found.answer : 'Pasensya na, wala akong sapat na impormasyon tungkol dyan.';

        if (query.includes('hi') || query.includes('kamusta')) {
            isSenti = true;
        }
    }

    // 3. I-push ang response (DITO KA NAGKAMALI DATI, KULANG NG PUSH SA THEME MODE)
    isTyping.value = false;
    messages.value.push({ role: 'ai', content: response });

    // 4. Automatic Follow-up
    if (isSenti) {
        setTimeout(async () => {
            isTyping.value = true;
            const lyrics = [
                { text: 'Pero mahal mopa?', delay: 10000 },
                { text: 'bat ayaw mo umamin?', delay: 1000 },
                { text: 'Lagi na lang ganito', delay: 8000 },
                { text: 'Isipan ay gulong-gulo', delay: 5000 },
                { text: 'Lagi na lang nabibigo', delay: 6000 },
                { text: 'Ngunit ikaw pa rin, sigaw ng puso', delay: 7000 },
                { text: 'Eme nag relapse bigla eh no HAAHHAHAH', delay: 8000 }
            ];

            for (const item of lyrics) {
                await new Promise(resolve => setTimeout(resolve, item.delay));
                messages.value.push({ role: 'ai', content: item.text });
                await nextTick();
                const container = document.querySelector('.overflow-y-auto');
                if (container) container.scrollTop = container.scrollHeight;
            }
            isTyping.value = false;
        }, 1000);
    }
};
</script>