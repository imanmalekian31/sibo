<template>
  <main
    class="container flex flex-col mx-auto px-3 sm:px-6 lg:px-8"
  >
    <Navbar />
    <Notebooks />

    <!-- modals -->
    <PreviewModal />
    <OrdersModal />
  </main>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Notebooks from "@/components/Notebooks.vue";
import PreviewModal from "@/components/PreviewModal.vue";
import OrdersModal from "@/components/OrdersModal.vue";
</script>
