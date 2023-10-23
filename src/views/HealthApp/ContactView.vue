<template>
  <div class="page-container">
    <HealthEdit ref="healthEdit" v-if="showHealthEdit" />
    <HealthInfo v-else />

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
        @click="useEditHealth"
      >
        Done
      </button>
      <button
        v-if="showDoneButton"
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5"
        @click="cancelEdit"
      >
        Cancel
      </button>
    </div>
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
      showDoneButton: false,
    };
  },
  methods: {
    toggleHealthComponents() {
      this.showHealthEdit = !this.showHealthEdit;
      this.showDoneButton = !this.showDoneButton;
    },
    async useEditHealth() {
      try {
        await this.$refs.healthEdit.editHealth();
        this.toggleHealthComponents();
      } catch (error) {
        console.error(error);
      }
    },
    cancelEdit() {
      this.toggleHealthComponents();
    },
  },
};
</script>
