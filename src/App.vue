<script setup lang="ts">
import packageJSON from "../package.json";
console.log("yjs version: ", packageJSON.dependencies.yjs);
</script>

<template>
  <p>yjs@{{ packageJSON.dependencies.yjs }} playground,</p>
  <p>Open DevTools, enter <code>window.yjs</code> get everything you need.</p>
</template>

<style scoped></style>
