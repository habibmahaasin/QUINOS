<template>
    <div id="app">
        <!-- <button @click="toggleTheme">Toggle Theme</button> -->
        <div class="container mx-auto max-w-md bg-white min-h-[100vh] overflow-x-none">
            <OrganismTopBar v-if="showTopBar" />
            <router-view />
        </div>
    </div>
</template>

<script>
import OrganismTopBar from "./components/organisms/OrganismTopBar.vue";

export default {
    name: "App",
    components: {
        OrganismTopBar,
    },
    data() {
        return {
            theme: "light",
        };
    },
    computed: {
        showTopBar() {
            return this.$route.path !== "/";
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
