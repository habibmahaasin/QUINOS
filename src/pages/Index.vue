<template>
    <MoleculeCategoryModal modalId="category_modal" />
    <div :style="bannerStyle" class="relative max-w-md z-0 banner-bg">
        <img
            alt="Vue logo"
            src="../assets/banner/promo-banner.png"
            class="fixed inset-0 mx-auto w-full max-w-md object-cover mt-16"
            style="z-index: -1"
        />
    </div>
    <div class="bg-white -translate-y-12 min-h-[100vh] z-20 relative rounded-t-xl p-6">
        <MoleculeProfile name="Mahaasin" table="A-1" />
        <section class="mt-4 sticky top-24 bg-white pt-6 pb-2">
            <div class="flex gap-2 max-w-full">
                <label class="flex-1 input input-bordered flex items-center gap-4 py-0">
                    <FontAwesomeIcon :icon="faSearch" class="text-base" />
                    <input type="text" class="grow w-20" placeholder="Search category 1" />
                </label>
                <AtomsButton type="primary" onclick="category_modal.showModal()">
                    <FontAwesomeIcon :icon="faListDots" class="text-base" />
                </AtomsButton>
            </div>
            <div class="mt-4 flex flex-nowrap overflow-x-auto gap-2 mb-4">
                <AtomsButton type="primary" @click="decrement"> All </AtomsButton>
                <template v-for="category in categories">
                    <AtomsButton type="secondary" @click="increment">
                        {{ category }}
                    </AtomsButton>
                </template>
            </div>
        </section>
        <section class="mt-6">
            <h4 class="text-[18px] font-bold mb-4">Trending</h4>
            <div class="flex flex-nowrap gap-2 overflow-x-auto">
                <MoleculeSmallCard v-for="product in products" :name="product.name" :price="product.price" />
            </div>
        </section>
        <section class="overflow-x-auto mt-6">
            <h4 class="text-[18px] font-bold mb-4">Category 1</h4>
            <div class="flex flex-col gap-4">
                <MoleculeLargeCard v-for="product in products" :name="product.name" :price="product.price" />
            </div>
        </section>
    </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
import { computed, ref } from "vue";
import AtomsButton from "../components/atoms/AtomsButton.vue";
import MoleculeProfile from "../components/molecules/MoleculeProfile.vue";
import MoleculeSmallCard from "../components/molecules/MoleculeSmallCard.vue";
import MoleculeLargeCard from "../components/molecules/MoleculeLargeCard.vue";

import { faSearch, faListDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useImageResize } from "../hooks/useImageResize";
import MoleculeCategoryModal from "../components/molecules/MoleculeCategoryModal.vue";

const promoBanner = ref(null);
const { bannerStyle } = useImageResize(promoBanner);

const counterStore = useCounterStore();
const count = computed(() => counterStore.count);
const increment = counterStore.increment;
const decrement = counterStore.decrement;

const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];
const products = [
    {
        name: "Product 1",
        price: "IDR 10.000",
    },
    {
        name: "Product 2",
        price: "IDR 20.000",
    },
    {
        name: "Product 3",
        price: "IDR 30.000",
    },
    {
        name: "Product 4",
        price: "IDR 40.000",
    },
    {
        name: "Product 5",
        price: "IDR 50.000",
    },
    {
        name: "Product 6",
        price: "IDR 60.000",
    },
];
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
