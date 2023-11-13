<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Title</th>
          <th scope="col" class="px-6 py-3">Date</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody v-if="Queue.length > 0">
        <tr
          v-for="(item, index) in sortedQueue"
          :key="item._id"
          class="bg-white border-b"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {{ item.topic }}
          </th>
          <td class="px-6 py-4">{{ formatDate(item.dateQueue) }}</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div
                class="h-2.5 w-2.5 rounded-full m-2"
                :class="{
                  'bg-green-700': item.status,
                  'bg-red-700': !item.status,
                }"
              ></div>
              <div
                :class="{
                  'text-green-700': item.status,
                  'text-red-700': !item.status,
                }"
              >
                {{ item.status ? "Successful" : "Waiting" }}
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <button @click="toggleMessage(index)">Show Message</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="4">No data available.</td>
        </tr>
      </tbody>
    </table>
    <div
      class="grid justify-center content-center h-14 shadow-md sm:rounded-lg bg-white"
      v-show="showMessage"
    >
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
      } catch (error) {}
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
