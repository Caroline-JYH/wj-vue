<!--侧边栏公用组件-->
<template>
  <el-menu
    class="categories"
    @select="handleSelect">
    <el-menu-item v-for = "item in menuItems" :key = "item">
      <i :class="item.itemPhoto"/>
      <span slot="title">{{ item.itemText }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    menuItems: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleSelect() {}
  }
}
</script>

<style scoped>
  .categories {
    top:10px;
    bottom:10px;
  }
</style>

