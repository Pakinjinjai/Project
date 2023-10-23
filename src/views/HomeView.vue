<template>
  <div class="page-container">
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "homePage",
  components:{},
  data() {
    return {
      profileData: {},
    };
  },
  methods: {
    async getProfileData() {
      const Token = localStorage.getItem("accessToken");
      try {
        const res = await axios.get("http://localhost:3000/api/v1/profile", {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        console.log(res.data);
        if (res.data.user.firstname == null) {
          alert("กรุณากรอกประวัติส่วนตัวให้ครับถ้วน");
          this.$router.push({
            path: "account-edit",
            query: { profileData: JSON.stringify(res.data.user) },
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    const Token = localStorage.getItem("accessToken");
    if (Token) {
      this.getProfileData();
    }
  },
};
</script>

<style lang="scss" scoped>
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
