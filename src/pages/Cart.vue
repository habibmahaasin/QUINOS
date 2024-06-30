<template>
    <div class="bg-white relative p-6">
        <section class="flex flex-col gap-4 pt-16 pb-2">
            <div class="flex flex-col gap-2">
                <h1 class="text-xl font-bold">Cart</h1>
            </div>
            <div class="flex flex-col gap-4 border-b-2 pb-8 border-dashed">
                <div v-for="(order, index) in orders" :key="index">
                    <MoleculeCartCard :name="order.name" :price="order.price" :note="order.note" :qty="order.qty" />
                </div>
            </div>
            <div class="flex flex-col gap-4 border-b-2 pb-8 border-dashed">
                <h2 class="text-xl font-bold">Recomendation (Opsional)</h2>
                <div class="flex gap-2">
                    <AtomsButton type="primary">Trending</AtomsButton>
                    <AtomsButton type="secondary">Beverage</AtomsButton>
                </div>
                <div class="flex flex-nowrap gap-2 overflow-x-auto">
                    <MoleculeSmallCard v-for="product in products" :name="product.name" :price="product.price" />
                </div>
            </div>
            <div class="flex justify-between items-center mt-2">
                <p class="text-xl font-bold">Total Amount</p>
                <p class="text-base">IDR 11.100</p>
            </div>
            <AtomsButton type="primary" class="w-full mt-2">Submit Order Now</AtomsButton>
            <div class="flex justify-center">
                <h6>Powered by <b>QUINOS</b></h6>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue";
import AtomsButton from "../components/atoms/AtomsButton.vue";
import MoleculeCartCard from "../components/molecules/MoleculeCartCard.vue";
import MoleculeSmallCard from "../components/molecules/MoleculeSmallCard.vue";

const orders = ref([
    { name: "Product's Name 1", price: "IDR 10.000", note: "Don't put sugar", qty: 1 },
    { name: "Product's Name 2", price: "IDR 20.000", note: "Extra spicy", qty: 2 },
    { name: "Product's Name 3", price: "IDR 15.000", note: "No salt", qty: 1 },
    { name: "Product's Name 4", price: "IDR 30.000", note: "Extra sauce", qty: 3 },
]);

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
