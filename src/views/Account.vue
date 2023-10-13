<template>
  <div class="account">
    <div class="account-text">
      <h1>Account</h1>
        <div class="account-edit">
          <label>First name</label>
            <input 
              type="text"
              placeholder="First name"
      
             >
          <label>Last name</label>
            <input 
              type="text"
              placeholder="First name"
      
             >
        </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.account{
  display: grid;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: #64CCC5;
  height: 50vh;
  width: 100vh;
  .account-text{
    margin-top: 15px;
    margin-left: 15px;
    background: black;
    height: 50px;
    width: 200px;
    border-radius: 16px;
    // text-align: center;
    .account-edit{
      margin-top: 25px;
    }
    h1{
      color: white;
    }
  }
}
</style>