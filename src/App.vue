<template>
  <div id="app">
    <div
      class="container mx-auto max-w-md bg-white min-h-[100vh] overflow-x-none"
    >
      <OrganismTopBar v-if="showTopNavigation" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";
import OrganismBottomNav from "./components/organisms/OrganismBottomNav.vue";
import OrganismTopBar from "./components/organisms/OrganismTopBar.vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: {
    OrganismTopBar,
    OrganismBottomNav,
  },
  data() {
    return {
      theme: "light",
    };
  },
  computed: {
    showTopNavigation() {
      return (
        !this.$route.path.startsWith("/product-detail") &&
        this.$route.path !== "/login"
      );
    },
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", this.theme);
    },
    checkCustomerStore() {
      const customerStore = localStorage.getItem("customer-store");
      if (!customerStore) {
        this.$router.push("/login");
        return;
      }

      const customerData = JSON.parse(customerStore);
      if (!customerData.data.name || !customerData.data.phone) {
        this.$router.push("/");
      }
    },
    redirectToHomeIfNeeded() {
      const customerStore = localStorage.getItem("customer-store");
      if (customerStore) {
        const customerData = JSON.parse(customerStore);
        if (
          customerData.data.name &&
          customerData.data.phone &&
          this.$route.path === "/login"
        ) {
          this.$router.push("/");
        }
      }
    },
  },
  mounted() {
    document.documentElement.setAttribute("data-theme", this.theme);
    this.checkCustomerStore();
    this.redirectToHomeIfNeeded();
  },
  watch: {
    $route(to, from) {
      if (to.path === "/login") {
        this.redirectToHomeIfNeeded();
      }
    },
  },
  setup() {
    // Use useHead from @vueuse/head
    const route = useRoute();
    useHead({
      title: route.meta.title || "Default Title",
      meta: [
        {
          name: "description",
          content: route.meta.description || "Default description",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "./assets/logo/favicon.ico", // Update with your icon path
        },
        {
          rel: "apple-touch-icon",
          href: "./assets/logo/subwa.svg", // Optional for Apple devices
        },
      ],
    });
  },
};
</script>

<style>
/* Add your global styles here */
</style>
