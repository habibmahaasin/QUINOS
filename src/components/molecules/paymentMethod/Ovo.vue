<template>
  <section
    class="flex flex-col gap-4 h-screen relative items-center justify-center"
  >
    <div
      class="flex flex-col gap-6 items-center justify-center -translate-y-16"
    >
      <h1 class="text-xl font-bold">Payment Verification</h1>
      <img src="../../../assets/payment/ovo.png" class="w-8" />
      <p class="text-center text-sm w-10/12">
        Click “Check Payment Status” to manually refresh your payment status
        every 30 seconds. The maximum check time is 5 minutes or 300 seconds.
      </p>
      <p class="text-[#AC0000]">
        The remaining payment time is {{ formattedTime }}.
      </p>
    </div>
    <div class="absolute bottom-4 w-full">
      <RouterLink to="/invoice" class="btn btn-secondary w-full my-1"
        >Check Payment Status</RouterLink
      >
      <RouterLink to="/payment" class="btn btn-primary w-full my-1"
        >Choose Method Payment</RouterLink
      >
      <div class="flex justify-center pt-8">
        <h6>Powered by <b>QUINOS</b></h6>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "OvoPaymentMethod",
  components: {},
  setup() {
    const remainingTime = ref(300); // Initial time in seconds (5 minutes)

    const formattedTime = ref(formatTime(remainingTime.value));

    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
      ).padStart(2, "0")}`;
    }

    const updateTimer = () => {
      if (remainingTime.value > 0) {
        remainingTime.value--;
        formattedTime.value = formatTime(remainingTime.value);
      }
    };

    let timerInterval;

    onMounted(() => {
      timerInterval = setInterval(updateTimer, 1000);
    });

    onUnmounted(() => {
      clearInterval(timerInterval);
    });

    return {
      formattedTime,
    };
  },
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
