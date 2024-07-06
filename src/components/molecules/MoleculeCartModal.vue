<template>
  <dialog :id="modalId" class="modal max-w-md mx-auto">
    <div class="modal-box flex flex-col gap-6">
      <div class="flex justify-between">
        <h3 class="text-lg font-bold">Order is Submitted</h3>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img src="../../assets/icon/submitted-icon.svg" alt="Order Submitted" />
        <p class="text-center leading-[20px]">
          We've received Your order list! <br />
          The chefs are cooking your order.
        </p>
      </div>
      <div class="flex gap-2">
        <RouterLink
          to="/bills"
          class="flex-1 ring ring-2 ring-inset ring-[#1AB394] text-[#08a384] hover:bg-[#08a384] hover:text-white hover:ring-0 flex items-center justify-center px-4 py-2 rounded-lg whitespace-nowrap"
        >
          Add More Order
        </RouterLink>
        <RouterLink
          to="/home"
          class="flex-1 bg-[#1AB394] text-white hover:bg-[#08a384] flex items-center justify-center px-4 py-2 rounded-lg whitespace-nowrap"
        >
          Home
        </RouterLink>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script>
import AtomsButton from "../atoms/AtomsButton.vue";
import { RouterLink } from "vue-router";

export default {
  name: "MoleculeCartModal",
  components: {
    AtomsButton,
  },
  props: {
    modalId: {
      type: String,
      required: true,
    },
  },
};
</script>
