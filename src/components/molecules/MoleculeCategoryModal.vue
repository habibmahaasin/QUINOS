<template>
  <dialog :id="modalId" class="modal max-w-md mx-auto">
    <div class="modal-box flex flex-col gap-6">
      <div class="flex justify-between">
        <h3 class="text-lg font-bold">Category</h3>
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost">✕</button>
        </form>
      </div>
      <div class="flex gap-2">
        <AtomsButton type="secondary">Beverage</AtomsButton>
        <AtomsButton type="primary">A-Z</AtomsButton>
      </div>
      <div class="flex flex-col gap-6">
        <div
          v-for="category in PRODUCT_LIST"
          :key="category.id"
          class="flex justify-between"
        >
          <p>{{ category.name }}</p>
          <p>({{ PRODUCT_LIST.length }})</p>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
import AtomsButton from "../atoms/AtomsButton.vue";
import { PRODUCT_LIST } from "../../utils/constant/productList";

export default {
  name: "MoleculeCategoryModal",
  components: {
    AtomsButton,
  },
  props: {
    modalId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      PRODUCT_LIST,
    };
  },
};
</script>
