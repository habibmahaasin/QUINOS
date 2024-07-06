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

    const redirectToProduct = () => {
      router.push("/product-detail/" + props.url);
    };

    const formatPrice = (value) => {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    };

    return {
      redirectToProduct,
      formatPrice,
    };
  },
};
</script>
