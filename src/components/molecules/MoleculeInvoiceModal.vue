<template>
  <dialog :id="modalId" class="modal max-w-md mx-auto">
    <div class="modal-box">
      <form @submit.prevent="handleSubmit">
        <button
          type="button"
          class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          @click="closeModal"
        >
          ✕
        </button>
        <h3 class="text-lg font-bold">Invoice</h3>
        <p class="py-4">
          Enter your WhatsApp number to receive order status updates.
        </p>
        <div class="form-control w-full">
          <div class="label font-bold">
            <span class="label-text">Email for Invoice</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            class="input input-bordered w-full"
            v-model="customerData.payment.email"
            @input="updateCustomerData('payment.email')"
            required
          />
          <div class="flex justify-between">
            <AtomsButton type="primary" class="w-full mt-4"> Next </AtomsButton>
          </div>
        </div>
      </form>
    </div>
  </dialog>
</template>

<script>
import { useRouter } from "vue-router";
import AtomsButton from "../atoms/AtomsButton.vue";
import { useCustomerData } from "../../hooks/useCustomerData";

export default {
  name: "MoleculeInvoiceModal",
  components: {
    AtomsButton,
  },
  props: {
    modalId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const { customerData, updateCustomerData } = useCustomerData();

    const handleSubmit = () => {
      router.push("/payment");
    };

    const closeModal = () => {
      document.getElementById(props.modalId).close();
    };

    return {
      customerData,
      updateCustomerData,
      handleSubmit,
      closeModal,
    };
  },
};
</script>
