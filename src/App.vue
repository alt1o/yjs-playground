<script setup lang="ts">
import packageJSON from "../package.json";
import { fileToYDoc } from "./utils";
console.log("yjs version: ", packageJSON.dependencies.yjs);

const onChange = async (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  const file = files?.[0];
  if (!file) {
    return;
  }
  const doc = await fileToYDoc(file);
  // @ts-expect-error global
  window.localDoc = doc;
  console.log("Loaded doc: ", file.name, file.size, file.type);
  // @ts-expect-error global
  console.log("YDoc (window.localDoc):", window.localDoc);
};
</script>

<template>
  <p>yjs@{{ packageJSON.dependencies.yjs }} playground,</p>
  <p>Open DevTools, enter <code>window.yjs</code> get everything you need.</p>
  <hr />
  <p>
    Load local file, then you can access ydoc by <code>window.localDoc</code>
  </p>
  <div>
    <input type="file" @change="onChange" />
  </div>
</template>

<style scoped></style>
