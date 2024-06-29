import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import Index from "./pages/Index.vue";
import Landing from "./pages/Landing.vue";

const app = createApp(App);
const pinia = createPinia();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Landing },
        { path: "/home", component: Index },
    ],
});

app.use(router);
app.use(pinia);
app.mount("#app");
