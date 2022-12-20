<template>
  <div class="item-list">
    <ul>
      <li>
        <small>Order number</small>
        <span>{{ order.orderId }}</span>
      </li>
      <li>
        <small>Date & Time</small>
        <span>{{ order.orderDate }}</span>
      </li>
      <li>
        <small>Name</small>
        <span>{{ order.name }}</span>
      </li>
      <li>
        <small>Contact</small>
        <span>{{ order.contact }}</span>
      </li>
      <li>
        <small>Trans Type</small>
        <span :class="['trans-type', order.transType === 'Delivery' ? 'delivery' : 'takeaway' ]">
          {{ order.transType }}
        </span>
      </li>
      <li>
        <small>Amount</small>
        <span>{{ calculatePrice(order) }}$</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrderItemList",
  props: {
    order: {
      type: [Array, Object],
      default: null
    }
  },
  methods: {
    calculatePrice(item) {
      const sum = item.selectedItems.reduce((acc, item) => {
        return  acc + parseInt(item.price)
      }, 0);
      return sum
    },
  }
}
</script>
