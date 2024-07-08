<template>
  <div class="relative">
    <div :style="bannerStyle" class="relative max-w-md z-0 banner-bg">
      <img
        ref="promoBanner"
        alt="Vue logo"
        src="../assets/product/product-detail.png"
        class="fixed inset-0 mx-auto w-full max-w-md object-cover"
        style="z-index: -1"
      />
    </div>
    <FontAwesomeIcon
      @click="back"
      :icon="faChevronLeft"
      class="hover:cursor-pointer z-20 rounded-[100%] bg-white px-3 py-2 text-black fixed top-4 ml-4 shadow-xl text-[18px]"
    />
  </div>
  <div class="bg-white relative p-6">
    <section class="flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <h1 class="text-xl font-bold">{{ selectedProduct.name }}</h1>
        <h6 class="text-base text-gray-500">{{ selectedProduct.desc }}</h6>
        <div
          class="border-b-2 pb-4 border-dashed"
          v-if="selectedProduct.discount != 0"
        >
          <p class="text-base font-bold">
            {{
              formatPrice(
                selectedProduct.price -
                  (selectedProduct.price * selectedProduct.discount) / 100
              )
            }}
          </p>
          <div class="flex gap-2">
            <p class="text-base line-through">
              {{ formatPrice(selectedProduct.price) }}
            </p>
            <span class="text-[#EB5757]">{{ selectedProduct.discount }}%</span>
          </div>
        </div>
        <div
          class="border-b-2 pb-4 border-dashed"
          v-if="selectedProduct.discount === 0"
        >
          <p class="text-base font-bold">
            {{ formatPrice(selectedProduct.price) }}
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4" v-for="addition in additionData">
        <h1 class="text-xl font-bold">{{ addition.name }}</h1>
        <div class="border-b-2 pb-4 border-dashed flex flex-col gap-4">
          <div
            class="flex justify-between items-center"
            v-for="data in addition.data"
          >
            <p class="text-base">{{ data.name }}</p>
            <div class="flex gap-2 items-center">
              {{ formatPrice(data.price) }}
              <input
                v-if="addition.type == `multiple`"
                type="checkbox"
                class="checkbox"
                :value="data.id"
                @change="addAddition(data, addition)"
              />
              <input
                v-if="addition.type == `single`"
                type="radio"
                name="radio-1"
                class="radio"
                :value="data.id"
                @change="addAddition(data, addition)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="border-b-2 pb-8 border-dashed flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <p class="text-base">Note</p>
            <div class="flex gap-2 items-center">0/20</div>
          </div>
          <label class="input input-bordered flex items-center gap-2">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8466 5.9993C17.6616 5.61259 17.4009 5.26689 17.0799 4.98263L14.5799 2.71596C14.0297 2.21159 13.331 1.89879 12.5883 1.8243H7.45495C6.90291 1.80089 6.35174 1.88751 5.83349 2.07912C5.31525 2.27072 4.84029 2.56349 4.43626 2.94038C4.03223 3.31727 3.70719 3.77076 3.48006 4.27445C3.25293 4.77814 3.12826 5.32197 3.11328 5.8743V14.4576C3.14276 15.2906 3.42136 16.0955 3.91307 16.7685C4.40479 17.4414 5.08702 17.9514 5.87161 18.2326C6.38195 18.4256 6.92674 18.5107 7.47161 18.4826H13.7716C14.3237 18.5063 14.875 18.4198 15.3933 18.2283C15.9117 18.0368 16.3867 17.744 16.7908 17.3671C17.1949 16.9901 17.5199 16.5366 17.747 16.0328C17.974 15.529 18.0985 14.985 18.1133 14.4326V7.29096C18.1173 6.84634 18.0264 6.40598 17.8466 5.9993ZM7.01328 5.66596H9.72995C9.95096 5.66596 10.1629 5.75376 10.3192 5.91004C10.4755 6.06632 10.5633 6.27828 10.5633 6.4993C10.5633 6.72031 10.4755 6.93227 10.3192 7.08855C10.1629 7.24483 9.95096 7.33263 9.72995 7.33263H7.01328C6.79227 7.33263 6.58031 7.24483 6.42403 7.08855C6.26775 6.93227 6.17995 6.72031 6.17995 6.4993C6.17995 6.27828 6.26775 6.06632 6.42403 5.91004C6.58031 5.75376 6.79227 5.66596 7.01328 5.66596ZM14.2633 14.591H7.01328C6.79227 14.591 6.58031 14.5032 6.42403 14.3469C6.26775 14.1906 6.17995 13.9786 6.17995 13.7576C6.17995 13.5366 6.26775 13.3247 6.42403 13.1684C6.58031 13.0121 6.79227 12.9243 7.01328 12.9243H14.2633C14.4619 12.9526 14.6437 13.0516 14.7752 13.2032C14.9067 13.3547 14.9791 13.5487 14.9791 13.7493C14.9791 13.9499 14.9067 14.1439 14.7752 14.2954C14.6437 14.447 14.4619 14.546 14.2633 14.5743V14.591ZM14.2633 10.966H7.01328C6.79227 10.966 6.58031 10.8782 6.42403 10.7219C6.26775 10.5656 6.17995 10.3536 6.17995 10.1326C6.17995 9.91162 6.26775 9.69966 6.42403 9.54338C6.58031 9.3871 6.79227 9.2993 7.01328 9.2993H14.2633C14.4843 9.2993 14.6963 9.3871 14.8525 9.54338C15.0088 9.69966 15.0966 9.91162 15.0966 10.1326C15.0966 10.3536 15.0088 10.5656 14.8525 10.7219C14.6963 10.8782 14.4843 10.966 14.2633 10.966ZM13.9966 6.3243C13.8777 6.3254 13.7598 6.30293 13.6496 6.2582C13.5395 6.21346 13.4393 6.14734 13.3548 6.06366C13.2704 5.97998 13.2033 5.88039 13.1576 5.77065C13.1118 5.66091 13.0883 5.54319 13.0883 5.4243V3.21596C13.6383 3.3493 15.7799 5.5493 16.2466 5.91596C16.3846 6.03223 16.5028 6.17014 16.5966 6.3243H13.9966Z"
                fill="#707986"
              />
            </svg>
            <input type="text" class="grow" placeholder="Example : no spicy" />
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <AtomsButton type="primary" class="w-full py-[11px]"> - </AtomsButton>
          <input
            type="text"
            placeholder="Total"
            value="1"
            class="input input-bordered w-full text-center"
          />
          <AtomsButton type="primary" class="w-full py-[11px]"> + </AtomsButton>
        </div>
      </div>
      <button class="btn btn-primary" @click="updateCustomerOrder">
        Add to Cart
      </button>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useImageResize } from "../hooks/useImageResize";
