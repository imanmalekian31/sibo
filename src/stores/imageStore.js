import { ref  , watch} from "vue";
import { defineStore } from "pinia";

export const useImageStore = defineStore("image", () => {
  const image = ref("");
  const imageTitle = ref("");
  const notebookId = ref("");
  const openModal = ref(false)

  function setImage(imageUrl , title , id) {
    image.value = imageUrl;
    imageTitle.value = title;
    notebookId.value = id;
    openModal.value = true;
  }

  function closeModal(){
    openModal.value = false
  }

  return {
    image,
    imageTitle,
    notebookId,
    setImage,
    openModal,
    closeModal,
  };
});
