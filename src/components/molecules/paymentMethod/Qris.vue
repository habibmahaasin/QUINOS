<template>
  <PaymentMethodModal modalId="qrisPayment" />
  <section
    class="flex flex-col gap-4 h-screen relative items-center justify-center"
  >
    <div
      class="flex flex-col gap-4 items-center justify-center -translate-y-16"
    >
      <div class="text-center flex flex-col gap-2">
        <h1 class="text-xl font-bold">Payment Method</h1>
        <p class="font-bold">{{ formatPrice(totalAmount.total) }}</p>
        <p class="font-bold">QR Code</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img src="../../../assets/payment/barcode.svg" class="w-48" />
        <p class="text-justify text-sm text-[#333]/75">
          Valid until May 31, 2024, 16:15
        </p>
      </div>
      <p class="text-justify text-sm text-[#AC0000]">
        We haven't received your payment yet. Please make the payment promptly
        so that we can process your order.
      </p>
      <AtomsButton
        type="transparent"
        class="w-full"
        onclick="qrisPayment.showModal()"
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
      </AtomsButton>
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

export default {
  name: "QrisPaymentMethod",
  components: {
    AtomsButton,
    PaymentMethodModal,
  },
  props: {
    totalAmount: Object,
  },
  setup() {
    const { formatPrice } = usePricingFormat();
    return { formatPrice };
  },
};
</script>
