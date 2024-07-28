<template>
  <div class="bg-white relative p-6">
    <section class="flex flex-col gap-4 pt-16 pb-16">
      <div
        class="flex flex-col gap-2 border-b-2 pb-6 border-dashed items-center"
      >
        <div
          class="flex flex-col gap-2 items-center mb-2"
          v-if="customerData.payment.method == 'cashier'"
        >
          <h1 class="text-xl font-bold w-8/12 text-center">
            Show This to The Cashier When Paying
          </h1>
          <img src="../assets/payment/barcode.svg" class="w-8/12" />
        </div>
        <div
          class="flex flex-col gap-2 items-center mb-2"
          v-if="customerData.payment.method != 'cashier'"
        >
          <img src="../assets/icon/success.png" class="w-8/12" />
          <h1 class="text-2xl font-bold text-center mt-4">
            Payment successful
          </h1>
        </div>
        <span>Subwa Family Restaurant</span>
      </div>
      <div
        class="flex flex-col gap-2 border-b-2 pb-6 border-dashed items-center"
      >
        <div
          v-for="data in invoice_detail"
          :key="data.data"
          class="flex justify-between w-full"
        >
          <div v-for="data in data.data">
            <p>
              {{ data.name == "Date Time" ? "" : data.name }} {{ data.value }}
            </p>
          </div>
        </div>
      </div>
      <div class="border-b-2 pb-6 border-dashed">
        <h4 class="text-base font-bold">Order Detail</h4>
        <div class="flex flex-col gap-4 mt-4">
          <div v-for="order in orders">
            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-1">
                <p class="font-bold">{{ order.name }}</p>
                <p>{{ formatPrice(order.price) }}</p>
              </div>
              <p class="font-bold">{{ order.quantity }}</p>
            </div>
            <div class="mt-2 flex gap-2 items-center text-gray-600">
              <svg
                class="-ml-1"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8466 5.9993C17.6616 5.61259 17.4009 5.26689 17.0799 4.98263L14.5799 2.71596C14.0297 2.21159 13.331 1.89879 12.5883 1.8243H7.45495C6.90291 1.80089 6.35174 1.88751 5.83349 2.07912C5.31525 2.27072 4.84029 2.56349 4.43626 2.94038C4.03223 3.31727 3.70719 3.77076 3.48006 4.27445C3.25293 4.77814 3.12826 5.32197 3.11328 5.8743V14.4576C3.14276 15.2906 3.42136 16.0955 3.91307 16.7685C4.40479 17.4414 5.08702 17.9514 5.87161 18.2326C6.38195 18.4256 6.92674 18.5107 7.47161 18.4826H13.7716C14.3237 18.5063 14.875 18.4198 15.3933 18.2283C15.9117 18.0368 16.3867 17.744 16.7908 17.3671C17.1949 16.9901 17.5199 16.5366 17.747 16.0328C17.974 15.529 18.0985 14.985 18.1133 14.4326V7.29096C18.1173 6.84634 18.0264 6.40598 17.8466 5.9993ZM7.01328 5.66596H9.72995C9.95096 5.66596 10.1629 5.75376 10.3192 5.91004C10.4755 6.06632 10.5633 6.27828 10.5633 6.4993C10.5633 6.72031 10.4755 6.93227 10.3192 7.08855C10.1629 7.24483 9.95096 7.33263 9.72995 7.33263H7.01328C6.79227 7.33263 6.58031 7.24483 6.42403 7.08855C6.26775 6.93227 6.17995 6.72031 6.17995 6.4993C6.17995 6.27828 6.26775 6.06632 6.42403 5.91004C6.58031 5.75376 6.79227 5.66596 7.01328 5.66596ZM14.2633 14.591H7.01328C6.79227 14.591 6.58031 14.5032 6.42403 14.3469C6.26775 14.1906 6.17995 13.9786 6.17995 13.7576C6.17995 13.5366 6.26775 13.3247 6.42403 13.1684C6.58031 13.0121 6.79227 12.9243 7.01328 12.9243H14.2633C14.4619 12.9526 14.6437 13.0516 14.7752 13.2032C14.9067 13.3547 14.9791 13.5487 14.9791 13.7493C14.9791 13.9499 14.9067 14.1439 14.7752 14.2954C14.6437 14.447 14.4619 14.546 14.2633 14.5743V14.591ZM14.2633 10.966H7.01328C6.79227 10.966 6.58031 10.8782 6.42403 10.7219C6.26775 10.5656 6.17995 10.3536 6.17995 10.1326C6.17995 9.91162 6.26775 9.69966 6.42403 9.54338C6.58031 9.3871 6.79227 9.2993 7.01328 9.2993H14.2633C14.4843 9.2993 14.6963 9.3871 14.8525 9.54338C15.0088 9.69966 15.0966 9.91162 15.0966 10.1326C15.0966 10.3536 15.0088 10.5656 14.8525 10.7219C14.6963 10.8782 14.4843 10.966 14.2633 10.966ZM13.9966 6.3243C13.8777 6.3254 13.7598 6.30293 13.6496 6.2582C13.5395 6.21346 13.4393 6.14734 13.3548 6.06366C13.2704 5.97998 13.2033 5.88039 13.1576 5.77065C13.1118 5.66091 13.0883 5.54319 13.0883 5.4243V3.21596C13.6383 3.3493 15.7799 5.5493 16.2466 5.91596C16.3846 6.03223 16.5028 6.17014 16.5966 6.3243H13.9966Z"
                  fill="#707986"
                />
              </svg>
              <p>{{ order.note }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <h4 class="text-base font-bold">Summary</h4>
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
            <p class="text-base">Type</p>
            <p class="text-base">
              Dine in at tabe <b>{{ totalAmount.table }}</b>
            </p>
          </div>
          <div class="flex justify-between items-center mt-2">
            <p class="text-xl font-bold">Total</p>
            <p class="text-xl font-bold">
              {{ formatPrice(totalAmount.total) }}
            </p>
          </div>
        </div>
      </div>
      <div class="border-b-2 pb-6 border-dashed text-center mt-2">
        Closed Jun 14, 2024 2:27:22 PM
      </div>
      <p class="text-center">Thank You</p>
      <div class="flex w-full gap-4">
        <RouterLink to="/" class="flex-1 btn btn-primary mt-4"
          >Send to Email</RouterLink
        >
        <RouterLink to="/" class="flex-1 btn btn-primary mt-4">Home</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCustomerData } from "../hooks/useCustomerData";
import usePricingFormat from "../hooks/usePricingFormat";
import { useCustomerOrder } from "../hooks/useCustomerOrder";
import { useHead } from "@vueuse/head";
const { customerData } = useCustomerData();
const { formatPrice } = usePricingFormat();
const { orders, totalAmount, calculateTotalAmount } = useCustomerOrder();
calculateTotalAmount();

const invoice_detail = ref([
  {
    data: [
      {
        name: "Invoice",
        value: "#011296",
      },
      {
        name: "Server",
        value: "DICKA",
      },
    ],
  },
  {
    data: [
      {
        name: "Date Time",
        value: "Jun 14, 2024 2:26:46 PM",
      },
      {
        name: "PAX",
        value: 1,
      },
    ],
  },
]);

useHead({
  title: "Invoice",
  meta: [{ name: "description", content: "description for Invoice Pages" }],
});
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
