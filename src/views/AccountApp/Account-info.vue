<template>
  <div class="">
    <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2 mb-4 md:mb-0">
          <!-- Profile Card -->
          <div
            class="bg-white p-3 border-4 hover:shadow mb-4 rounded-xl"
          >
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              รหัสบัตรประชาชน
            </h1>
            <!-- <div  class="bg-[#D9D9D9] border-2 border-gray-300 p-4 rounded-lg shadow-md"> -->
            <p class="text-gray-900  text-lg leading-8 my-1">
              {{ profileData.idCard }}
            </p>
          <!-- </div> -->
            <h3 class="text-gray-900 font-bold text-xl leading-8 my-1">
              ประวัติการแพ้ยา
            </h3>
            <div class="bg-[#D9D9D9] border-2 border-gray-300 p-4 rounded-lg shadow-md text-center">
            <p>
              {{ profileData.noteDrug }}
            </p>
          </div>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
          <!-- Friends card -->

          <div class="flex justify-center mt-4">
            <router-link
              :to="{
                name: 'account-edit',
                query: { profileData: JSON.stringify(profileData) },
              }"
            >
              <button
                type="button"
                class="mt-4 focus:outline-none text-white bg-[#140A4B] hover:bg-[#140a4bc5] focus:ring-4 focus:ring-[#140a4bc5] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-700 dark:hover:bg-[#140a4bc5] dark:focus:ring-[#140a4bc5]"
              >
              แก้ไขโปรไฟล์
              </button>
            </router-link>
          </div>
          <!-- End of friends card -->
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-xl hover:shadow mb-4">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

              </span>
              <span class="tracking-wide">ข้อมูลส่วนตัว</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">ชื่อจริง :</div>
                  <div class="px-4 py-2">{{ profileData.firstname }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">นามสกุล :</div>
                  <div class="px-4 py-2">{{ profileData.lastname }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">เพศ :</div>
                  <div class="px-4 py-2">
                    {{
                      profileData.gender == null
                        ? ""
                        : profileData.gender
                        ? "ชาย"
                        : "หญิง"
                    }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">เบอร์โทรติดต่อ : </div>
                  <div class="px-4 py-2">{{ profileData.phoneNo }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">อีเมล์ :</div>
                  <div class="px-4 py-2">
                    <a>{{ profileData.email }}</a>
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">วันเกิด : </div>
                  <div class="px-4 py-2">{{ birthDate }}</div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">ที่อยู่ส่วนบุคคล </span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">บ้านเลขที่ : </div>
                  <div class="px-4 py-2">{{ profileAddress.houseNo }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">หมู่ : </div>
                  <div class="px-4 py-2">{{ profileAddress.moo }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">ซอย : </div>
                  <div class="px-4 py-2">{{ profileAddress.soi }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">ถนน : </div>
                  <div class="px-4 py-2">{{ profileAddress.road }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">ตำบล : </div>
                  <div class="px-4 py-2">
                    {{ profileAddress.subDistrict }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">อำเภอ : </div>
                  <div class="px-4 py-2">
                    {{ profileAddress.district }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">จังหวัด : </div>
                  <div class="px-4 py-2">
                    {{ profileAddress.province }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">รหัสไปรษณีย์ :</div>
                  <div class="px-4 py-2">
                    {{ profileAddress.postalCode }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>

          <!-- Experience and education -->
          <div class="bg-white p-3 shadow-sm rounded-xl hover:shadow">
            <div class="grid grid-cols-2">
              <div>
                <div
                  class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                >
                  <span clas="text-green-500">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M17.5 10c3.587 0 6.5 2.913 6.5 6.5s-2.913 6.5-6.5 6.5-6.5-2.913-6.5-6.5 2.913-6.5 6.5-6.5zm-7.802 9.864l-.363.635c-1.381 2.391-4.443 3.211-6.834 1.831-2.391-1.381-3.211-4.443-1.831-6.834l6.868-11.995c.925-1.602 2.606-2.499 4.333-2.501.85-.001 1.712.215 2.501.67 2.245 1.297 3.106 4.076 2.058 6.39-.979.125-1.906.416-2.753.844l.793-1.401c.828-1.434.336-3.272-1.099-4.1-1.434-.828-3.272-.336-4.1 1.099l-2.866 5.063 3.975 2.295c-.363.557-.663 1.16-.889 1.797l-4.086-2.359-3.002 5.199c-.828 1.434-.336 3.272 1.099 4.1 1.434.828 3.272.336 4.1-1.099l1.42-2.459c.063.998.298 1.949.676 2.825zm10.882-6.644l-4.381 7.589c.412.124.849.191 1.301.191 2.484 0 4.5-2.016 4.5-4.5 0-1.293-.546-2.459-1.42-3.28zm-1.725-1.012c-.428-.135-.883-.208-1.355-.208-2.484 0-4.5 2.016-4.5 4.5 0 1.313.563 2.495 1.461 3.318l4.394-7.61z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">รายการยาและปริมาณยาที่ทาน</span>
                </div>
                <div class="bg-[#D9D9D9] border-2 border-gray-300 p-4 rounded-lg shadow-md text-center mr-2">
                <div
                  class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  {{ profileData.noteMedicine }}
                </div>
              </div>
              </div>
              <div>
                <div
                  class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                >
                  <span clas="text-green-500">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M15.131 5s1.692 2.025 2.268 2.711c1.213 1.461 1.573 2.31 1.601 4.161v10.128c-.015 1.094-.859 1.961-1.925 1.999-3.368.043-6.736.043-10.104 0-1.073-.038-1.964-.917-1.971-1.999v-10.134c.009-2.04.587-2.921 1.948-4.508.591-.689 1.941-2.358 1.941-2.358h6.242zm1.869 15h-10v2h10v-2zm-4-7h-2v2h-2v2h2v2h2v-2h2.023l-.023-2h-2v-2zm1.245-6h-4.457c-.634.787-1.224 1.522-1.489 1.857-1.026 1.3-1.293 1.807-1.299 3.143h10c-.013-1.346-.184-1.757-1.137-3.008-.268-.353-.929-1.157-1.618-1.992zm1.755-3h-8v-3c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v3z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">โรคประจำตัว</span>
                </div>
                <div class="bg-[#D9D9D9] border-2 border-gray-300 p-4 rounded-lg shadow-md text-center mr-2">
                <div
                  class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  {{ profileData.noteDisease }}
                </div>
              </div>
              </div>
            </div>
            <!-- End of Experience and education grid -->
          </div>
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "Account-Info",
  data() {
    return {
      profileData: {},
      profileAddress: {},
      birthDate: "",
    };
  },
  created() {
    this.showInfo();
  },
  methods: {
    showInfo() {
      axios({
        method: "get",
        url: "http://localhost:3000/api/v1/users/me",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
        .then((res) => {
          this.profileData = res.data.user;
          this.profileAddress = res.data.user.address;
          this.birthDate = dayjs(this.profileData.birthdate).format(
            "YYYY-MM-DD"
          );
          // console.log(this.profileData);
          // console.log(this.profileData.address);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss"></style>
