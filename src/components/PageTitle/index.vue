<template>
  <h6 class="page-title">
    <small class="icon-hamburger"/>
    <i
        class="el-icon-s-operation"
        @click="openMobileMenu"
    />
    {{ title }}
  </h6>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "PageTitle",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    openMobileMenu() {
      this.setMobileMenu(true)
    },
    ...mapActions({
      setMobileMenu: 'setMobileMenu'
    })
  }
}
</script>