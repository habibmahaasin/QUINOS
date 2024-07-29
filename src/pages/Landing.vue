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
        <label class="form-control w-full border-b-[1px] pb-6 mb-2">
          <div class="label font-bold">
            <span class="label-text">Choose Order Type</span>
          </div>
          <div class="flex gap-2 cursor-pointer">
            <button
              type="button"
              @click="
                setCustomerData({
                  ...customerData,
                  order_type: {
                    ...customerData.order_type,
                    type: 'Pick Up',
                  },
                })
              "
              class="h-32 w-full rounded-xl shadow-xl border border-[1px] flex items-center justify-center p-4"
              :class="
                customerData.order_type.type === 'Pick Up'
                  ? 'bg-[#DFFFF8]'
                  : 'bg-[#ffffff]'
              "
            >
              <div class="text-center flex flex-col gap-2 font-bold">
                <img
                  alt="Vue logo"
                  src="../assets/icon/pick-up.svg"
                  class="h-16"
                />
                Pick Up
              </div>
            </button>
            <button
              type="button"
              @click="
                setCustomerData({
                  ...customerData,
                  order_type: {
                    ...customerData.order_type,
                    type: 'Take Away',
                  },
                })
              "
              class="h-32 w-full rounded-xl shadow-xl border border-[1px] flex items-center justify-center p-4"
              :class="
                customerData.order_type.type === 'Take Away'
                  ? 'bg-[#DFFFF8]'
                  : 'bg-[#ffffff]'
              "
            >
              <div class="text-center flex flex-col gap-2 font-bold">
                <img
                  alt="Vue logo"
                  src="../assets/icon/take-away.svg"
                  class="h-16"
                />
                Take Away
              </div>
            </button>
          </div>
        </label>
        <label
          class="form-control w-full mb-2"
          v-if="customerData.order_type.type === 'Pick Up'"
        >
          <div class="label font-bold mb-2">
            <span class="label-text">Pick up Time</span>
          </div>
          <div class="font-bold flex gap-2 items-center mb-2">
            <input
              type="number"
              class="input input-bordered w-12 !pl-0 text-center"
              min="1"
              max="12"
              maxlength="2"
              @input="validateInput($event, 'hour')"
              required
            />
            :
            <input
              type="number"
              class="input input-bordered w-12 !pl-0 text-center"
              min="0"
              max="59"
              maxlength="2"
              @input="validateInput($event, 'minute')"
              required
            />
            <div role="tablist" class="tabs tabs-boxed">
              <a
                role="tab"
                class="tab h-10"
                :class="{ 'tab-active !bg-primary !text-white': isAm }"
                @click="setAmPm('AM')"
                >AM</a
              >
              <a
                role="tab"
                class="tab h-10"
                :class="{ 'tab-active !bg-primary !text-white': !isAm }"
                @click="setAmPm('PM')"
                >PM</a
              >
            </div>
          </div>
          <span
            v-if="operatingHours === false"
            class="text-[#FF000099]/75 font-light text-sm"
            >Please check the operating hours.</span
          >
        </label>
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
const { customerData, updateCustomerData, setCustomerData } = useCustomerData();

const schedule = [
  { day: "Monday", time: "9AM - 9PM" },
  { day: "Tuesday", time: "9AM - 9PM" },
  { day: "Wednesday", time: "9AM - 9PM" },
  { day: "Thursday", time: "9AM - 9PM" },
  { day: "Friday", time: "9AM - 9PM" },
  { day: "Saturday", time: "9AM - 9PM" },
  { day: "Sunday", time: "9AM - 9PM" },
];

const submit = () => {
  router.push("/");
};

let hour = "";
let minute = "";
const isAm = ref(true);
const operatingHours = ref(true);

const validateInput = (event, type) => {
  const input = event.target;

  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }

  if (input.value < 0) {
    input.value = 0;
  }

  if (type === "hour") {
    if (input.value > 12) {
      input.value = 12;
    }
    hour = input.value;
  } else if (type === "minute") {
    if (input.value > 59) {
      input.value = 59;
    }
    minute = input.value;
  }

  if (hour !== "" && minute !== "") {
    setPickupData();
    operatingHoursCheck();
  }
};

const setAmPm = (period) => {
  isAm.value = period === "AM";
  if (hour !== "" && minute !== "") {
    setPickupData();
    operatingHoursCheck();
  }
};

const operatingHoursCheck = () => {
  if ((hour < 9 && isAm.value) || (hour >= 9 && !isAm.value)) {
    operatingHours.value = false;
  } else {
    operatingHours.value = true;
  }
};

const setPickupData = () => {
  setCustomerData({
    ...customerData.value,
    order_type: {
      ...customerData.value.order_type,
      time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(
        2,
        "0"
      )} ${isAm.value ? "AM" : "PM"}`,
    },
  });
};

useHead({
  title: "Login",
  meta: [{ name: "description", content: "description for Login Pages" }],
});
</script>
