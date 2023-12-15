<template>
  <div class="page-container">
    <LandingPage />
    <Map/>
  </div>
</template>

<script>
import Map from "@/components/Map.vue"
import LandingPage from "@/components/LandingPage.vue";
// import axios from "axios";

export default {
  name: "homePage",
  components: {LandingPage , Map},
  data() {
    return {
      profileData: {},
    };
  },
};
</script>

<style >
@import "@/style/main.scss";
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
