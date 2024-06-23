<script setup>
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
    msg: {
        type: String,
        default: "Hello World",
    },
});
</script>

<template>
    <div class="navbar bg-base-100 fixed max-w-md z-40 px-6">
        <div class="flex-1">
            <router-link to="/">
                <FontAwesomeIcon :icon="faChevronLeft" class="text-lg" />
            </router-link>
        </div>
        <div class="flex-none">
            <img alt="Vue logo" src="../../assets/logo/subwa.svg" class="h-8" />
        </div>
    </div>
</template>

<style scoped></style>
