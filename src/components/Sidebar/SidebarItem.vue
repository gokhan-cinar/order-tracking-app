<template>
  <div class="sub-item-menu">
    <span class="sub-item-menu--title">Orders</span>
    <ul>
      <li
          v-for="(link, index) in links"
          :key="index"
          @click="changeLink(link, index)"
      >
        <span :class="{'active': activeLink === index}">{{ link.title }}</span>
        <small>{{ link.value }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SidebarItem",
  data() {
    return {
      items: [],
      goToHome: false,
      activeLink: 0,
      links: [
        {title: 'New Order', value: 0, key: 'newOrder'},
        {title: 'Accepted', value: 0, key: 'accepted'},
        {title: 'Cooking', value: 0, key: 'cooking'},
        {title: 'Parcel Ready', value: 0, key: 'parcelReady'},
        {title: 'Delivered', value: 0, key: 'delivered'},
        {title: 'Completed', value: 0, key: 'completed'},
      ]
    };
  },
  mounted() {
    if (JSON.parse(localStorage.getItem('items'))) {
      const getItems = JSON.parse(localStorage.getItem('items'))
      this.items = getItems.reverse()
      this.handleValue()
    }
  },
  methods: {
    changeLink(value, index) {
      if (this.goToHome) {
        return this.$router.push('/')
      }
      this.activeLink = index
      this.setType(value.key)
      this.closeMenu(false)
    },
    handleValue() {
      this.items.forEach(item => {
        this.links.forEach(link => {
          const totalValue = this.items.filter(f => f.filterType === link.key)
          if (totalValue.length && item.filterType === link.key) {
            link.value = totalValue.length
          }
        })
      })
    },
    ...mapActions({
      setType: 'setOrderType',
      closeMenu: 'setMobileMenu'
    })
  },
  computed: {
    ...mapGetters({
      getItems: 'getMoveItems'
    })
  },
  watch: {
    getItems: {
      handler() {
        const getItems = JSON.parse(localStorage.getItem('items'))
        this.items = getItems
        this.handleValue()
      },
      deep: true
    },
    $route(to) {
      if (to.path !== '/') {
        return this.goToHome = true
      }
      return this.goToHome = false
    }
  }
}
</script>

<style scoped>

</style>