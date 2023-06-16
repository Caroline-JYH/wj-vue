<template>
  <div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
  </div>
</template>
<script>
export default {
  name: 'AppIndex'
}
</script>
<style scoped>
.container{
  height: 400px;
  width: 100%;
  background-color: #e1e1e1;
  display:flex;
}
.container div {
  background-color: #ffb84d;
  border: 2px solid #666;
}
.item1{
 flex:1;
}
.item2{
 flex:7;
}

</style>
