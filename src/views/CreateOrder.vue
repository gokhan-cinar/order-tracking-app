<template>
  <div class="create-order-wrapper">
    <page-title title="Create Order"/>
    <section>
      <div class="create-order-wrapper--left">
        <div class="create-order-information">
          <ul>
            <li>
              <span>Order Number:</span>
              <small>{{ createOrderId }}</small>
            </li>
            <li>
              <span>Date & Time:</span>
              <small>{{ createOrderDateAndTime }}</small>
            </li>
          </ul>
        </div>
        <div class="create-order-wrapper__form">
          <order-item-create
              @formSchema="form = $event"
              @isEmpty="isDisabledButton = $event"
          />
        </div>
      </div>
      <div class="create-order-wrapper--right">
        <order-item-details-boxes/>
        <div class="create-order-wrapper__buttons">
          <el-button
              @click="cancel"
              class="button button--default"
          >
            Cansel
          </el-button>
          <el-button
              @click="addOrder"
              :disabled="!isDisabledButton"
              class="button button--green medium"
          >
            Add Order
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import helpers from "../utils/helpers";
import PageTitle from "../components/PageTitle";
import OrderItemCreate from "../components/Order/OrderItemCreate";
import OrderItemDetailsBoxes from "../components/Order/OrderItemDetailsBoxes";

export default {
  name: "AddNewOrder",
  components: {OrderItemDetailsBoxes, OrderItemCreate, PageTitle},
  data() {
    return {
      isDisabledButton: false,
      form: null
    }
  },
  methods: {
    addOrder() {
      const mergeObj = {
        ...this.form,
        orderId: this.createOrderId,
        orderDate: this.createOrderDateAndTime,
        filterType: 'newOrder'
      }

      let items = []
      const getItemsList = JSON.parse(localStorage.getItem("items"));
      if (getItemsList !== null) {
        items = [...getItemsList, mergeObj]
      } else {
        items = [mergeObj]
      }
      localStorage.setItem('items', JSON.stringify(items))

      this.$notify({
        title: 'Success',
        message: 'Your order has been added',
        type: 'success'
      });
      this.$router.push('/')
    },
    cancel() {
      this.$router.push('/')
    }
  },
  computed: {
    createOrderId() {
      return `#${parseInt((Math.random() * 9 + 1) * Math.pow(10, 8 - 1), 10)}`
    },
    createOrderDateAndTime() {
      const date = helpers.dateFormat('L')
      const time = helpers.dateFormat('LTS');
      return `${date} at ${time}`
    }
  }
}
</script>
