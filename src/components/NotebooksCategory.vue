<template>
  <div class="mt-4">
    <div>
      <div
        class="text-white text-center relative text-5xl m-0 z-10 float-right w-full category-title-container"
      >
        <h2 class="category-title">
          <span>{{ title }}</span>
        </h2>
      </div>
    </div>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
      <NotebookItem v-for="item in items" v-bind="{...item , title: `${title} ${item.title}`}" />
    </div>
  </div>
</template>

<script setup>
import NotebookItem from "./NotebookItem.vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style>
.category-title-container {
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    transform: translateY(-50%);
    top: 50%;
    width: 100%;
    border-bottom: 3px solid hsla(0, 0%, 100%, 0.58039);
  }
}

.category-title {
  color: #d1aa4b;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  padding: 0 30px;

  span {
    @apply bg-slate-800;
    padding: 0 1em;
    position: relative;
    margin: auto;
    display: table;
  }
}
</style>
