import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as yjs from "yjs";

// @ts-expect-error global
window.yjs = yjs;

createApp(App).mount("#app");
