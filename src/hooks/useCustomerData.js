import { computed } from "vue";
import { useCustomerStore } from "../stores/customer";
import { PRODUCT_LIST } from "../utils/constant/productList";

export const useCustomerData = () => {
  const customerStore = useCustomerStore();
  const setCustomerData = customerStore.setCustomerData;
  const customerData = computed(() => customerStore.data);

  const trendingProducts = PRODUCT_LIST.flatMap((category) =>
    category.product.filter((product) => product.trending)
  );

  const updateCustomerData = (key, value) => {
    setCustomerData({
      ...customerData.value,
      [value]: customerData.value[value],
    });
  };

  return {
    customerData,
    updateCustomerData,
    trendingProducts,
    PRODUCT_LIST,
  };
};
