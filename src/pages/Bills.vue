<template>
  <div class="bg-white relative p-6">
    <section
      v-if="orders.length == 0"
      class="flex items-center justify-center h-[100vh]"
    >
      <p>No orders have been added yet.</p>
    </section>
    <section class="flex flex-col gap-4 pt-16 pb-16" v-if="orders.length > 0">
      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-bold">Submitted Order List</h1>
        <h6 class="text-base text-gray-500">
          We've received Your order list! <br />The chefs are cooking your
          order.
        </h6>
      </div>
      <div class="flex flex-col gap-4 border-b-2 pb-8 border-dashed">
        <div v-for="(order, index) in orders" :key="index">
          <MoleculeBillsCard
            :name="order.name"
            :price="order.price"
            :note="order.note"
            :qty="order.quantity"
          />
        </div>
        <RouterLink to="/" class="btn btn-primary-outline w-full mt-4"
          >Add More Order</RouterLink
        >
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-xl font-bold">Summary</h1>
        <div class="border-b-2 pb-4 border-dashed flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <p class="text-base">Subtotal</p>
            <p class="text-base">{{ formatPrice(totalAmount.subtotal) }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-base">Service Charge</p>
            <p class="text-base">
              {{ formatPrice(totalAmount.serviceCharge) }}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-base">PB1</p>
            <p class="text-base">{{ formatPrice(totalAmount.pb1) }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-base">Table</p>
            <p class="text-base">{{ totalAmount.table }}</p>
          </div>
          <div class="flex justify-between items-center mt-2">
            <p class="text-xl font-bold">Total</p>
            <p class="text-xl font-bold">
              {{ formatPrice(totalAmount.total) }}
            </p>
          </div>
        </div>
      </div>
      <RouterLink to="/payment" class="btn btn-primary w-full mt-4"
        >Payment/ Close the Bill</RouterLink
      >
      <div class="flex justify-center">
        <h6>Powered by <b>QUINOS</b></h6>
      </div>
    </section>
  </div>
</template>

<script setup>
import MoleculeBillsCard from "../components/molecules/MoleculeBillsCard.vue";
import usePricingFormat from "../hooks/usePricingFormat";
import { useCustomerOrder } from "../hooks/useCustomerOrder";

const { formatPrice } = usePricingFormat();
const { orders, totalAmount, calculateTotalAmount } = useCustomerOrder();
calculateTotalAmount();
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