import AtomsButton from "../components/atoms/AtomsButton.vue";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { PRODUCT_LIST } from "../utils/constant/productList";
import { ADDITION_LIST } from "../utils/constant/additionList";
import { useCustomerStore } from "../stores/customer";

const router = useRouter();
const route = useRoute();

const promoBanner = ref(null);
const { bannerStyle } = useImageResize(promoBanner);

const slug = route.params.slug;
const productArray = PRODUCT_LIST.flatMap((category) =>
  category.product.filter((product) => product.slug === slug)
);
const selectedProduct = productArray[0];
const additionData = selectedProduct.addition.flatMap((addition) => {
  return ADDITION_LIST.filter((add) => add.id === addition);
});

const formatPrice = (value) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
};

const customerStore = useCustomerStore();
const addOrder = customerStore.addOrder;

const addition = ref([]);

const addAddition = (value, type) => {
  const additiondata = type.data.find((data) => data.id === value.id);

  const mergeData = {
    categoryName: type.name,
    type: type.type,
    additiondata,
  };

  if (type.type === "single") {
    const existingIndex = addition.value.findIndex(
      (data) => data.categoryName === type.name && data.type === "single"
    );

    if (existingIndex !== -1) {
      addition.value[existingIndex] = mergeData;
    } else {
      addition.value.push(mergeData);
    }
  } else {
    const existingIndex = addition.value.findIndex(
      (data) => data.additiondata.id === value.id && data.type === "multiple"
    );

    if (existingIndex !== -1) {
      addition.value.splice(existingIndex, 1);
    } else {
      addition.value.push(mergeData);
    }
  }
};

const updateCustomerOrder = () => {
  addOrder({
    id: selectedProduct.id,
    name: selectedProduct.name,
    price:
      selectedProduct.discount == 0
        ? selectedProduct.price
        : selectedProduct.price -
          (selectedProduct.price * selectedProduct.discount) / 100,
    quantity: 1,
    note: "",
    addition: addition.value,
  });
  router.push("/home");
};

const back = () => {
  router.push("/home");
};
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
