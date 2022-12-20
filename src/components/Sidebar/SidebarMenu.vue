<template>
  <div class="sidebar__menu">
    <i
        @click="goToHome"
        class="icons-logo"></i>
    <el-menu
        default-active="2"
        :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="icons-box"></i>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="icons-screen"></i>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="icons-setting"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>
