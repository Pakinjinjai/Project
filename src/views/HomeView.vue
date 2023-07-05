<template>
  <div class="grid-container">
    <div class="wrapper-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";
.grid-container{
  background-color: #f8ebeb;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr auto;
  .wrapper-container {
    background-color: white;
    width: 50px;
    height: 50px;
  }
};
</style>