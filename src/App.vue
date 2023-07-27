<template>
  <main
    class="container flex flex-col mx-auto px-3 sm:px-6 lg:px-8"
  >
    <Notebooks />
    <img :src="`/notebook/${store.image}`" />
  </main>
</template>

<script setup>
import { useImageStore } from "@/stores/imageStore";
import Notebooks from "@/components/Notebooks.vue";

const store = useImageStore();
</script>
