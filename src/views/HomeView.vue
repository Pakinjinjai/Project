<template lang="">
  <div class="bg-blue-600">
    <div>
      <input type="text" name="search" placeholder="Search.." class="text-right">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scope>
  input[type=text] {
  width: 130px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

/* When the input field gets focus, change its width to 100% */
input[type=text]:focus {
  width: 100%;
}
</style>
<!-- <template>
    <div class="grid-container">
      <div class="wrapper">
            <img src="../assets/images.png">
            <p class="p">000</p>
      </div>
      <div class="wrapper">
            <img src="../assets/NIKE2.jpeg">1
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
  grid-row: 15px;
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
.wrapper{
  overflow: hidden;
}
.wrapper img {
  max-width: 10dvi;
  height: auto;
  transition: scale 400ms;
}
.wrapper:hover img {
  scale: 120%;
}
.p {
  display: contents;
}
</style> -->