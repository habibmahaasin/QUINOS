import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCustomerStore } from "../stores/customer";
import { PRODUCT_LIST } from "../utils/constant/productList";
import { ADDITION_LIST } from "../utils/constant/additionList";

export const useCustomerOrder = () => {
  const customerStore = useCustomerStore();
  const router = useRouter();
  const addition = ref([]);
  const quantity = ref(1);
  const notes = ref("");
  const route = useRoute();
  const slug = route.params.slug;

  const selectedProduct = computed(() =>
    PRODUCT_LIST.flatMap((category) => category.product).find(
      (product) => product.slug === slug
    )
  );

  const additionData = computed(() =>
    ADDITION_LIST.filter((add) =>
      selectedProduct.value.addition.includes(add.id)
    )
  );

  const addAddition = (value, type) => {
    const additiondata = type.data.find((data) => data.id === value.id);
    const mergeData = {
      categoryName: type.name,
      type: type.type,
      additiondata,
    };

    if (type.type === "single") {
      const existingIndex = addition.value.findIndex(
        (data) => data.categoryName === type.name && data.type === "single"
      );
      if (existingIndex !== -1) {
        addition.value[existingIndex] = mergeData;
      } else {
        addition.value.push(mergeData);
      }
    } else {
      const existingIndex = addition.value.findIndex(
        (data) => data.additiondata.id === value.id && data.type === "multiple"
      );
      if (existingIndex !== -1) {
        addition.value.splice(existingIndex, 1);
      } else {
        addition.value.push(mergeData);
      }
    }
  };

  const changeQuantity = (value) => {
    if (value === "increase") {
      if (quantity.value < selectedProduct.value.stock) {
        quantity.value += 1;
      } else {
        quantity.value = selectedProduct.value.stock;
      }
    } else if (value === "decrease") {
      if (quantity.value > 1) {
        quantity.value -= 1;
      }
    } else {
      if (parseInt(value) < 1) {
        quantity.value = 1;
      } else if (parseInt(value) > selectedProduct.value.stock) {
        quantity.value = selectedProduct.value.stock;
      } else {
        quantity.value = parseInt(value);
      }
    }
  };

  const changeNotes = (value) => {
    notes.value = value;
  };

  const updateCustomerOrder = () => {
    const { id, name, price, discount } = selectedProduct.value;
    customerStore.addOrder({
      id,
      name,
      price:
        discount === 0
          ? price +
            addition.value.reduce(
              (acc, curr) => acc + curr.additiondata.price,
              0
            )
          : price -
            (price * discount) / 100 +
            addition.value.reduce(
              (acc, curr) => acc + curr.additiondata.price,
              0
            ),
      quantity: quantity.value,
      note: notes.value === "" ? "-" : notes.value,
      addition: addition.value,
    });
    router.push("/home");
  };

  return {
    addition,
    quantity,
    notes,
    addAddition,
    changeQuantity,
    changeNotes,
    updateCustomerOrder,
    selectedProduct,
    additionData,
  };
};
