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
        <div class="flex gap-4 items-start">
          <FontAwesomeIcon :icon="faClock" class="text-base mt-1" />
          <div class="flex-1 flex justify-between">
            <div class="collapse collapse-arrow -mt-4 -mb-4">
              <input type="checkbox" />
              <div
                class="collapse-title !pl-0 pb-0 text-[16px] font-light leading-[24px]"
              >
                Tuesday 9AM - 9PM
              </div>
              <div
                class="!pl-0 collapse-content pt-0 -mt-2 flex flex-col gap-2 mb-4"
              >
                <div
                  class="flex justify-between items-center"
                  v-for="items in schedule"
                >
                  <p>{{ items.day }}</p>
                  <p>{{ items.time }}</p>
                </div>
              </div>
            </div>
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
            required
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
            required
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
import { ref } from "vue";
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
import { useCustomerData } from "../hooks/useCustomerData";
import { useHead } from "@vueuse/head";

const router = useRouter();
const promoBanner = ref(null);
const { bannerStyle } = useImageResize(promoBanner);
const { customerData, updateCustomerData } = useCustomerData();

const schedule = [
  {
    day: "Monday",
    time: "9AM - 9PM",
  },
  {
    day: "Tuesday",
    time: "9AM - 9PM",
  },
  {
    day: "Wednesday",
    time: "9AM - 9PM",
  },
  {
    day: "Thursday",
    time: "9AM - 9PM",
  },
  {
    day: "Friday",
    time: "9AM - 9PM",
  },
  {
    day: "Saturday",
    time: "9AM - 9PM",
  },
  {
    day: "Sunday",
    time: "9AM - 9PM",
  },
];

const submit = () => {
  router.push("/");
};

useHead({
  title: "Login",
  meta: [{ name: "description", content: "description for Login Pages" }],
});
</script>
