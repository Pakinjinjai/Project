<script>
import axios from "axios";
export default {
  data() {
    return {
      health: {},
    };
  },
  created() {
    this.showInfo();
  },
  methods: {
    showInfo() {
      axios({
        method: "get",
        url: "http://localhost:3000/api/v1/healths",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
        .then((res) => {
          if (res.data.length > 0) {
            this.health = res.data[0]; // ให้ health รับค่าจาก response
          }
          console.log(this.health);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div class="container flex flex-col items-center gap-16 mx-auto mt-8">
    <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
      <div
        v-if="Object.keys(health).length > 0"
        class="flex flex-col items-center gap-3 px-8 py-10 bg-[#e89980] rounded-3xl hover:shadow shadow-main mt-4"
      >
        <p class="text-xl text-dark-grey-900">ความดันโลหิต</p>
        <span
          ><p class="text-base leading-7 text-dark-grey-600">
            {{ health.bloodPressure }} mmHg
          </p></span
        >
      </div>
      <div
        v-if="Object.keys(health).length > 0"
        class="flex flex-col items-center gap-3 px-8 py-10 bg-[#7fcdb8] mt-4 rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">ปริมาณออกซิเจนในเลือด</p>
        <span
          ><p class="text-base leading-7 text-dark-grey-600">
            {{ health.oxygen }} %
          </p></span
        >
      </div>
      <div
        v-if="Object.keys(health).length > 0"
        class="flex flex-col items-center gap-3 px-8 py-10 bg-[#90b0ba] mt-4 rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">ค่าอุณภูมิร่างกาย</p>
        <span
          ><p class="text-base leading-7 text-dark-grey-600">
            {{ health.temperature }} °C
          </p></span
        >
      </div>
      <div
        v-if="Object.keys(health).length > 0"
        class="flex flex-col items-center gap-3 px-8 py-10 bg-[#e5cb95] mt-4 rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">อัตราการเต้นของหัวใจ</p>
        <span
          ><p class="text-base leading-7 text-dark-grey-600">
            {{ health.heartRate }} bpm
          </p></span
        >
      </div>
    </div>
  </div>
</template>
