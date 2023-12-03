<template>
 <div class="">
  <div class="page-container ">
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
</div>
</template>

<script>
import HealthEdit from "@/views/HealthApp/Health-edit.vue";
import HealthInfo from "@/views/HealthApp/Health-info.vue";
// import mqtt from "mqtt";

export default {
  components: { HealthEdit, HealthInfo },
  data() {
    return {
      showHealthEdit: false,
      showDoneButton: false,
      // mqttData: "No data yet",
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
  // mounted() {
  //   const client = mqtt.connect("ws://localhost:8883");

  //   client.subscribe("pulseSenser");

  //   client.on("message", (topic, message) => {
  //     this.mqttData = message.toString();
  //     console.log(message.toString());
  //   });
  // },
};
</script>
