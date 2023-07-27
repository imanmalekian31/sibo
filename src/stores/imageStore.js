import { ref } from "vue";
import { defineStore } from "pinia";

export const useImageStore = defineStore("image", () => {
  const image = ref("");

  function setImage(imageUrl) {
    image.value = imageUrl;
  }

  return {
    image,
    setImage,
  };
});
