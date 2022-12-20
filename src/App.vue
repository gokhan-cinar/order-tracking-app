<template>
  <div
      id="app"
      :class="['layout-wrapper', isMobile ? 'mobile-wrapper' : '']"
  >
    <Sidebar :class="{'mobile-menu': isMobile, 'is-mobile': mobileMenuStatus}"/>
    <router-view/>
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar/Sidebar";
import {mapGetters} from "vuex";

export default {
  components: {Sidebar},
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  computed: {
    isMobile() {
      return this.window.width < 1000
    },
    ...mapGetters({
      mobileMenuStatus: 'getMobileMenu'
    })
  }
}
</script>