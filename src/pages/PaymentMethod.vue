<template>
  <div class="bg-white relative p-6">
    <div v-if="payment == 'ovo'">
      <OvoPaymentMethod />
    </div>
    <div v-else-if="payment == 'qris'">
      <QrisPaymentMethod :totalAmount="totalAmount" />
    </div>
    <div v-else-if="payment == 'bank-permata' || payment == 'bank-bca'">
      <BankPaymentMethod :totalAmount="totalAmount" :payment="payment" />
    </div>
  </div>
</template>

<script setup>
import OvoPaymentMethod from "../components/molecules/paymentMethod/Ovo.vue";
import QrisPaymentMethod from "../components/molecules/paymentMethod/Qris.vue";
import BankPaymentMethod from "../components/molecules/paymentMethod/Bank.vue";
import { useCustomerData } from "../hooks/useCustomerData";
import { useCustomerOrder } from "../hooks/useCustomerOrder";
import { useHead } from "@vueuse/head";
const { customerData } = useCustomerData();
const { totalAmount, calculateTotalAmount } = useCustomerOrder();

const payment = customerData.value.payment.method;

useHead({
  title: "Payment - " + payment,
  meta: [
    { name: "description", content: "description for Payment Method Pages" },
  ],
});
calculateTotalAmount();
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
