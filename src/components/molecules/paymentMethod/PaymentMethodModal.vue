<template>
  <dialog :id="modalId" class="modal max-w-md mx-auto">
    <div class="modal-box flex flex-col gap-6">
      <div class="flex justify-between">
        <h3 class="text-lg font-bold">QRIS Payment Instructions</h3>
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost">✕</button>
        </form>
      </div>
      <div class="flex flex-col gap-2" v-if="instructions">
        <div
          class="flex gap-2"
          v-for="(step, index) in instructions"
          :key="index"
        >
          <p>{{ index + 1 }}.</p>
          <p>{{ step }}</p>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
import { PAYMENT_INSTRUCTION } from "../../../utils/constant/paymentInstruction";

export default {
  name: "PaymentMethodModal",
  props: {
    modalId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      instructions: null,
    };
  },
  created() {
    const paymentMethod = PAYMENT_INSTRUCTION.find(
      (instruction) => instruction.method === this.modalId
    );
    if (paymentMethod) {
      this.instructions = paymentMethod.instruction;
    }
  },
};
</script>
