<template>
  <Navbar />
  <Navs/>
  <router-view></router-view>
  <Bottombar />
</template>

<script>
import Bottombar from "@/components/Bottombar.vue";
import Navbar from "@/components/Navbar.vue";
import Navs from "@/components/Navbars.vue"

export default {
  name: "RouterTemplate",

  components: {
    Navbar,
    Bottombar,
    Navs
},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
