<template>
  <div id="app">
    <div
      class="container mx-auto max-w-md bg-white min-h-[100vh] overflow-x-none"
    >
      <OrganismTopBar v-if="showTopNavigation" />
      <router-view />
      <OrganismBottomNav v-if="showNavigation" />
    </div>
  </div>
</template>

<script>
import OrganismBottomNav from "./components/organisms/OrganismBottomNav.vue";
import OrganismTopBar from "./components/organisms/OrganismTopBar.vue";

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
    showNavigation() {
      return (
        !this.$route.path.startsWith("/product-detail") &&
        this.$route.path !== "/login" &&
        this.$route.path !== "/cart" &&
        this.$route.path !== "/invoice" &&
        !this.$route.path.startsWith("/payment")
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
        console.log("customerData", customerData);
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
};
</script>

<style>
/* Add your global styles here */
</style>
