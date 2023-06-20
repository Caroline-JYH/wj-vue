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
.flex-container{
  display:flex;
  flex-flow:row wrap;
  /* justify-content: center; */
  /* align-items: center; */
  align-content: flex-start;
  max-width: 600px;
  height:200px;
  margin: auto;
  background-color: rgba(156, 240, 108, 0.301);

}
.flex-container>div{
 width: 50px;
 height: 50px;
 font-size: 22px;
 display: flex;
 flex: row wrap;
 justify-content: center;
 align-items: center;
}
.flex-container div:nth-of-type(n){
  background-color: rgba(119, 232, 240, 0.788);
}

.flex-container div:nth-of-type(2n){
  background-color:  rgb(230, 178, 81);
}
.flex-container div:nth-of-type(3n){
  background-color: rgba(118, 105, 233, 0.774);
}

flex-container div:nth-of-type(4n){
  background-color:  rgb(214, 123, 199);
}

.flex-container div:nth-of-type(1){
  /* order: 1; */
  /* flex-grow: 4; */
  /* flex-basis: 100px; */
  flex:0 0 100px;
}
</style>
