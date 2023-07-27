<template>
  <main
    class="container flex flex-col mx-auto px-3 sm:px-6 lg:px-8"
  >
    <Notebooks />
    <PreviewModal />
  </main>
</template>

<script setup>
import Notebooks from "@/components/Notebooks.vue";
import PreviewModal from "@/components/PreviewModal.vue";
</script>
