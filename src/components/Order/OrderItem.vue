<template>
  <div class="order-item-box">
    <OrderItemList :order="item"/>
    <div class="order-item-box__ordered-items">
      <span class="ordered-item-title">Ordered Items</span>
      <ul>
        <li
            v-for="(order, index) in item.selectedItems"
            :key="index">
          <span>{{ order.label }} X {{ order.amount }}</span>
        </li>
      </ul>
    </div>
    <div class="order-item-box__footer">
      <div class="information">
        <span>Additional information from customer</span>
        <small>Please send salad and green chantni with 2 paper dish.</small>
      </div>
      <div
          class="buttons"
      >
        <template v-if="orderType !== 'cooking'">
          <i class="icons-printer"/>
          <el-button
              @click="moveToCooking(item)"
              class="button button--blue small">
            Move to Cooking
          </el-button>
        </template>
        <el-button
            v-else
            @click="remove(item)"
            type="danger"
            icon="el-icon-delete"
            circle/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import OrderItemList from "./OrderItemList";

export default {
  name: "OrderItem",
  components: {OrderItemList},
  props: {
    item: {
      type: [Array, Object],
      default: null
    }
  },
  methods: {
    moveToCooking(item) {
      this.moveItems(item)
      this.$emit('moveCooking', item)
    },
    remove(item) {
      this.moveItems(item)
      this.$emit('removeItem', item)
    },
    ...mapActions({
      moveItems: 'setMoveItems'
    })
  },
  computed: {
    ...mapGetters({
      orderType: 'getOrderType'
    })
  }
}
</script>
