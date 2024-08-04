import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import Index from "./pages/Index.vue";
import Landing from "./pages/Landing.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import Cart from "./pages/Cart.vue";
import pinia from "./utils/plugins/persist";
import Payment from "./pages/Payment.vue";
import Invoice from "./pages/Invoice.vue";
import PaymentMethod from "./pages/PaymentMethod.vue";
import { createHead } from "@vueuse/head";

// Import Toastification
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: Landing,
    },
    {
      path: "/",
      component: Index,
    },
    {
      path: "/product-detail/:slug",
      component: ProductDetail,
    },
    {
      path: "/cart",
      component: Cart,
    },
    {
      path: "/payment",
      component: Payment,
    },
    {
      path: "/payment/:slug",
      component: PaymentMethod,
    },
    {
      path: "/invoice",
      component: Invoice,
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

// Toastification options
const toastOptions = {
  // You can set your default options here
  position: POSITION.TOP_CENTER,
  timeout: 2000,
  closeOnClick: true,
  pauseOnHover: false,
};

const head = createHead();

app.use(head);
app.use(router);
app.use(pinia);
app.use(Toast, toastOptions); // Use Toastification
app.mount("#app");
