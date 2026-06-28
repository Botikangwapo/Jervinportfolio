<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(() => route.path, () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant' 
  });
});
</script>

<template>
  <div class="w-full light:bg-white">
    <router-view />
  </div>
</template>