<template>
  <div class="min-h-screen bg-blue-100">
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
  mounted() {
    this.$router.push("/home");
  },
};
</script>

<style>
body {
  background-color: whitesmoke;
}
</style>
