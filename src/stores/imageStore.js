import { ref  , watch} from "vue";
import { defineStore } from "pinia";

export const useImageStore = defineStore("image", () => {
  const image = ref("");
  const imageTitle = ref("");
  const openModal = ref(false)

  function setImage(imageUrl , title) {
    image.value = imageUrl;
    imageTitle.value = title;
    openModal.value = true;
  }

  function closeModal(){
    openModal.value = false
  }

  return {
    image,
    imageTitle,
    setImage,
    openModal,
    closeModal,
  };
});
