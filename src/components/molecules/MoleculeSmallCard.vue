<template>
  <div class="min-w-36">
    <div class="flex flex-col gap-2">
      <img
        src="../../assets/product/product-1.png"
        alt="Vue logo"
        class="w-full"
      />
      <div class="text-[14px]">
        <p class="font-bold">{{ name }}</p>
        <p>{{ formatPrice(price) }}</p>
      </div>
      <AtomsButton type="primary" @click="redirectToProduct"> Add </AtomsButton>
    </div>
  </div>
</template>

<script>
import usePricingFormat from "../../hooks/usePricingFormat";
import AtomsButton from "../atoms/AtomsButton.vue";
import { useRouter } from "vue-router";

export default {
  name: "MoleculeSmallCard",
  components: {
    AtomsButton,
  },
  props: {
    name: {
      type: String,
      default: "New Product",
    },
    price: {
      type: Number,
      default: 10000,
    },
    url: {
      type: String,
      default: "/",
    },
  },
  setup(props) {
    const router = useRouter();
    const { formatPrice } = usePricingFormat();

    const redirectToProduct = () => {
      router.push("/product-detail/" + props.url);
    };

    return {
      redirectToProduct,
      formatPrice,
    };
  },
};
</script>
