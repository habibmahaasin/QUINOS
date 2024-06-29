<template>
    <div id="app">
        <div class="container mx-auto max-w-md bg-white min-h-[100vh] overflow-x-none">
            <OrganismTopBar v-if="showNavigation" />
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
        showNavigation() {
            return this.$route.path !== "/" && this.$route.path !== "/product-detail";
        },
    },

    methods: {
        toggleTheme() {
            this.theme = this.theme === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", this.theme);
        },
    },
    mounted() {
        document.documentElement.setAttribute("data-theme", this.theme);
    },
};
</script>

<style>
/* Add your global styles here */
</style>
