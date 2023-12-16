<template>
    <div class="grid grid-cols-3  gap-5 md:grid-cols-3 lg:grid-cols-3 mx-40">
      <div class="flex flex-col bg-white rounded-3xl border-solid border border-[#303030] hover:shadow text-center">
        <p class="text-dark-grey-900">จำนวนผู้ใช้งาน</p>
        <p class=" text-dark-grey-900">จำนวนผู้ใช้งาน</p>
        <p class=" text-dark-grey-900">จำนวนผู้ใช้งาน</p>
       
      </div>
      <div class="flex flex-col bg-white rounded-3xl border-solid border border-[#303030] hover:shadow  text-center">
        <p class=" text-dark-grey-900">จำนวนผู้ใช้งาน</p>
        <p class=" text-dark-grey-900">จำนวนผู้ใช้งาน</p>
        <p class=" text-dark-grey-900">จำนวนผู้ใช้งาน</p>
      </div>
      <div class="flex flex-col bg-white rounded-3xl border-solid border border-[#303030] hover:shadow  text-center">
        <p class=" text-dark-grey-900">จำนวนผู้ใช้งาน</p>
        <p class=" text-dark-grey-900">จำนวนผู้ใช้งาน</p>
        <p class=" text-dark-grey-900">จำนวนผู้ใช้งาน</p>
      </div>
    </div>
</template>

<style>
.page-container {
  width: 1440px;
  position: relative;
  margin: 0 auto;
  transition: all 0.3s;

  @media screen and (max-width: 1920px) {
    width: 1280px;
  }

  @media screen and (max-width: 1600px) {
    width: 1280px;
  }

  @media screen and (max-width: 1440px) {
    width: 1280px;
  }

  @media screen and (max-width: 1280px) {
    width: 1024px;
  }

  @media screen and (max-width: 1024px) {
    width: 768px;
  }

  @media screen and (max-width: 960px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
