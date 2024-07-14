<script setup>
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import MoleculeConfirmationModal from "../molecules/MoleculeConfirmationModal.vue";

const props = defineProps({
  msg: {
    type: String,
    default: "Hello World",
  },
});

const router = useRouter();
const route = useRoute();
const previousRoute = ref(null);

onBeforeMount(() => {
  previousRoute.value = router.options.history.state.back || "/";
});

const goBack = () => {
  if (route.path == "/bills" || route.path == "/cart") {
    router.push("/");
  } else if (route.path == "/payment") {
    router.push("/bills");
  } else {
    router.push(previousRoute.value);
  }
};

const logout = () => {
  localStorage.removeItem("customer-store");
  window.location.href = "/";
};
</script>

<template>
  <MoleculeConfirmationModal
    modalId="logout_modal"
    title="Logout Confirmation"
    desc="Are you sure you want to log out? Your order data will be deleted."
  >
    <div class="flex gap-2">
      <form method="dialog" class="flex-1">
        <button
          class="w-full ring ring-2 ring-inset ring-[#1AB394] text-[#08a384] hover:bg-[#08a384] hover:text-white hover:ring-0 flex items-center justify-center px-4 py-2 rounded-lg whitespace-nowrap"
        >
          Cancel
        </button>
      </form>
      <button
        @click="logout"
        class="flex-1 bg-[#1AB394] text-white hover:bg-[#08a384] flex items-center justify-center px-4 py-2 rounded-lg whitespace-nowrap"
      >
        Logout
      </button>
    </div>
  </MoleculeConfirmationModal>
  <div class="navbar bg-base-100 fixed max-w-md z-40 px-6">
    <div class="flex-1">
      <button @click="goBack" v-if="route.path != '/'">
        <FontAwesomeIcon :icon="faChevronLeft" class="text-lg" />
      </button>
      <button onclick="logout_modal.showModal()" v-if="route.path == '/'">
        <FontAwesomeIcon :icon="faChevronLeft" class="text-lg" />
      </button>
    </div>
    <div class="flex-none">
      <img alt="Vue logo" src="../../assets/logo/subwa.svg" class="h-8" />
    </div>
  </div>
</template>

<style scoped></style>
