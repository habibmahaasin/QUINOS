<template>
  <dialog :id="modalId" class="modal max-w-md mx-auto">
    <div class="modal-box flex flex-col gap-6">
      <div class="flex justify-between">
        <h3 class="text-lg font-bold">{{ title }}</h3>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img src="../../assets/icon/submitted-icon.svg" alt="Order Submitted" />
        <p class="text-center leading-[20px] w-9/12">
          {{ desc }}
        </p>
      </div>
      <slot></slot>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script>
import AtomsButton from "../atoms/AtomsButton.vue";

export default {
  name: "MoleculeConfirmationModal",
  components: {
    AtomsButton,
  },
  props: {
    modalId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "Order is Submitted",
    },
    desc: {
      type: String,
      default:
        "We've received Your order list! The chefs are cooking your order.",
    },
  },
};
</script>
