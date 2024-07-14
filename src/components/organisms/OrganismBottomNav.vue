<script setup>
import {
  faUtensils,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="btm-nav z-20 max-w-md mx-auto">
    <RouterLink to="/" active-class="active border-primary text-primary">
      <FontAwesomeIcon :icon="faUtensils" class="text-[18px]" />
      <p class="text-[12px]">Menu</p>
    </RouterLink>
    <RouterLink
      to="/bills"
      exact-active-class="active border-primary text-primary"
    >
      <FontAwesomeIcon :icon="faFileInvoiceDollar" class="text-[18px]" />
      <p class="text-[12px]">Bills</p>
    </RouterLink>
  </div>
</template>

<style scoped></style>
