<template>
  <PaymentMethodModal modalId="bankPayment" />
  <section class="flex flex-col gap-4 h-screen relative items-center pt-32">
    <div class="flex flex-col gap-6 justify-center -translate-y-16">
      <div class="text-center flex flex-col gap-2">
        <h1 class="text-xl font-bold">Payment Method</h1>
        <p class="font-bold">{{ formatPrice(totalAmount.total) }}</p>
      </div>
      <div
        class="flex flex-row items-center gap-4"
        v-if="payment == 'bank-bca'"
      >
        <img src="../../../assets/payment/bank-bca.png" class="w-20" />
        <p class="text-justify">Bank BCA</p>
      </div>
      <div
        class="flex flex-row items-center gap-4"
        v-else-if="payment == 'bank-permata'"
      >
        <img src="../../../assets/payment/bank-permata.png" class="w-20" />
        <p class="text-justify">Bank Permata</p>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-justify">Virtual Account</p>
            <p class="text-justify font-bold">123456789</p>
          </div>
          <button
            type="transparent"
            class="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-md"
            @click="copyBankAccount"
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7188 4.5H5.78125C4.79749 4.5 4 5.29749 4 6.28125V13.2188C4 14.2025 4.79749 15 5.78125 15H12.7188C13.7025 15 14.5 14.2025 14.5 13.2188V6.28125C14.5 5.29749 13.7025 4.5 12.7188 4.5Z"
                stroke="#252525"
                stroke-linejoin="round"
              />
              <path
                d="M11.9844 4.5L12 3.75C11.9987 3.28628 11.8139 2.84192 11.486 2.51402C11.1581 2.18612 10.7137 2.00132 10.25 2H3.5C2.97005 2.00157 2.46225 2.21278 2.08752 2.58752C1.71278 2.96225 1.50157 3.47005 1.5 4V10.75C1.50132 11.2137 1.68612 11.6581 2.01402 11.986C2.34192 12.3139 2.78628 12.4987 3.25 12.5H4"
                stroke="#252525"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Copy
          </button>
        </div>
        <div>
          <p class="text-justify">Account Name</p>
          <p class="text-justify font-bold uppercase">
            PT QUINOS POS TEKNOLOGI
          </p>
        </div>
        <p class="text-center text-sm text-[#333]/75 mt-8">
          Valid until May 31, 2024, 16:15
        </p>
      </div>
      <p class="text-justify text-sm text-[#AC0000]">
        We haven't received your payment yet. Please make the payment promptly
        so that we can process your order.
      </p>
      <button
        type="transparent"
        class="w-full"
        onclick="bankPayment.showModal()"
      >
        <div class="flex items-center justify-between">
          How to pay
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.8295 4.4545C8.26884 4.01516 8.98116 4.01516 9.4205 4.4545L16.1705 11.2045C16.6098 11.6438 16.6098 12.3562 16.1705 12.7955L9.4205 19.5455C8.98116 19.9848 8.26885 19.9848 7.82951 19.5455C7.39017 19.1062 7.39017 18.3938 7.82951 17.9545L13.784 12L7.82951 6.04549C7.39017 5.60616 7.39017 4.89384 7.8295 4.4545Z"
              fill="#242424"
            />
          </svg>
        </div>
      </button>
    </div>
    <div class="absolute bottom-0 w-full">
      <RouterLink to="/invoice" class="btn btn-secondary w-full my-1"
        >Check Payment Status</RouterLink
      >
      <div class="flex w-full gap-2">
        <RouterLink to="#" class="btn btn-primary my-1 flex-1"
          >Download Qris</RouterLink
        >
        <RouterLink to="#" class="btn btn-secondary my-1 flex-1"
          >Share</RouterLink
        >
      </div>
      <div class="flex justify-center pt-8">
        <h6>Powered by <b>QUINOS</b></h6>
      </div>
    </div>
  </section>
</template>

<script>
import usePricingFormat from "../../../hooks/usePricingFormat";
import AtomsButton from "../../atoms/AtomsButton.vue";
import PaymentMethodModal from "./PaymentMethodModal.vue";
import { useToast } from "vue-toastification";

export default {
  name: "BankPaymentMethod",
  components: {
    AtomsButton,
    PaymentMethodModal,
  },
  props: {
    totalAmount: Object,
    payment: String,
  },
  setup() {
    const { formatPrice } = usePricingFormat();
    const toast = useToast();

    const copyBankAccount = () => {
      const bankAccount = "123456789";
      navigator.clipboard
        .writeText(bankAccount)
        .then(() => {
          toast.success("Bank account number copied to clipboard");
        })
        .catch((err) => {
          toast.error("Could not copy text: ", err);
        });
    };

    return { formatPrice, copyBankAccount };
  },
};
</script>
