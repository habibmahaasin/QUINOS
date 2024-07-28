<template>
  <MoleculeCategoryModal modalId="category_modal" />
  <div
    class="fixed bottom-[4rem] z-40 w-[100vw] max-w-md pb-2 bg-white"
    v-if="customerData.order.length > 0"
  >
    <div class="w-full px-4 pt-2 flex">
      <AtomsButton
        @click="() => $router.push('/cart')"
        class="py-4 max-w-md w-full relative"
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
        <FontAwesomeIcon
          :icon="faArrowAltCircleRight"
          class="text-[1.5rem] absolute right-4 top-4"
        />
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
    class="bg-white -translate-y-16 min-h-[95vh] z-20 relative rounded-t-xl p-6"
    :class="customerData.order.length > 0 ? 'pb-24' : 'pb-8'"
  >
    <MoleculeProfile :name="customerData.name" :table="customerData.table" />
    <section class="mt-4 sticky top-28 bg-white pt-6 pb-2">
      <div class="flex gap-2 max-w-full">
        <label class="flex-1 input input-bordered flex items-center gap-4 py-0">
          <FontAwesomeIcon :icon="faSearch" class="text-base" />
          <input
            type="text"
            class="grow w-20"
            placeholder="Search Products"
            @input="setSearch($event.target.value)"
          />
        </label>
        <AtomsButton type="primary" onclick="category_modal.showModal()">
          <FontAwesomeIcon :icon="faListDots" class="text-base" />
        </AtomsButton>
      </div>
      <div
        class="mt-4 flex flex-nowrap overflow-x-auto gap-2 mb-4"
        v-if="products.onSearch == false"
      >
        <AtomsButton
          :type="selectedCategory == 'all' ? 'primary' : 'secondary'"
          @click="
            () => {
              scrollToCategory(`main-content`);
              onChangeCategory(`all`);
            }
          "
        >
          All
        </AtomsButton>
        <template v-for="category in products.value">
          <AtomsButton
            :type="selectedCategory == category.slug ? 'primary' : 'secondary'"
            @click="
              () => {
                scrollToCategory(category.slug);
              }
            "
          >
            {{ category.name }}
          </AtomsButton>
        </template>
      </div>
    </section>
    <div
      v-if="products.value.length == 0"
      class="h-[50vh] flex items-center justify-center"
    >
      <div class="flex flex-col items-center text-center gap-4">
        <img src="../assets/icon/not-found.svg" alt="Empty" class="h-auto" />
        <p class="leading-[18px]">
          Not Found<br />
          <b>Try different word</b>
        </p>
      </div>
    </div>
    <section class="mt-0" v-if="products.onSearch == false">
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
      v-for="category in products.value"
      :key="category.id"
      :id="category.slug"
      ref="categoryRefs"
      :data-slug="category.slug"
    >
      <h4 class="text-[18px] font-bold mb-4" v-if="products.onSearch == false">
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
import { ref, onMounted } from "vue";
import AtomsButton from "../components/atoms/AtomsButton.vue";
import MoleculeProfile from "../components/molecules/MoleculeProfile.vue";
import MoleculeSmallCard from "../components/molecules/MoleculeSmallCard.vue";
import MoleculeLargeCard from "../components/molecules/MoleculeLargeCard.vue";
import {
  faSearch,
  faListDots,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useImageResize } from "../hooks/useImageResize";
import MoleculeCategoryModal from "../components/molecules/MoleculeCategoryModal.vue";
import { useCustomerData } from "../hooks/useCustomerData";
import { useHead } from "@vueuse/head";

const promoBanner = ref(null);
const { bannerStyle } = useImageResize(promoBanner);
const { customerData, trendingProducts, PRODUCT_LIST } = useCustomerData();
const selectedCategory = ref("all");

const products = ref({
  onSearch: false,
  value: PRODUCT_LIST,
});

const categoryRefs = ref([]);

const onChangeCategory = (category) => {
  selectedCategory.value = category;
};

const setSearch = (value) => {
  const filteredProducts = PRODUCT_LIST.map((category) => {
    const filteredCategory = {
      ...category,
      product: category.product.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      ),
    };
    return filteredCategory;
  }).filter((category) => category.product.length > 0);

  products.value.value = filteredProducts;
  if (value) {
    products.value.onSearch = true;
  } else {
    products.value.onSearch = false;
  }
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

const observeCategories = () => {
  const options = {
    root: null,
    rootMargin: "-30% 0px 0px 0px",
    threshold: 0.1,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onChangeCategory(entry.target.dataset.slug);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  categoryRefs.value.forEach((el) => {
    observer.observe(el);
  });
};

onMounted(() => {
  observeCategories();
});

useHead({
  title: "Home",
  meta: [{ name: "description", content: "description for Home Pages" }],
});
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
