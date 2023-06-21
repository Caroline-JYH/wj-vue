<template>
  <div class="container">
    <SideMenuVue :menu-items = "menuItems" @click="changeMenu(menuItems.itemText)"/>
    <div class="imageFather">
      <el-image src="../../../static/技术采用.png" class="image"/>
      <el-image src="../../../static/最近更新.png" class="image"/>
    </div>

  </div>
</template>
<script>
import SideMenuVue from '../common/SideMenu.vue'
export default {
  name: 'AppIndex',
  components: {
    SideMenuVue
  },
  data() {
    return {
      menuItems: [{
        itemPhoto: 'el-icon-menu',
        itemText: '技术采用'
      },
      {
        itemPhoto: 'el-icon-refresh',
        itemText: '最近更新'
      },
      {
        itemPhoto: 'el-icon-download',
        itemText: '下载源码'
      },
      {
        itemPhoto: 'el-icon-user',
        itemText: '关于我们'
      }],
      changeMenu(itemText) {
        switch (itemText) {
          case '技术采用' :
        }
      }
    }
  }
}
</script>
<style scoped>
.container{
  display:flex;
  justify-content: flex-start;
}
.imageFather{
  display:flex;
  flex-direction: column;
  flex-grow:1;
  margin: 10px 100px;
  flex-grow: 1;
}
</style>
