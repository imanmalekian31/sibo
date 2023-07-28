<template>
  <div class="mt-36">
    <NotebooksCategory
    v-for="notebookType in notebookList"
    v-bind="notebookType"
    />
  </div>
</template>

<script setup>
import NotebooksCategory from "./NotebooksCategory.vue";

import notebookList from "./notebookList.json";
</script>
