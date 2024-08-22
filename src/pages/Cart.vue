<template>
  <MoleculeInvoiceModal modalId="cart_modal"></MoleculeInvoiceModal>
  <div class="bg-white relative p-6">
    <section
      v-if="orders.length == 0"
      class="flex items-center justify-center h-[100vh]"
    >
      <p>No orders have been added yet.</p>
    </section>
    <section class="flex flex-col gap-4 pt-16 pb-2" v-if="orders.length > 0">
      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-bold">Cart</h1>
      </div>
      <div class="flex flex-col gap-4 border-b-2 pb-8 border-dashed">
        <div v-for="(order, index) in orders" :key="index">
          <MoleculeCartCard
            :id="index + 1"
            :name="order.name"
            :price="order.price"
            :note="order.note"
            :qty="order.quantity"
            @increase-qty="increaseQty(index)"
            @decrease-qty="decreaseQty(index)"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4 border-b-2 pb-8 border-dashed">
        <h2 class="text-xl font-bold">Recomendation (Opsional)</h2>
        <div class="flex gap-2">
          <AtomsButton type="primary">Trending</AtomsButton>
          <AtomsButton type="secondary">Beverage</AtomsButton>
        </div>
        <div class="flex flex-nowrap gap-2 overflow-x-auto">
          <MoleculeSmallCard
            v-for="product in trendingProducts"
            :name="product.name"
            :price="product.price"
            :url="product.slug"
          />
        </div>
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
      <AtomsButton
        type="primary"
        class="w-full mt-2"
        onclick="cart_modal.showModal()"
        >Payment Method</AtomsButton
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
import MoleculeCartCard from "../components/molecules/MoleculeCartCard.vue";
import MoleculeSmallCard from "../components/molecules/MoleculeSmallCard.vue";
import usePricingFormat from "../hooks/usePricingFormat";
import { useCustomerData } from "../hooks/useCustomerData";
import MoleculeInvoiceModal from "../components/molecules/MoleculeInvoiceModal.vue";
import { useHead } from "@vueuse/head";
import { useCustomerOrder } from "../hooks/useCustomerOrder";

const { formatPrice } = usePricingFormat();
const { customerData, trendingProducts } = useCustomerData();
const { totalAmount, calculateTotalAmount } = useCustomerOrder();
calculateTotalAmount();

const orders = ref([...customerData.value.order]);

const increaseQty = (index) => {
  orders.value[index].quantity += 1;
  calculateTotalAmount();
};

const decreaseQty = (index) => {
  if (orders.value[index].quantity > 1) {
    orders.value[index].quantity -= 1;
    calculateTotalAmount(orders.value);
  } else {
    customerData.value.order.splice(index, 1);
    orders.value = [...customerData.value.order];
    calculateTotalAmount(orders.value);
  }
};

useHead({
  title: "Cart",
  meta: [{ name: "description", content: "description for Cart Pages" }],
});
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
