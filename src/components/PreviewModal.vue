<template>
  <TransitionRoot as="template" :show="store.openModal">
    <Dialog as="div" class="relative z-10" @close="store.closeModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="h-full sm:min-h-full flex justify-center items-center p-0 text-center"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-none sm:rounded-lg bg-white px-2 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
            >
              <div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-900"
                  >
                    {{ store.imageTitle }}
                  </DialogTitle>
                  <div class="mt-2">
                    <swiper
                      :space-between="50"
                      navigation
                      zoom
                      loop
                      :modules="modules"
                    >
                      <swiper-slide v-for="image in store.image" :key="image">
                        <img :src="`/notebook/high-quality/${image}.png`" />
                      </swiper-slide>
                    </swiper>
                  </div>
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-900 mt-2"
                  >
                    کد:
                    {{ store.notebookId }}
                  </DialogTitle>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="store.closeModal"
                >
                  بازگشت
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Zoom } from "swiper/modules";
import { useImageStore } from "@/stores/imageStore";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";

const store = useImageStore();

const modules = [Navigation, Zoom];
</script>
