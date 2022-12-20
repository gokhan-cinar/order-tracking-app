<template>
  <div>
    <el-form
        label-position="top"
        :model="form">
      <el-form-item label="Name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="Contact">
        <el-input v-model="form.contact"/>
      </el-form-item>
      <el-form-item
          class="trans-type"
          label="Trans Type">
        <el-radio-group v-model="form.transType">
          <el-radio label="Delivery"/>
          <el-radio label="Takeaway"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Message to client">
        <el-input
            type="textarea"
            v-model="form.desc"/>
      </el-form-item>
      <el-form-item
          label="Order Items"
          prop="items">
        <el-select
            v-model="form.items"
            multiple
            popper-class="items-select"
            placeholder="Select Items">
          <el-option
              v-for="item in orderItems"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <!--  selected items list-->
    <div
        class="selected-items"
        v-if="selectedItems.length">
      <ul>
        <li
            v-for="(item, index) in selectedItems"
            :key="index"
        >
          <span class="selected-items--title">{{ item.label }}</span>
          <div>
            <small class="selected-items--price">{{ calculatePrice(item) }}$</small>
            <el-input-number
                size="mini"
                :min="1"
                v-model="item.amount"/>
            <i
                class="el-icon-close"
                @click="removeItem(item)"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "OrderItemCreate",
  data() {
    return {
      form: {
        name: '',
        contact: '',
        transType: 'Delivery',
        desc: '',
        items: ''
      },
      orderItems: [{
        value: 'beefStroganoff',
        label: 'Beef Stroganoff',
        amount: 1,
        price: '25'
      }, {
        value: 'reuben',
        label: 'Reuben',
        amount: 1,
        price: '32'
      }, {
        value: 'sandwich',
        label: 'Sandwich',
        amount: 1,
        price: '20'
      }, {
        value: 'waldorfSalad',
        label: 'Waldorf Salad',
        amount: 1,
        price: '45'
      }, {
        value: 'frenchFries',
        label: 'French Fries',
        amount: 1,
        price: '20'
      }, {
        value: 'caesarSalad',
        label: 'Caesar Salad',
        amount: 1,
        price: '20'
      }, {
        value: 'chickenKing',
        label: 'Chicken à la King',
        amount: 1,
        price: '29'
      }, {
        value: 'lobsterNewburg',
        label: 'Lobster Newburg',
        amount: 1,
        price: '22'
      }, {
        value: 'salisburySteak',
        label: 'Salisbury Steak',
        amount: 1,
        price: '55'
      }],
    }
  },
  methods: {
    calculatePrice(item) {
      return item.amount * parseInt(item.price)
    },
    removeItem(item) {
      for (let i = 0; i < this.form.items.length; i++) {
        if (this.form.items[i] === item.value) {
          this.form.items.splice(i, 1);
        }
      }
    },
    isEmpty(value) {
      if (value !== undefined) {
        const status = Object.values(value).every(x => x !== '' && x !== null);
        if (status && value.items.length) {
          return this.$emit('isEmpty', true)
        }
        return this.$emit('isEmpty', false)
      }
    },
    ...mapActions({
      setDeliveryDetails: 'setItems'
    })
  },
  computed: {
    selectedItems() {
      const items = []
      for (const item of this.form.items) {
        const findItem = this.orderItems.find(order => order.value === item)
        items.push(findItem)
      }
      this.setDeliveryDetails(items)
      return items
    },
  },
  watch: {
    form: {
      handler(value) {
        const schema = {
          selectedItems: this.selectedItems,
          ...this.form
        }
        this.isEmpty(value)
        this.$emit('formSchema', schema)
      },
      deep: true
    }
  }
}
</script>