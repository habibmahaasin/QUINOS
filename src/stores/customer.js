import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customer", {
  state: () => ({
    data: {
      name: "",
      phone: "",
      table: "A-1",
      order: [],
    },
  }),
  actions: {
    setCustomerData(data) {
      this.data = data;
    },
    addOrder(order) {
      this.data.order.push(order);
    },
    removeOrder(index) {
      this.data.order.splice(index, 1);
    },
    clearOrder() {
      this.data.order = [];
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "customer-store",
        storage: localStorage,
      },
    ],
  },
});
