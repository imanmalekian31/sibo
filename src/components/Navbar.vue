<template>
  <div class="fixed bg-gold shadow-md w-full right-0 top-0 z-50">
    <div class="absolute left-3 top-3 cursor-pointer" @click="ordersStore.openModal">
      <span
        v-if="ordersStore.orders.length"
        class="absolute -top-2 -right-1 bg-red-500 text-white p-1 rounded-full text-xs w-4 h-4 flex items-center justify-center"
      >
        {{ ordersStore.orders.length }}
      </span>
      <!-- <img src="/shopping-cart.svg" class="h-6" /> -->
    </div>
    <div class="flex items-center justify-center pt-2">
      <img class="h-8" src="/sibo-logo.png" />
    </div>
    <swiper
      class="h-full my-2"
      :slides-per-view="3"
      :space-between="50"
      centered-slides
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="flex flex-col items-center justify-center bg-lightGold rounded-md h-5/6 py-2"
        v-for="(category, index) in notebookList"
        :key="category.id"
        @click="updateCategory(category, index)"
      >
        <img src="/notebook.svg" width="36" height="36" />
        <span class="text-base mt-2">{{ category.title }}</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import notebookList from "./notebookList.json";
import { useOrdersStore } from "@/stores/ordersStore";

const ordersStore = useOrdersStore();

const swiperRef = ref();

const currIndex = ref(0);
function onSwiper(e) {
  currIndex.value = e.activeIndex;
}

function onSlideChange(e) {
  currIndex.value = e.activeIndex;
}

onMounted(() => {
  swiperRef.value = document.querySelector(".swiper").swiper;
});

function updateCategory(category, index) {
  if (index > currIndex.value) {
    swiperRef.value.slideNext();
  } else if (index < currIndex.value) {
    swiperRef.value.slidePrev();
  }

  document
    .getElementById(category.id)
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}
</script>
