<template>
  <div class="bg-white relative p-6">
    <section class="flex flex-col gap-4 pt-16 pb-16">
      <div class="flex flex-col gap-2 border-b-2 pb-6 border-dashed">
        <h1 class="text-xl font-bold">Choose Method Payment</h1>
      </div>
      <div
        class="flex flex-col gap-4"
        v-for="category in PAYMENT_METHOD"
        :key="category.category"
      >
        <span class="text-base font-bold">{{ category.category }}</span>
        <div class="border-b-2 pb-4 border-dashed flex flex-col gap-4">
          <div v-for="method in category.method" :key="method.id">
            <div class="flex gap-4 items-center">
              <input
                type="radio"
                name="radio-payment"
                class="radio radio-success"
                :value="method.slug"
                v-model="customerData.payment"
                :checked="method.slug == customerData.payment ? true : false"
              />
              <img :src="getIconPath(method.slug)" class="h-8" />
              <p class="text-base font-bold">{{ method.name }}</p>
            </div>
            <div
              v-if="customerData.payment == 'ovo' && method.slug == 'ovo'"
              class="mt-4"
            >
              <input
                type="text"
                class="input input-bordered w-full"
                placeholder="Phone Number"
                v-model="ovoNumber"
                @input="onChangeOvoNumber"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <RouterLink
        :to="
          customerData.payment != 'cashier'
            ? '/payment/' + customerData.payment
            : '/invoice'
        "
        class="btn btn-primary w-full mt-4"
        >Next</RouterLink
      >
    </section>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useCustomerData } from "../hooks/useCustomerData";
import { PAYMENT_METHOD } from "../utils/constant/paymentMethod";
import { ref } from "vue";
const { customerData } = useCustomerData();

const ovoNumber = ref("");

const onChangeOvoNumber = (e) => {
  let phone = e.target.value;
  phone = phone.replace(/(?!^\+)\D/g, "");
  if (phone.startsWith("0")) {
    phone = "+62" + phone.substring(1);
  }
  if (!phone.startsWith("+62") && phone.startsWith("+")) {
    phone = "+" + phone.substring(1, 16);
  }
  if (phone.length > 16) {
    phone = phone.substring(0, 16);
  }

  ovoNumber.value = phone;
};

const getIconPath = (methodName) => {
  return new URL(`../assets/payment/${methodName}.png`, import.meta.url).href;
};

useHead({
  title: "Payment",
  meta: [{ name: "description", content: "description for Payment Pages" }],
});
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
