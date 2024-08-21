import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customer", {
  state: () => ({
    data: {
      name: "",
      phone: "",
      table: "A-1",
      payment: {
        method: "ovo",
        email: "",
        phone: "",
      },
      order: [],
    },
  }),
  actions: {
    setCustomerData(data) {
      const formatPhone = (phone) => {
        phone = phone.replace(/(?!^\+)\D/g, "");
        if (phone.startsWith("0")) {
          phone = "+62" + phone.substring(1);
        }
        if (!phone.startsWith("+62") && phone.startsWith("+")) {
          phone = "+" + phone.substring(1, 16);
        }
        if (phone.length > 16) {
          phone = phone.substring(0, 16);
        }
        return phone;
      };

      data.phone = formatPhone(data.phone);
      data.payment.phone = formatPhone(data.payment.phone);
      this.data = data;
    },
    addOrder(order) {
      this.data.order.push(order);
    },
    updateOrder(index, order) {
      this.data.order[index] = order;
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
