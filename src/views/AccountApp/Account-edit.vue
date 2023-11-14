<script>
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: "account-Edit",
  components: {},
  props: {},
  data() {
    return {
      formData: JSON.parse(this.$route.query.profileData),
      birthdateUpgrade: "",
    };
  },
  mounted() {
    this.birthdateUpgrade = dayjs(this.formData.birtdate).format("YYYY-MM-DD");
  },
  methods: {
    editAccount() {
      console.log(this.formData);
      if (this.formData.idCard != "" && this.formData.idCard != null) {
        console.log("ใส่รหัสประจำตัวสำเร็จ");
        if (this.formData.firstname != "" && this.formData.firstname != null) {
          console.log("ใส่ชื่อจริงสำเร็จแล้ว");
          if (this.formData.lastname != "" && this.formData.lastname != null) {
            console.log("ใส่นามสกุลสำเร็จแล้ว");
            if (this.formData.gender != "" && this.formData.gender != null) {
              console.log("ใส่เพศสำเร็จแล้ว");
              if (
                this.formData.noteDrug != "" &&
                this.formData.noteDrug != null
              ) {
                console.log("ใส่ประวัติแพ้ยาสำเร็จแล้ว");
                if (
                  this.birthdateUpgrade != "" &&
                  this.birthdateUpgrade != "Invalid Date"
                ) {
                  this.formData.birtdate = this.birthdateUpgrade;
                  delete this.formData._id;
                  console.log(this.formData);
                  axios({
                    method: "patch",
                    url: "http://localhost:3000/api/v1/users/update",
                    headers: {
                      Authorization:
                        "Bearer " + localStorage.getItem("accessToken"),
                    },
                    data: this.formData,
                  })
                    .then((res) => {
                      this.$router.push("/account-info");
                      console.log(res.data);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                  console.log(this.formData);
                } else {
                  alert("กรุณาใส่วันเดือนปีเกิดของท่าน");
                }
              } else {
                alert("กรุณากรอกประวัติการแพ้ยา");
              }
            } else {
              alert("กรุณใส่เพศของท่าน");
            }
          } else {
            alert("กรุณาใส่นามสกุลของท่าน");
          }
        } else {
          alert("กรุณาใส่ชื่อจริงของท่าน");
        }
      } else {
        alert("กรุณาใส่เลขประจำตัวประชาชนของท่าน");
      }
    },
  },
};
</script>

<template>
  <div class="bg-gray-100">
    <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div
            class="bg-white p-3 border-t-4 border-green-400 hover:shadow rounded-xl"
          >
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              Identification Number
              <i class="las la-asterisk" style="color: red"> </i>
            </h1>
            <font-awesome-icon icon="triangle-exclamation" />
            <input
              type="email"
              name="idCard"
              id="idCard"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Identification Number"
              required=""
              v-model="formData.idCard"
            />
            <h3 class="text-gray-900 font-lg text-semibold leading-6">
              ประวัติการแพ้ยา<i class="las la-asterisk" style="color: red"></i>
            </h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="ประวัติการแพ้ยา"
              v-model="formData.noteDrug"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            ></textarea>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
          <!-- Friends card -->
          <div class="flex justify-center p-2">
            <button
              type="button"
              id="saveAccount"
              v-on:click="editAccount()"
              class="mt-7 text-white bg-green-700 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Save
            </button>
            <router-link to="/account-info">
              <button
                type="button"
                class="mt-7 focus:outline-none text-white bg-red-700 hover:bg-orange-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-700 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Cancel
              </button>
            </router-link>
          </div>
          <!-- End of friends card -->
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm hover:shadow rounded-xl">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            >
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">
                    First Name<i class="las la-asterisk" style="color: red"></i>
                  </div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="First Name"
                      required=""
                      v-model="formData.firstname"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">
                    Last Name<i class="las la-asterisk" style="color: red"></i>
                  </div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Last Name"
                      required=""
                      v-model="formData.lastname"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">
                    Gender<i class="las la-asterisk" style="color: red"></i>
                  </div>
                  <div class="px-4 py-2 mt-2">
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        name="accountType"
                        value="true"
                        v-model="formData.gender"
                      />
                      <span class="ml-2">Male</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="accountType"
                        value="false"
                        v-model="formData.gender"
                      />
                      <span class="ml-2">Female</span>
                    </label>
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">
                    Phone number<i
                      class="las la-asterisk"
                      style="color: red"
                    ></i>
                  </div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Phone number"
                      required=""
                      v-model="formData.phoneNo"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">
                    Email<i class="las la-asterisk" style="color: red"></i>
                  </div>
                  <div class="px-4 py-2">
                    <a
                      ><input
                        type="email"
                        name="idCard"
                        id="idCard"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Email"
                        required=""
                        v-model="formData.email"
                    /></a>
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">
                    <div>
                      Birthdate
                      <i class="las la-asterisk" style="color: red"></i>
                    </div>
                  </div>
                  <div class="px-4 py-2">
                    <input
                      type="date"
                      name="Birthdate"
                      id="Birthdate"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Birthdate"
                      required=""
                      v-model="birthdateUpgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            >
              <span clas="text-green-500">
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
              <span class="tracking-wide">Address</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">House No:</div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="House no"
                      required=""
                      v-model="formData.address.houseNo"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Moo:</div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Moo"
                      required=""
                      v-model="formData.address.moo"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Soi:</div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Soi"
                      required=""
                      v-model="formData.address.soi"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Road:</div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Road"
                      required=""
                      v-model="formData.address.road"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Tambon:</div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Tambon"
                      required=""
                      v-model="formData.address.subDistrict"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">District:</div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="District"
                      required=""
                      v-model="formData.address.district"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Province:</div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Province"
                      required=""
                      v-model="formData.address.province"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Postal Code:</div>
                  <div class="px-4 py-2">
                    <input
                      type="email"
                      name="idCard"
                      id="idCard"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Postal code"
                      required=""
                      v-model="formData.address.postalCode"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>

          <!-- Experience and education -->
          <div class="bg-white p-3 shadow-sm hover:shadow rounded-xl">
            <div class="grid grid-cols-2">
              <div class="m-1">
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
                  <span class="tracking-wide"
                    >รายการยาและปริมาณยาที่ทาน<i
                      class="las la-asterisk"
                      style="color: red"
                    ></i
                  ></span>
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="รายการยาและปริมาณยาที่ทาน"
                    v-model="formData.noteMedicine"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></textarea>
                </div>
              </div>
              <div class="m-1">
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
                  <span class="tracking-wide"
                    >โรคประจำตัว<i
                      class="las la-asterisk"
                      style="color: red"
                    ></i
                  ></span>
                </div>
                <div class="list-inside space-y-2">
                  <textarea
                    name=""
                    v-model="formData.noteDisease"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="โรคประจำตัว"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></textarea>
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

<style lang="scss">
.account {
  display: grid;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: #64ccc5;
  height: 50vh;
  width: 100vh;
  .account-text {
    margin-top: 15px;
    margin-left: 15px;
    background: black;
    height: 50px;
    width: 200px;
    border-radius: 16px;
    // text-align: center;
    .account-edit {
      margin-top: 25px;
    }
    h1 {
      color: white;
    }
  }
}
</style>
