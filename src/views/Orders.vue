<template>
  <div class="orders-wrapper">
    <page-title title="Accepted"/>
    <div class="orders-wrapper__header">
      <span class="orders-count">
        <small class="icon-hamburger"/> Showing {{ items && items.length }} Orders
      </span>
      <el-button
          @click="addOrder()"
          class="button button--blue small"
      >
        Add New Order
      </el-button>
    </div>
    <div
        class="orders-wrapper__content"
        v-if="filterItems && filterItems.length"
    >
      <OrderItem
          @moveCooking="moveItem"
          @removeItem="removeItem"
          v-for="(item, index) in filterItems"
          :key="index"
          :item="item"
      />
    </div>
    <div v-else>
      <el-alert
          class="empty-message"
          type="info"
          description="You do not have an order yet"
          show-icon/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import helpers from "../utils/helpers";
import OrderItem from "../components/Order/OrderItem";

export default {
  name: "Orders",
  components: {OrderItem},
  data() {
    return {
      items: []
    }
  },
  beforeMount() {
    if (JSON.parse(localStorage.getItem('items'))) {
      const getItems = JSON.parse(localStorage.getItem('items'))
      this.items = getItems.reverse()
    }
  },
  methods: {
    moveItem(item) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].orderId === item.orderId) {
          this.items[i].filterType = 'cooking'
        }
      }
      helpers.saveItem(this.items)
    },
    removeItem(item) {
      if (!this.items.length) return;

      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].orderId === item.orderId) {
          this.items.splice(i, 1);
        }
      }
      helpers.saveItem(this.items)
    },
    addOrder() {
      this.$router.push('/create-order')
    }
  },
  computed: {
    filterItems() {
      const items = this.items && this.items.filter(item => item.filterType === this.orderType)
      return items
    },
    ...mapGetters({
      orderType: 'getOrderType'
    })
  }
}
</script>