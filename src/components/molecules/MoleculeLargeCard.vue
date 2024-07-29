<template>
  <div class="w-full">
    <div class="flex flex-row gap-2">
      <img
        src="../../assets/product/product-1.png"
        alt="Vue logo"
        class="w-36 flex-0"
      />
      <div class="flex-1 flex flex-col gap-2 justify-between">
        <div class="text-[16px]">
          <p class="font-bold line-clamp-1">{{ name }}</p>
          <p class="mb-1">{{ desc }}</p>
          <p v-if="discount == 0">{{ formatPrice(price) }}</p>
          <div v-else-if="discount != 0">
            <p class="-mb-1 font-bold">
              {{ formatPrice(price - (price * discount) / 100) }}
            </p>
            <s class="text-light">{{ formatPrice(price) }}</s>
            <span class="text-[#EB5757] ml-2">{{ discount }}%</span>
          </div>
        </div>
        <AtomsButton type="primary" class="w-full" @click="redirectToProduct">
          Add
        </AtomsButton>
      </div>
    </div>
  </div>
</template>

<script>
import usePricingFormat from "../../hooks/usePricingFormat";
import AtomsButton from "../atoms/AtomsButton.vue";
import { useRouter } from "vue-router";

export default {
  name: "MoleculeLargeCard",
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
    discount: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
      default: "Short description",
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
