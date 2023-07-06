<template>
    <div class="grid-container">
      <div class="wrapper">
            <img src="../assets/images.png" width="138">
      </div>
      <div class="wrapper">
            <img src="" width="138">
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
.grid-container {
  display: grid;
  grid-template-columns: auto auto ;
  gap: 15px;
  background-color: white;
  padding: 15px;
  margin-left: 20%;
  margin-right: 20%;
  .wrapper-container {
  background-color: white;
  border: 1px solid black;
  text-align: center;
  font-size: 12px;
  }
}
.wrapper{
  width: 138px;
  overflow: hidden;
}
.wrapper img {
  transition: scale 400ms;
}
.wrapper:hover img {
  scale: 120%;
}
</style>