<script>
import axios from "axios";

export default {
  name: "HealthEdit",
  data() {
    return {
      health: {},
    };
  },
  methods: {
    editHealth() {
      if (
        !this.health.bloodPressure ||
        !this.health.oxygen ||
        !this.health.temperature ||
        !this.health.heartRate
      ) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return Promise.reject("กรุณากรอกข้อมูลให้ครบถ้วน");
      }

      return axios({
        method: "post",
        url: "http://localhost:3000/api/v1/healths",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        data: this.health,
      });
    },
  },
};
</script>

<template>
  <div class="container flex flex-col items-center gap-16 mx-auto mt-8">
    <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">ความดันโลหิต</p>
        <span
          ><p class="text-base leading-7 text-dark-grey-600 flex items-center">
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 hover:shadow ml-12 mr-2"
              placeholder=""
              required=""
              id="bloodPressure"
              v-model="health.bloodPressure"
            />
            mmHg
          </p>
        </span>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">ปริมาณออกซิเจนในเลือด</p>
        <span>
          <p class="text-base leading-7 text-dark-grey-600 flex items-center">
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 hover:shadow ml-12 mr-2"
              placeholder=""
              required=""
              id="oxygen"
              v-model="health.oxygen"
            />
            %
          </p>
        </span>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">ค่าอุณภูมิร่างกาย</p>
        <span
          ><p class="text-base leading-7 text-dark-grey-600 flex items-center">
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 hover:shadow ml-7 mr-2"
              placeholder=""
              required=""
              id="temperature"
              v-model="health.temperature"
            />
            °C
          </p>
        </span>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">อัตราการเต้นของหัวใจ</p>
        <span
          ><p class="text-base leading-7 text-dark-grey-600 flex items-center">
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 hover:shadow ml-12 mr-2"
              placeholder=""
              required=""
              id="heartRate"
              v-model="health.heartRate"
            />
            bpm
          </p>
        </span>
      </div>
    </div>
  </div>
  <!-- <div class="flex justify-center mt-2">
    <button
      type="button"
      id="Done"
      v-on:click="gotoInfo()"
      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5"
    >
      Done
    </button>
  </div> -->
</template>
