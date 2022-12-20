<template>
  <div>
    <div class="delivery-details">
      <span class="delivery-details--title">Delivery Details</span>
      <table>
        <thead>
        <tr>
          <th
              width="50%"
              scope="col">Order Item
          </th>
          <th
              width="35%"
              scope="col">Number
          </th>
          <th
              width="15%"
              scope="col">Cost
          </th>
        </tr>
        </thead>
        <tbody>
        <template v-if="items.length">
          <tr
              v-for="(item, index) in items"
              :key="index"
          >
            <td data-label="Order Item">{{ item.label }}</td>
            <td data-label="Number">{{ item.amount }}</td>
            <td data-label="Cost">{{ calculatePrice(item) }}$</td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td data-label="Order Item">-</td>
            <td data-label="Number">-</td>
            <td data-label="Cost">-</td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
    <div class="total-amount">
      <span class="total-amount--title">Total Amount:</span>
      <small class="total-amount--total-cost">{{ calculateTotalAmount() }}</small>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "OrderItemDetailsBoxes",
  methods: {
    calculatePrice(item) {
      return item.amount * parseInt(item.price)
    },
    calculateTotalAmount() {
      if (this.items.length) {
        let prices = []
        let total = null;

        this.items.forEach((obj) => {
          prices.push(obj.amount * parseInt(obj.price))
        })

        total = prices.reduce((cal, obj) => {
          return cal + obj
        }, 0)
        return `${total}$`
      }
      return '-'
    },
  },
  computed: {
    ...mapGetters({
      items: 'getItems'
    })
  },
  watch: {
    items: {
      handler() {
        this.calculateTotalAmount()
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
