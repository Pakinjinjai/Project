<template>
  <div class="page-container">
    <div class="flex justify-center mt-2">
      <button
        v-if="!showDoneButton"
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5"
        @click="toggleHealthComponents"
      >
        Apply Health
      </button>
      <button
        v-if="showDoneButton"
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5"
        @click="toggleHealthComponents"
      >
        Done
      </button>
    </div>
    <Queue />
    <HealthEdit v-if="showHealthEdit" />
    <HealthInfo v-if="!showHealthEdit" />
  </div>
</template>

<script>
import Queue from "@/components/Queue.vue";
import HealthEdit from "@/views/HealthApp/Health-edit.vue";
import HealthInfo from "@/views/HealthApp/Health-info.vue";

export default {
  components: { Queue, HealthEdit, HealthInfo },
  data() {
    return {
      showHealthEdit: false,
      showDoneButton: false, // เพิ่ม property นี้เพื่อเก็บสถานะการแสดงปุ่ม Done
    };
  },
  methods: {
    toggleHealthComponents() {
      this.showHealthEdit = !this.showHealthEdit;
      this.showDoneButton = !this.showDoneButton; // สลับค่า showDoneButton เมื่อปุ่มถูกคลิก
    },
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
