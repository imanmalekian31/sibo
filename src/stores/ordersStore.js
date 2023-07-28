import { ref } from "vue";
import { defineStore } from "pinia";

export const useOrdersStore = defineStore("order", () => {
  const orderModal = ref(false);
  function openModal() {
    orderModal.value = true;
  }
  function closeModal() {
    orderModal.value = false;
  }

  const orders = ref([]);

  function addNewOrder(newOrder) {
    const prevOrder = orders.value.find((order) => order.id === newOrder.id);
    if (prevOrder) {
      prevOrder.count += 1;
    } else {
      orders.value.push({ ...newOrder, count: 1 });
    }
  }
  function removeOrder(orderId){
    const prevOrder = orders.value.find((order) => order.id === orderId);
    if (prevOrder.count > 1) {
        prevOrder.count -= 1
    }else {
        orders.value = orders.value.filter((order) => order.id !== orderId)
    }
  }
  function countOrder(orderId) {
    return (
      (orders.value.find((order) => order.id === orderId) || {}).count || 0
    );
  }

  return {
    orderModal,
    openModal,
    closeModal,

    orders,
    addNewOrder,
    removeOrder,
    countOrder,
  };
});
