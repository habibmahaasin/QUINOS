import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import Index from "./pages/Index.vue";
import Landing from "./pages/Landing.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import Bills from "./pages/Bills.vue";
import Cart from "./pages/Cart.vue";
import pinia from "./utils/plugins/persist";
import Payment from "./pages/Payment.vue";
import Invoice from "./pages/Invoice.vue";
import PaymentMethod from "./pages/PaymentMethod.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: Landing },
    { path: "/", component: Index },
    { path: "/product-detail/:slug", component: ProductDetail },
    { path: "/bills", component: Bills },
    { path: "/cart", component: Cart },
    { path: "/payment", component: Payment },
    { path: "/payment/:slug", component: PaymentMethod },
    { path: "/invoice", component: Invoice },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

app.use(router);
app.use(pinia);
app.mount("#app");
