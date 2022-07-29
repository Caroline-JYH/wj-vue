<template>
  <el-container>
    <el-aside style="width:200px;margin-top:20px">
      <switch/>
      <SideMenu/>
    </el-aside>
    <el-main>
      <books class="books-area"/>
    </el-main>
  </el-container>
</template>
<script>
import SideMenu from '../common/SideMenu.vue'
import Books from './Books.vue'

export default {
  name: 'AppLibrary',
  components: { SideMenu, Books }
}
</script>
<style scoped>
.books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
