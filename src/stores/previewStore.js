import { ref } from "vue";
import { defineStore } from "pinia";

export const previewImageStore = defineStore("image-preview", () => {
  const images = ref("");
  const title = ref("");
  const id = ref("");
  const openModal = ref(false);

  function openPreview(imageUrl, imageTitle, imageId) {
    images.value = imageUrl;
    title.value = imageTitle;
    id.value = imageId;
    openModal.value = true;
  }

  function closePreview() {
    openModal.value = false;
  }

  return {
    images,
    title,
    id,
    openPreview,
    openModal,
    closePreview,
  };
});
