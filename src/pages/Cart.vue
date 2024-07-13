<template>
  <MoleculeCartModal modalId="cart_modal" />
  <div class="bg-white relative p-6">
    <section class="flex flex-col gap-4 pt-16 pb-2">
      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-bold">Cart</h1>
      </div>
      <div class="flex flex-col gap-4 border-b-2 pb-8 border-dashed">
        <div v-for="(order, index) in orders" :key="index">
          <MoleculeCartCard
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
      <div class="flex justify-between items-center mt-2">
        <p class="text-xl font-bold">Total Amount</p>
        <p class="text-base">{{ formatPrice(totalAmount) }}</p>
      </div>
      <AtomsButton
        type="primary"
        class="w-full mt-2"
        onclick="cart_modal.showModal()"
        >Submit Order Now</AtomsButton
      >
      <div class="flex justify-center">
        <h6>Powered by <b>QUINOS</b></h6>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import AtomsButton from "../components/atoms/AtomsButton.vue";
import MoleculeCartCard from "../components/molecules/MoleculeCartCard.vue";
import MoleculeSmallCard from "../components/molecules/MoleculeSmallCard.vue";
import MoleculeCartModal from "../components/molecules/MoleculeCartModal.vue";
import { useCustomerStore } from "../stores/customer";
import { PRODUCT_LIST } from "../utils/constant/productList";

const customerStore = useCustomerStore();
const customerData = computed(() => customerStore.data);
const orders = ref([...customerData.value.order]);
const totalAmount = ref(0);

const trendingProducts = PRODUCT_LIST.flatMap((category) =>
  category.product.filter((product) => product.trending)
);

const calculateTotalAmount = () => {
  totalAmount.value = orders.value.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0
  );
};

calculateTotalAmount();

const increaseQty = (index) => {
  orders.value[index].quantity += 1;
  calculateTotalAmount();
};

const decreaseQty = (index) => {
  if (orders.value[index].quantity > 1) {
    orders.value[index].quantity -= 1;
    calculateTotalAmount();
  }
};

const formatPrice = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
