<template>
    <div>
      <div class="grid-container">
        <div class="wrapper-container">
          <img src="" alt="">
        </div>
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
    .wrapper {
      overflow: hidden;
      .wrapper img{
        width: 100%; height: 100%;
        transition: scale 400ms;
        .wrapper:hover img{
          scale: 120%;
        }
      }
    }
  }
}
</style>