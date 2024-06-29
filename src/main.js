import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import Index from "./pages/Index.vue";
import Landing from "./pages/Landing.vue";
import ProductDetail from "./pages/ProductDetail.vue";

const app = createApp(App);
const pinia = createPinia();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Landing },
        { path: "/home", component: Index },
        { path: "/product-detail", component: ProductDetail },
    ],
});

app.use(router);
app.use(pinia);
app.mount("#app");
