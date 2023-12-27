<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <table class="w-full text-lg text-left text-gray-500">
      <thead class="text-xl text-[#FDFDFD] uppercase bg-[#140A4B]">
        <tr>
          <th scope="col" class="px-6 py-3">หัวข้อ</th>
          <th scope="col" class="px-6 py-3">วันที่นัดหมาย</th>
          <th scope="col" class="px-6 py-3">สถานะการตรวจสอบ</th>
          <th scope="col" class="px-6 py-3">วันที่เข้าตรวจ</th>
          <th scope="col" class="px-6 py-3">คำแนะนำ</th>
        </tr>
      </thead>

      <tbody v-if="Queue.length > 0">
        <tr v-for="(item, index) in sortedQueue" :key="item._id" :class="{
          'bg-white': index % 2 === 0,
          'bg-[#F6F6F6]': index % 2 !== 0
        }" class="border-b">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ item.topic }}
          </th>
          <td class="px-6 py-4">{{ formatDate(item.dateQueue) }}</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div class="h-2.5 w-2.5 rounded-full m-2" :class="{
                'bg-green-700': item.status,
                'bg-red-700': !item.status,
              }"></div>
              <div :class="{
                'text-green-700': item.status,
                'text-red-700': !item.status,
              }">
                {{ item.status ? "ได้รับการตรวจสอบแล้ว" : "กำลังรอการตรวสอบ" }}
              </div>
            </div>
          </td>

          <td v-if="item.note" class="px-6 ">{{ formatDate(item.updatedAt) }}</td>
          <td v-else class="px-6  ">ยังไม่ตรวจ</td>

          <td class="px-6 py-4">
            
            <div v-if="item.note" class="flex text-green-500">
              <button :class="{ 'text-green-500': item.note }" class="flex "
                @click="toggleMessage(index)">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="note-btnSVG">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25">
                  </path>
                </svg>
                คำแนะนำ
              </button>
            </div>

            <div v-else class="flex text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>

            </div>
          </td>

        </tr>
      </tbody>

      <tbody v-else>
        <tr>
          <td colspan="4">No data available.</td>
        </tr>
      </tbody>
    </table>
    <div class="grid justify-center content-center h-14 shadow-md sm:rounded-lg bg-white" v-show="showMessage">
      <div class="">
        <ul v-if="activeItem !== null">
          <li v-if="sortedQueue[activeItem].note !== null">
            Advice : {{ sortedQueue[activeItem].note }}
          </li>
          <li v-else>ขณะนี้กำลังรอการตอบกลับจากคุณหมอ</li>
        </ul>
        <p v-else>No data available.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Queue: [], // เตรียมใช้งานคิวเป็นอาร์เรย์ว่าง
      showMessage: false, // เริ่มต้น showMessage เป็นเท็จ
      activeItem: null, // เตรียมใช้งาน activeItem เป็น null
    };
  },
  computed: {
    sortedQueue() {
      // เรียงลำดับคิวตามสถานะแล้วตาม dateQueue
      return this.Queue.slice().sort((a, b) => {
        if (a.status === b.status) {
          return new Date(a.dateQueue) - new Date(b.dateQueue);
        } else {
          return a.status ? 1 : -1;
        }
      });
    },
  },
  created() {
    this.showInfo();
  },
  methods: {
    showInfo() {
      try {
        axios({
          method: "get",
          url: "http://localhost:3000/api/v1/queues/me",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
          .then((res) => {
            this.Queue = res.data; // อัพเดตข้อมูลคิวด้วยข้อมูลการตอบกลับ
            console.log(this.Queue);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) { }
    },
    formatDate(date) {
      // ฟังก์ชั่นจัดรูปแบบวันที่ (ปรับแต่งได้ตามต้องการ)
      return new Date(date).toLocaleDateString();
    },
    toggleMessage(index) {
      // ตรวจสอบว่า activeItem เหมือนกับดัชนีที่ถูกคลิกหรือไม่
      if (this.activeItem === index) {
        this.showMessage = false; // ปิดข้อความหากมีการคลิกรายการเดียวกันอีกครั้ง
        this.activeItem = null;
      } else {
        this.activeItem = index; // ตั้งค่า activeItem เป็นดัชนีของรายการที่ถูกคลิก
        this.showMessage = true;
      }
    },
  },
};
</script>

<style>
.note-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
}

.note-btnSVG {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  /* เพิ่ม margin ถ้าต้องการช่องว่างระหว่าง SVG กับข้อความ */
}
</style>