<template>
  <div class="flex-container">
    <!-- Caroline-JYH -->
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <!-- <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div> -->
  </div>
</template>
<script>
export default {
  name: 'AppIndex'
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
