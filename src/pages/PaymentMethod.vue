<template>
  <div class="bg-white relative p-6">
    <section
      class="flex flex-col gap-4 h-screen relative items-center justify-center"
    >
      <div
        class="flex flex-col gap-6 items-center justify-center -translate-y-16"
      >
        <h1 class="text-xl font-bold">Payment Verification</h1>
        <img src="../assets/payment/ovo.png" class="w-8" />
        <p class="text-center text-sm w-10/12">
          Click “Check Payment Status” to manually refresh your payment status
          every 30 seconds. The maximum check time is 5 minutes or 300 seconds.
        </p>
        <p class="text-[#AC0000]">The remaining payment time is 04:40.</p>
      </div>
      <div class="absolute bottom-4 w-full">
        <RouterLink to="/invoice" class="btn btn-secondary w-full my-1"
          >Check Payment Status</RouterLink
        >
        <RouterLink to="/payment" class="btn btn-primary w-full my-1"
          >Choose Method Payment</RouterLink
        >
        <div class="flex justify-center pt-8">
          <h6>Powered by <b>QUINOS</b></h6>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCustomerData } from "../hooks/useCustomerData";
import { PAYMENT_METHOD } from "../utils/constant/paymentMethod";
const { customerData } = useCustomerData();
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
