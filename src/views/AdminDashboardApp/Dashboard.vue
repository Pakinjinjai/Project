<template>
  <div>
    <h1>Dashboard</h1>
  </div>
  <!--Start Warpper-->
  <div class="h-screen flex flex-row flex-wrap">
    <!--Start Sidebar-->
    <div
      id="Sidebar"
      class="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster"
    >
      <!--Sidebar content-->
      <div class="flex flex-col">
        <!--Sidebar toggle-->
        <div class="text-right hidden md:block mb-4">
          <button id="sideBarHideBtn">
            <i class="fad fa-times-circle"></i>
          </button>
        </div>
        <!--End toggle sidebar-->
        <p class="uppercase text-xs text-gray-600 mb-4 tracking-wider">HOME</p>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  components: { Navbar },
  methods: {},
};
</script>
