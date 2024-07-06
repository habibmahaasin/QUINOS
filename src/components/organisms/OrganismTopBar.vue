<script setup>
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";

const props = defineProps({
  msg: {
    type: String,
    default: "Hello World",
  },
});

const router = useRouter();
const previousRoute = ref(null);

onBeforeMount(() => {
  previousRoute.value = router.options.history.state.back || "/";
});

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div class="navbar bg-base-100 fixed max-w-md z-40 px-6">
    <div class="flex-1">
      <button @click="goBack">
        <FontAwesomeIcon :icon="faChevronLeft" class="text-lg" />
      </button>
    </div>
    <div class="flex-none">
      <img alt="Vue logo" src="../../assets/logo/subwa.svg" class="h-8" />
    </div>
  </div>
</template>

<style scoped></style>
