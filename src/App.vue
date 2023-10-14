<template>
  <div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Bottombar.vue";

export default {
  components: {
    Footer,
  },
  created() {
    this.$router.push("/home");
  },
};
</script>

<style>
body {
  background-color: whitesmoke;
}
</style>
