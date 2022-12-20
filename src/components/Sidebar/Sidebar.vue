<template>
  <div class="sidebar">
    <el-button
        circle
        @click="closeMobileMenu"
        icon="el-icon-circle-close"
        class="close-mobile-menu"
    />
    <sidebar-menu/>
    <sidebar-item/>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import SidebarItem from "./SidebarItem";
import SidebarMenu from "./SidebarMenu";

export default {
  name: "Sidebar",
  components: {SidebarMenu, SidebarItem},
  methods: {
    closeMobileMenu() {
      this.closeMenu(false)
    },
    ...mapActions({
      closeMenu: 'setMobileMenu'
    })
  }
}
</script>
