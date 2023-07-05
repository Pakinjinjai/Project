<template>
    <div>
      <div class="grid-container">
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
.grid-container {
  display: grid;
  grid-template-columns: auto auto ;
  gap: 15px;
  background-color: white;
  padding: 15px;
  margin-left: 20%;
  margin-right: 20%;
  div {
  background-color: white;
  border: 1px solid black;
  text-align: center;
  font-size: 12px;
  }
}
</style>