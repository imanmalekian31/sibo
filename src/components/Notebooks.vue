<template>
  <NotebooksCategory
    v-for="notebookType in notebookList"
    v-bind="notebookType"
  />
</template>

<script setup>
import NotebooksCategory from "./NotebooksCategory.vue";

import notebookList from "./notebookList.json";
</script>
