<template>
    <div class="relative max-w-md z-0 h-[480px] banner-bg">
        <img
            alt="Vue logo"
            src="../assets/banner/promo-banner.png"
            class="fixed inset-0 mx-auto max-w-md object-cover mt-16"
            style="z-index: -1"
        />
    </div>
    <div class="bg-white -mt-12 h-[100vh] z-20 relative lg:rounded-t-xl rounded-t-lg p-4">
        <div class="flex flex-col items-center justify-center">
            <div class="flex gap-2 items-center justify-center mb-4">
                <AtomsButton type="primary-outline" @click="decrement">Kurang</AtomsButton>
                <AtomsButton type="primary" @click="increment">Tambah</AtomsButton>
            </div>
            <router-link to="/about">{{ count }}</router-link>
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
import { computed } from "vue";
import AtomsButton from "../components/atoms/AtomsButton.vue";

const counterStore = useCounterStore();
const count = computed(() => counterStore.count);
const increment = counterStore.increment;
const decrement = counterStore.decrement;
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
