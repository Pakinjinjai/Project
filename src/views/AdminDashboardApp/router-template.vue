<template>
  <NavbarAdmin/>
  <router-view></router-view>
</template>

<script>
import NavbarAdmin from '@/components/NavbarAdmin.vue';

export default {
  name: "RouterTemplate",

  components: {
    NavbarAdmin
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
