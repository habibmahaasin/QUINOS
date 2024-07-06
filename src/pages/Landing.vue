<template>
  <div :style="bannerStyle" class="relative max-w-md z-0 banner-bg">
    <img
      ref="promoBanner"
      alt="Vue logo"
      src="../assets/banner/promo-banner.png"
      class="fixed inset-0 mx-auto w-full max-w-md object-cover"
      style="z-index: -1"
    />
  </div>
  <div
    class="bg-white -translate-y-16 z-20 relative rounded-xl shadow-xl p-6 mx-4 mt-4"
  >
    <section class="flex flex-col gap-4">
      <div class="flex gap-4 items-center">
        <img alt="Vue logo" src="../assets/logo/subwa.svg" class="h-8 flex-1" />
        <h1 class="flex-1 text-[20px] font-bold leading-[24px]">
          Subwa Family Restaurant
        </h1>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex gap-4 items-center">
          <FontAwesomeIcon :icon="faPhone" class="text-base" />
          <h1 class="flex-1 text-[16px] font-light leading-[24px]">
            0861-8291-8281
          </h1>
        </div>
        <div class="flex gap-4 items-center">
          <FontAwesomeIcon :icon="faClock" class="text-base" />
          <div class="flex-1 flex justify-between">
            <h1 class="text-[16px] font-light leading-[24px]">
              Tuesday 9AM - 9PM
            </h1>
            <FontAwesomeIcon :icon="faChevronDown" class="text-base" />
          </div>
        </div>
        <div class="flex gap-4">
          <FontAwesomeIcon :icon="faLocationDot" class="text-base mt-1" />
          <h1 class="flex-1 text-[16px] font-light leading-[24px]">
            Jl. Lorem ipsum doren, lorem, ipsum doren, ipsum doren
          </h1>
        </div>
      </div>
      <form class="flex flex-col gap-1 mt-2" @submit.prevent="submit">
        <label class="form-control w-full">
          <div class="label font-bold">
            <span class="label-text">Phone or WhatsApp number</span>
          </div>
          <input
            type="text"
            placeholder="08XX-XXXX-XXXX"
            class="input input-bordered w-full"
            v-model="customerData.phone"
            @input="updateCustomerData('phone')"
          />
        </label>
        <label class="form-control w-full">
          <div class="label font-bold">
            <span class="label-text">Customer Name</span>
          </div>
          <input
            type="text"
            placeholder="Name"
            class="input input-bordered w-full"
            v-model="customerData.name"
            @input="updateCustomerData('name')"
          />
        </label>
        <AtomsButton type="primary" class="w-full mt-4"> Next </AtomsButton>
      </form>
      <div class="flex justify-center">
        <h6>Powered by <b>QUINOS</b></h6>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useImageResize } from "../hooks/useImageResize";
import AtomsButton from "../components/atoms/AtomsButton.vue";
import {
  faChevronDown,
  faPhone,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useCustomerStore } from "../stores/customer";

const router = useRouter();
const promoBanner = ref(null);
const { bannerStyle } = useImageResize(promoBanner);

const customerStore = useCustomerStore();
const setCustomerData = customerStore.setCustomerData;
const customerData = computed(() => customerStore.data);

const updateCustomerData = (key, value) => {
  setCustomerData({
    ...customerData.value,
    [value]: customerData.value[value],
  });
};

const submit = () => {
  router.push("/home");
};
</script>
