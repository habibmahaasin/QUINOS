<template>
  <MoleculeCategoryModal modalId="category_modal" />

  <div
    class="fixed bottom-[4rem] z-40 w-[100vw] max-w-md pb-2 bg-white"
    v-if="customerData.order.length > 0"
  >
    <div class="w-full px-4 pt-2 flex">
      <AtomsButton
        @click="() => $router.push('/cart')"
        class="py-4 max-w-md w-full"
        type="primary"
      >
        <div class="flex justify-center items-center gap-1">
          <p>Cart</p>
          <div
            class="relative flex items-center justify-center text-black w-6 h-6 rounded-[100%] bg-white text-[14px]"
          >
            {{ customerData.order.length }}
          </div>
        </div>
      </AtomsButton>
    </div>
  </div>

  <div
    :style="bannerStyle"
    class="relative max-w-md z-0 banner-bg"
    id="main-content"
  >
    <img
      alt="Vue logo"
      src="../assets/banner/promo-banner.png"
      class="fixed inset-0 mx-auto w-full max-w-md object-cover mt-16"
      style="z-index: -1"
    />
  </div>
  <div
    class="bg-white -translate-y-16 min-h-[100vh] z-20 relative rounded-t-xl p-6"
  >
    <MoleculeProfile :name="customerData.name" :table="customerData.table" />
    <section class="mt-4 sticky top-28 bg-white pt-6 pb-2">
      <div class="flex gap-2 max-w-full">
        <label class="flex-1 input input-bordered flex items-center gap-4 py-0">
          <FontAwesomeIcon :icon="faSearch" class="text-base" />
          <input
            type="text"
            class="grow w-20"
            placeholder="Search category 1"
            @input="setSearch($event.target.value)"
          />
        </label>
        <AtomsButton type="primary" onclick="category_modal.showModal()">
          <FontAwesomeIcon :icon="faListDots" class="text-base" />
        </AtomsButton>
      </div>
      <div class="mt-4 flex flex-nowrap overflow-x-auto gap-2 mb-4">
        <AtomsButton
          type="primary"
          @click="() => scrollToCategory(`main-content`)"
        >
          All
        </AtomsButton>
        <template v-for="category in PRODUCT_LIST">
          <AtomsButton
            type="secondary"
            @click="() => scrollToCategory(category.slug)"
          >
            {{ category.name }}
          </AtomsButton>
        </template>
      </div>
    </section>
    <section class="mt-6">
      <h4 class="text-[18px] font-bold mb-4">Trending</h4>
      <div class="flex flex-nowrap gap-2 overflow-x-auto">
        <MoleculeSmallCard
          v-for="product in trendingProducts"
          :name="product.name"
          :price="product.price"
          :url="product.slug"
        />
      </div>
    </section>
    <section
      class="overflow-x-auto mt-6"
      v-for="category in PRODUCT_LIST"
      :key="category.id"
      :id="category.slug"
    >
      <h4 class="text-[18px] font-bold mb-4">
        {{ category.name }}
      </h4>
      <div class="flex flex-col gap-4">
        <MoleculeLargeCard
          v-for="product in category.product"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :desc="product.desc"
          :url="product.slug"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AtomsButton from "../components/atoms/AtomsButton.vue";
import MoleculeProfile from "../components/molecules/MoleculeProfile.vue";
import MoleculeSmallCard from "../components/molecules/MoleculeSmallCard.vue";
import MoleculeLargeCard from "../components/molecules/MoleculeLargeCard.vue";
import { faSearch, faListDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useImageResize } from "../hooks/useImageResize";
import MoleculeCategoryModal from "../components/molecules/MoleculeCategoryModal.vue";
import { useCustomerData } from "../hooks/useCustomerData";

const promoBanner = ref(null);
const { bannerStyle } = useImageResize(promoBanner);
const { customerData, trendingProducts, PRODUCT_LIST } = useCustomerData();

const setSearch = (value) => {
  console.log(value);
};

const scrollToCategory = (name) => {
  const categoryElement = document.getElementById(name);
  if (categoryElement) {
    const offsetTop = categoryElement.offsetTop + 200;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
