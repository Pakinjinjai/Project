<script>
import axios from 'axios';

export default {
  name: 'user-component',
  data() {
    return {
      Address: [],
      isModalVisible: false,
      infoModel: false,
      AddressModel: false,
    };
  },
  computed: {
    sortedAddress() {
      // เรียงลำดับคิวตามสถานะแล้วตาม dateQueue
      return this.Address.slice().sort((a, b) => {
        if (a.status === b.status) {
          return new Date(a.dataAddress) - new Date(b.dataAddress);
        } else {
          return a.status ? 1 : -1;
        }
      });
    },
  },
  mounted() {
    axios.get('http://localhost:3000/api/v1/users/getallusers')
    .then(response => {
        this.Address = response.data;
        console.log(this.Address);
    })
    .catch(error => {
        console.error(error);
    });
},

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    showModal() {
      this.isModalVisible = true;
    },
    showinfoModal() {
      this.infoModel = true;
    },
    AddressModal() {
      this.AddressModel = true;
    },
    // getAllUser() {
    //   try {

    //   }

    // }

  },
};
</script>

<template>
  <section class="p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
      <h3 class="text-2xl text-center font-semibold text-[#140A4B] mb-4">
      ข้อมูลผู้ใช้งานทั้งหมด
    </h3>
      <!-- Start coding here -->
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <!-- search -->
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-3 ">
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <input type="text" id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                  placeholder="Search" required="" />
              </div>
            </form>
          </div>
        </div>
        <div class="overflow-x-auto">
          
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-[#FDFDFD] uppercase bg-[#140A4B] ">
              <tr class="text-center">
                <th scope="col" class="px-4 py-3">ไอดี</th>
                <th scope="col" class="px-4 py-3">รหัสบัตรประชาชน</th>
                <th scope="col" class="px-4 py-3">ชื่อ</th>
                <th scope="col" class="px-4 py-3">นามสกุล</th>
                <th scope="col" class="px-4 py-3">เพศ</th>
                <th scope="col" class="px-4 py-3">เบอร์โทรศัพท์</th>
                <th scope="col" class="px-4 py-3">สถานะ</th>
                <th scope="col" class="px-4 py-3">จัดการ</th>
              </tr>
            </thead>
            <!-- body -->
            <tbody v-if="Address.length > 0">
              <tr v-for="(item, index) in sortedAddress" :key="item._id" :class="{
          'bg-white': index % 2 === 0,
          'bg-[#F6F6F6]': index % 2 !== 0
        }" class="border-b text-center  text-[#303030]">
                <th scope="row" class="px-4 py-3 font-medium  whitespace-nowrap dark:text-white">
                  {{ item._id }}
                </th>
                <td class="px-4 py-3">{{ (item.idCard) }}</td>
                <td class="px-4 py-3">{{ (item.firstname) }}</td>
                <td class="px-4 py-3">{{ (item.lastname) }}</td>
                <td class="px-4 py-3">{{ item.gender ? 'ชาย' : 'หญิง' }}</td>
                <td class="px-4 py-3">{{ (item.phoneNo) }}</td>
                <td class="px-4 py-3">{{ item.role === 9001 ? 'Admin' : (item.role === 2001 ? 'User' : 'Unknown Role') }}</td>
                <td class="px-4 py-3 flex  text-[#303030] justify-center ">
                  <!-- info_Btn -->
                  <button @click="showinfoModal()"
                    class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#303030] hover:text-gray-800 rounded-lg focus:outline-none "
                    type="button">
                    <svg class="w-[16px] h-[16px] text-[#303030] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </button>
                  <!-- infoAddressUser -->
                  <button @click="AddressModal()"
                    class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#303030] hover:text-gray-800 rounded-lg focus:outline-none "
                    type="button">
                    <svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
      <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"/>
    </g>
  </svg>
                  </button>
                  <!-- delete_Btn -->
                  <button
                    class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#EB1851] hover:text-gray-800 rounded-lg focus:outline-none "
                    type="button">
                    <svg class="w-[16px] h-[16px] text-[#303030]" aria-hidden="true" style="color: #EB1851;"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                      <path
                        d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                    </svg>
                  </button>
                  <!-- Main modal Layout info -->
                  <div id="infoUserModal" tabindex="-1" aria-hidden="true"
                    :class="{ hidden: !infoModel, flex: infoModel }"
                    class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 ">
                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                      <!-- Modal content -->
                      <div class="relative p-4 bg-white rounded-lg shadow  sm:p-5">
                        <!-- Modal header -->
                        <div class="flex justify-between items-center  rounded-t border-b sm:mb-5 ">
                          <h3 class="text-lg font-semibold text-[#303030] ">
                            User Info
                          </h3>
                          <button @click="infoModel = false" type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                          </button>
                        </div>
                        <!-- user info -->
                        <form action="#">
                          <div class="grid gap-4 mb-4 sm:grid-cols-2 ">
                            <!-- _id -->
                            <div>
                              <label for="_id" class="block mb-2 text-lg font-bold text-[#303030] text-left">ไอดี</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">HN1703572305</p>
                            </div>
                            <!-- idCard -->
                            <div>
                              <label for="idCard"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">รหัสบัตรประชาชน</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">1809901075727</p>
                            </div>
                            <!-- email -->
                            <div>
                              <label for="email"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">อีเมล</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">Admin01@gmail.com</p>
                            </div>
                            <!-- firstname -->
                            <div>
                              <label for="firstname"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">ชื่อจริง</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">ภาคิน</p>
                            </div>
                            <!-- lastname -->
                            <div>
                              <label for="lastname"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">นามสกุล</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">จิ้นจ้าย</p>
                            </div>
                            <!-- phoneNO -->
                            <div>
                              <label for="phoneNO"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">เบอร์โทรศัพท์</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">0652358039</p>
                            </div>
                            <!-- gender -->
                            <div>
                              <label for="gender"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">เพศ</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">ชาย</p>
                            </div>
                            <!-- birthdate -->
                            <div>
                              <label for="birthdate"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">วัน/เดือน/ปี เกิด</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">28-12-2001</p>
                            </div>
                          </div>
                          <!-- description -->
                          <div class="sm:col-span-2">
                            <label for="description"
                              class="block mb-2 text-lg font-bold text-[#303030] text-left">โรคประจำตัว</label>
                            <p class="text-left text-[#303030] rounded-lg bg-gray-50 border block w-full p-2.5">
                              ไม่มีโรคประจำตัว</p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- Main modal Layout info Address -->
                  <div id="infoUserModal" tabindex="-1" aria-hidden="true"
                    :class="{ hidden: !AddressModel, flex: AddressModel }"
                    class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 ">
                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                      <!-- Modal content -->
                      <div class="relative p-4 bg-white rounded-lg shadow  sm:p-5">
                        <!-- Modal header -->
                        <div class="flex justify-between items-center  rounded-t border-b sm:mb-5 ">
                          <h3 class="text-lg font-semibold text-[#303030] ">
                            Address User
                          </h3>
                          <button @click="AddressModel = false" type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                          </button>
                        </div>
                        <!-- Modal body -->
                        <form action="#">
                          <div class="grid gap-4 mb-4 sm:grid-cols-2 ">
                            <!-- houseNo -->
                            <div>
                              <label for="houseNo"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">บ้านเลขที่</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">86/29</p>
                            </div>
                            <!-- soi -->
                            <div>
                              <label for="soi" class="block mb-2 text-lg font-bold text-[#303030] text-left">ซอย</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">ทุ่งข่า11</p>
                            </div>
                            <!-- road -->
                            <div>
                              <label for="road" class="block mb-2 text-lg font-bold text-[#303030] text-left">ถนน</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">กะโรม</p>
                            </div>
                            <!-- moo -->
                            <div>
                              <label for="moo" class="block mb-2 text-lg font-bold text-[#303030] text-left">หมู่</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">-</p>
                            </div>
                            <!-- subDistrict -->
                            <div>
                              <label for="subDistrict"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">ตำบล</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">โพธิ์เสด็จ</p>
                            </div>
                            <!-- district -->
                            <div>
                              <label for="district"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">อำเภอ</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">เมืองนครศรีธรรมราช</p>
                            </div>
                            <!-- province -->
                            <div>
                              <label for="province"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">จังหวัด</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">นครศรีธรรมราช</p>
                            </div>
                            <!-- postalCode -->
                            <div>
                              <label for="postalCode"
                                class="block mb-2 text-lg font-bold text-[#303030] text-left">รหัสไปรษณีย์</label>
                              <p class="text-left p-2.5 bg-gray-50 border rounded-lg">80000</p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>


<style></style>

