<template>
  <div class="menu-item">
    <div>
      <div class="menu-item-image-container" @click="store.setImage(image)">
        <img :src="`/notebook/${image}`" class="menu-item-image" />
      </div>
      <div class="menu-item-details">
        <h5 class="menu-item-title">{{ title }}</h5>
        <div class="menu-item-content-container">
          <div class="menu-item-content">
            <table>
              <tbody>
                <tr>
                  <td class="">در هر کارتون:</td>
                  <td class="pr-2">{{ perCarton.toLocaleString() }}</td>
                </tr>
                <tr>
                  <td class="">قیمت هر جلد:</td>
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
              مـیلیون
              <br />
              تـــومان
            </small>
          </span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useImageStore } from "@/stores/imageStore";

defineProps({
  title: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  perCarton: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
});


const store = useImageStore();
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
  margin-top: 5px;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 1.8rem;
}

.menu-item-content-container {
  overflow: hidden;
}

.menu-item-content {
  font-weight: 400;
  color: #fff;
  font-size: 13px;
  width: 95%;
  height: 73px;
  margin-top: 2px;
  word-wrap: break-word !important;
  position: relative;
}

.price {
  margin-top: 0;
  color: #fff;
  text-align: left;
  font-size: 14px;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
