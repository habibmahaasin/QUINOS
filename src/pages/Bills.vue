<template>
    <div class="bg-white relative p-6">
        <section class="flex flex-col gap-4 pt-16 pb-16">
            <div class="flex flex-col gap-2">
                <h1 class="text-xl font-bold">Submitted Order List</h1>
                <h6 class="text-base text-gray-500">
                    We've received Your order list! <br />The chefs are cooking your order.
                </h6>
            </div>
            <div class="flex flex-col gap-4 border-b-2 pb-8 border-dashed">
                <div v-for="(order, index) in orders" :key="index">
                    <MoleculeBillsCard :name="order.name" :price="order.price" :note="order.note" :qty="order.qty" />
                </div>
                <AtomsButton type="primary-outline" class="w-full mt-4">Add More Order</AtomsButton>
            </div>
            <div class="flex flex-col gap-4">
                <h1 class="text-xl font-bold">Summary</h1>
                <div class="border-b-2 pb-4 border-dashed flex flex-col gap-2">
                    <div class="flex justify-between items-center">
                        <p class="text-base">Subtotal</p>
                        <p class="text-base">{{ summary.subtotal }}</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-base">Service Charge</p>
                        <p class="text-base">{{ summary.serviceCharge }}</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-base">PB1</p>
                        <p class="text-base">{{ summary.pb1 }}</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-base">Table</p>
                        <p class="text-base">{{ summary.table }}</p>
                    </div>
                    <div class="flex justify-between items-center mt-2">
                        <p class="text-xl font-bold">Total</p>
                        <p class="text-xl font-bold">{{ summary.total }}</p>
                    </div>
                </div>
            </div>
            <AtomsButton type="primary" class="w-full mt-2">Payment/ Close the Bill</AtomsButton>
            <div class="flex justify-center">
                <h6>Powered by <b>QUINOS</b></h6>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue";
import AtomsButton from "../components/atoms/AtomsButton.vue";
import MoleculeBillsCard from "../components/molecules/MoleculeBillsCard.vue";

const orders = ref([
    { name: "Product's Name 1", price: "IDR 10.000", note: "Don't put sugar", qty: 1 },
    { name: "Product's Name 2", price: "IDR 20.000", note: "Extra spicy", qty: 2 },
    { name: "Product's Name 3", price: "IDR 15.000", note: "No salt", qty: 1 },
    { name: "Product's Name 4", price: "IDR 30.000", note: "Extra sauce", qty: 3 },
]);

const summary = ref({
    subtotal: "75,000",
    serviceCharge: "7,500",
    pb1: "8,250",
    table: "B-2",
    total: "90,750",
});
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
