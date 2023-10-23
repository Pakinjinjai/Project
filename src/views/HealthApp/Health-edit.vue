<script>
import axios from "axios";
export default {
  data() {
    return {
      health: [],
      showHealthEdit: false,
      showDoneButton: false,
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
        data: this.health,
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
    toggleHealthComponents() {
      this.showHealthEdit = !this.showHealthEdit;
      this.showDoneButton = !this.showDoneButton; // สลับค่า showDoneButton เมื่อปุ่มถูกคลิก
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
          ><input
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 hover:shadow"
            placeholder=""
            required=""
            id="bloodPressure"
          />
        </span>

        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5"
        >
          Apply
        </button>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">ปริมาณออกซิเจนในเลือด</p>
        <span
          ><input
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 hover:shadow"
            placeholder=""
            required=""
            id="oxygen"
          />
        </span>

        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5"
        >
          Apply
        </button>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">ค่าอุณภูมิร่างกาย</p>
        <span
          ><input
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 hover:shadow"
            placeholder=""
            required=""
            id="temperature"
          />
        </span>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5"
        >
          Apply
        </button>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">อัตราการเต้นของหัวใจ</p>
        <span
          ><input
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 hover:shadow"
            placeholder=""
            required=""
            id="heartRate"
          />
        </span>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-4">
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
</template>
