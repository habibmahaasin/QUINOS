<template>
  <div class="bg-white relative p-6">
    <section class="flex flex-col gap-4 pt-16 pb-16">
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
        <AtomsButton type="primary-outline" class="w-full mt-4"
          >Add More Order</AtomsButton
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
      <AtomsButton type="primary" class="w-full mt-2"
        >Payment/ Close the Bill</AtomsButton
      >
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
import usePricingFormat from "../hooks/usePricingFormat";
import { useCustomerData } from "../hooks/useCustomerData";

const { formatPrice } = usePricingFormat();
const { customerData } = useCustomerData();

const orders = ref([...customerData.value.order]);
const totalAmount = ref({
  subtotal: 0,
  serviceCharge: 0,
  pb1: 0,
  table: customerData.value.table,
  total: 0,
});

const calculateTotalAmount = () => {
  totalAmount.value.subtotal = orders.value.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0
  );
  totalAmount.value.serviceCharge = 5000;
  totalAmount.value.pb1 = totalAmount.value.subtotal * 0.1;
  totalAmount.value.total =
    totalAmount.value.subtotal +
    totalAmount.value.serviceCharge +
    totalAmount.value.pb1;
};

calculateTotalAmount();
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
