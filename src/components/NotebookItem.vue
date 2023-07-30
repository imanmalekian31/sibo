<template>
  <div class="menu-item">
    <div>
      <div
        class="menu-item-image-container z-10"
        @click="previewStore.openPreview(image, title, id)"
      >
        <div
          v-if="outOfStock"
          class="absolute text-white bg-red-500 rounded-md px-2 text-sm text-center w-full"
        >
          ناموجود
        </div>
        <img
          :src="`/notebook/thumbnail/${image[0]}.webp`"
          :class="['menu-item-image', outOfStock && 'opacity-40']"
        />
      </div>
      <div :class="['menu-item-details', outOfStock && 'opacity-40']">
        <h5 class="menu-item-title">{{ title }}</h5>
        <div class="menu-item-content-container">
          <div class="menu-item-content">
            <table>
              <tbody class="space-y-1">
                <tr>
                  <td>کد:</td>
                  <td class="pr-2 font-sans">{{ id }}</td>
                </tr>
                <tr>
                  <td>در هر کارتون:</td>
                  <td class="pr-2">{{ perCarton.toLocaleString() }}</td>
                </tr>
                <tr>
                  <td>قیمت هر جلد:</td>
                  <td class="pr-2">{{ price.toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h5
          class="price float-right mb-0 ml-1"
          style="margin-top: 6px; right: 139px"
        >
          <span class="float-right" style="font-size: 20px">
            {{ (price * perCarton).toLocaleString() }}
            <small
              class="text-center float-left mr-2"
              style="font-size: 8px; margin-top: 2px"
            >
              مـیلیـون
              <br />
              تـــومان
            </small>
          </span>
        </h5>
      </div>
    </div>
    <div
      v-if="!outOfStock"
      class="absolute left-0 bottom-0 text-black flex flex-col items-center space-y-2"
    >
      <template v-if="ordersStore.countOrder(id)">
        <span
          class="rounded-full p-1 bg-gold flex items-center justify-center w-8 h-8 text-xl cursor-pointer"
          @click="ordersStore.removeOrder(id)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </span>
        <span
          class="rounded-full p-1 bg-gold flex items-center justify-center w-6 h-6 text-xs"
        >
          {{ ordersStore.countOrder(id) }}
        </span>
      </template>
      <span
        class="rounded-full p-1 bg-gold flex items-center justify-center w-8 h-8 text-xl cursor-pointer"
        @click="ordersStore.addNewOrder({ id, title, perCarton, price })"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup>
import { previewImageStore } from "@/stores/previewStore";
import { useOrdersStore } from "@/stores/ordersStore";

defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  image: {
    type: Array,
    default: [],
  },
  perCarton: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  outOfStock: Boolean,
});

const previewStore = previewImageStore();
const ordersStore = useOrdersStore();
</script>

<style>
.menu-item {
  background-color: #212121 !important;
  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 5px;
  min-height: 156px;
  padding: 8px;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  position: relative;
  z-index: 1;
}

.menu-item-image-container {
  padding: 0;
  float: right;
  margin-left: 10px;
  position: relative;
}

.menu-item-image {
  object-fit: contain;
  border-radius: 5px;
  width: 120px;
  height: 136px;
}

.menu-item-title {
  color: #fff !important;
  font-weight: 500;
  font-size: 13px;
}

.menu-item-content-container {
  overflow: hidden;
}

.menu-item-content {
  font-weight: 400;
  color: #fff;
  font-size: 12px;
  margin-top: 4px;
  word-wrap: break-word !important;
  position: relative;
}

.price {
  margin-top: 0;
  color: #fff;
  text-align: left;
  font-size: 14px;
  position: absolute;
  bottom: 4px;
  right: 10px;
}
</style>
