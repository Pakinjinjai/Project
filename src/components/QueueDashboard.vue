<script>
import axios from "axios";

export default {
    name: "user-component",

    data() {
        return {
            inputData: {
                topic: '',
                note: '',
                endDate: null,
                status: false,
                locations: false,
                userId: '',
            },
            SelectAddQueues: {},
            SelectQueue: {},
            SelectedaddQueue: {},
            SelectedUpdateQueue: {},
            SelecttrueInfo: {},
            SelecttrueQueue: {},
            SelectAddModal: {},
            SelectedItem: {},
            searchQuery: "",
            Queue: [],
            Queueinfo: [],
            AddModel: false,
            infoModel: false,
            infotrueModel: false,
            UpdateModel: false,
            trueQueueModel: false,
        };
    },

    computed: {
        sorteduser() {
            return this.Queue.slice().sort((a, b) => {
                if (a.status === b.status) {
                    return new Date(a.datauser) - new Date(b.datauser);
                } else {
                    return a.status ? 1 : -1;
                }
            });
        },
        sortedQueueme() {
            return this.SelectQueue.slice().sort((a, b) => {
                if (a.status === b.status) {
                    return new Date(a.dataQueue) - new Date(b.dataQueue);
                } else {
                    return a.status ? 1 : -1;
                }
            });
        },
        sortedQueuemefalse() {
            return this.SelecttrueQueue.slice().sort((a, b) => {
                if (a.status === b.status) {
                    return new Date(a.dataQueue) - new Date(b.dataQueue);
                } else {
                    return a.status ? 1 : -1;
                }
            });
        },
    },
    created() {
        this.getAllUser();
    },
    watch: {
        searchQuery(newVal, oldVal) {
            this.fetchDataFromApi(newVal);
        },
    },
    methods: {
        async fetchDataFromApi(searchQuery) {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/v1/users/?Search=${searchQuery}`
                );
                this.Queue = res.data.Search;
                // console.log(this.QueueSearch);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        async delUser(_id) {
            try {
                const confirmResult = window.confirm(
                    "คุณแน่ใจใช่ไหมที่ต้องการจะลบข้อมูลผู้ใช้งาน"
                );
                if (confirmResult) {
                    const accessToken = localStorage.getItem("accessToken");
                    const res = await axios.delete(
                        `http://localhost:3000/api/v1/users/${_id}`, {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            },
                        }
                    );
                    this.getAllUser();
                    console.log("User deleted successfully:", res);
                }
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        },
        // ตัวอย่างการใช้ Axios เพื่อทำ HTTP POST request ใน Vue.js

        // methods: {
        //     async postDataToServer() {
        //         try {
        //             // สร้าง postData จาก inputData
        //             const postData = {
        //                 topic: this.inputData.topic,
        //                 note: this.inputData.note,
        //                 endDate: this.inputData.endDate ? new Date(this.inputData.endDate) : null,
        //                 status: this.inputData.status,
        //                 locations: this.inputData.locations,
        //                 userId: this.inputData.userId,
        //             };
        //             const response = await axios.post('http://localhost:3000/api/v1/queues', postData);
        //             console.log('Response from server:', response.data);
        //         } catch (error) {
        //             console.error('Error during POST request:', error);
        //         }
        //     },
        // },

        //ทำงานตัวแรก
        async getAllUser() {
            try {
                const res = await axios.get(
                    "http://localhost:3000/api/v1/users/getallusers"
                );
                this.Queue = res.data;
                // this.QueueMe = res.data;
                // console.log("ข้อมูลทั้งหมด",this.Queue);
            } catch (error) {
                console.error("Error fetching all users:", error);
            }
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString();
        },
        AddModal(user) {
            this.SelectAddModal = user;
            console.log("แอดคิว", this.SelectAddModal);
            this.AddModel = true;
        },
        async AddNewQueue(user){ try {
                    // สร้าง postData จาก inputData
                    const postData = {
                        topic: this.inputData.topic,
                        note: this.inputData.note,
                        endDate: this.inputData.endDate ? new Date(this.inputData.endDate) : null,
                        status: this.inputData.status,
                        locations: this.inputData.locations,
                        userId: this.inputData.userId,
                    };
                    const response = await axios.post('http://localhost:3000/api/v1/queues', postData);
                    console.log('Response from server:', response.data);
                } catch (error) {
                    console.error('Error during POST request:', error);
                }
            this.SelectAddQueues = user;
            console.log("แอดคิว", this.SelectAddQueues);
            this.AddModel = false
        },
        showinfoModal(user) {
            this.SelectQueue = user.queues.filter(queue => queue.status === true);
            this.SelecttrueQueue = user.queues.filter(queue => queue.status === false);
            console.log("ข้อมูล true", this.SelectQueue);
            console.log("ข้อมูล false", this.SelecttrueQueue)
            this.infoModel = true;

        },
        trueQueueModal(user) {
            // this.SelecttrueQueue = user.queues.filter(queue => queue.status === false);
            // console.log("ข้อมูล false", this.SelecttrueQueue)
            this.trueQueueModel = true;
        },
        // ปุ๋มตรวจสอบเเล้ว
        trueInfoModal(user) {
            this.SelecttrueInfo = user.queues;
            this.infotrueModel = true;
            this.infoModel = false;
        },
        falseInfoModal(user) {
            this.SelectfalseInfo = user.queues;
            this.infotrueModel = true;
            this.infoModel = false;
        },
        UpdateModal(user) {
            this.SelectedItem = user;
            this.UpdateModel = true;
        },
        UpdateQueue_Btn(user) {
            this.SelectedUpdateQueue = user;
            this.UpdateModel = false;
        },
        addQueue_Btn(user) {
            this.SelectedaddQueue = user;
            this.AddModel = false;
        },
    },
};
</script>
<template>
<section class="p-3 sm:p-5">
    <h3 class="text-2xl text-center font-semibold text-[#140A4B] mb-4">
        ข้อมูลคิวของแต่ละรายบุคคล
    </h3>
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <!-- Start coding here -->
        <div class="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <!-- search -->
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-3">
                <div class="w-full md:w-1/2">
                    <form class="flex items-center">
                        <label for="searchInput" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="searchInput" v-model="searchQuery" class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2" placeholder="คำค้นหา..." required="" />
                        </div>
                    </form>
                </div>
            </div>
            <!-- ตารางเเรก -->
            <div class="overflow-x-auto">
                <table id="dataTable" class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-[#FDFDFD] uppercase bg-[#140A4B]">
                        <tr class="text-center">
                            <th scope="col" class="px-4 py-3">ไอดี</th>
                            <th scope="col" class="px-4 py-3">รหัสบัตรประชาชน</th>
                            <th scope="col" class="px-4 py-3">ชื่อ</th>
                            <th scope="col" class="px-4 py-3">นามสกุล</th>
                            <th scope="col" class="px-4 py-3">จัดการ</th>
                        </tr>
                    </thead>
                    <!-- body -->
                    <tbody v-if="Queue.length > 0">
                        <tr v-for="(item, index) in sorteduser" :key="item._id" :class="{
                                'bg-white': index % 2 === 0,
                                'bg-[#F6F6F6]': index % 2 !== 0,
                            }" class="border-b text-center text-[#303030]">
                            <th scope="row" class="px-4 py-3 font-medium whitespace-nowrap">
                                {{ item._id }}
                            </th>
                            <td class="px-4 py-3">{{ item.idCard }}</td>
                            <td class="px-4 py-3">{{ item.firstname }}</td>
                            <td class="px-4 py-3">{{ item.lastname }}</td>
                            <td class="px-4 py-3 flex text-[#303030] justify-center">
                                <!-- info_Btn -->
                                <button @click="showinfoModal(item)" class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#303030] hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                    <svg class="w-[16px] h-[16px] text-[#303030]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>

                                <!-- edit_Btn -->
                                <button @click="AddModal(item)" class="inline-flex items-center p-0.5 text-lg font-bold text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                    <svg class="w-[16px] h-[16px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 1v16M1 9h16" />
                                    </svg>
                                </button>
                                <!-- Main modal Layout Queue info ยังไม่ตรวจ -->
                                <div id="infoUserModal" tabindex="-1" aria-hidden="true" :class="{ hidden: !infoModel, flex: infoModel }" class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50">
                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                        <!-- Modal content -->
                                        <div class="p-4 bg-white rounded-lg shadow sm:p-5">
                                            <!-- Modal header -->
                                            <div class="flex rounded-t border-b sm:mb-2">
                                                <div class="flex gap-4">
                                                    <h3 class="text-lg text-center font-semibold text-[#303030]">
                                                        รายการคิวรายบุคคล
                                                    </h3>
                                                    <button @click="trueInfoModal(item)" type="button" class="text-[#198B0A] mb-2 inline-flex items-center hover:text-white border border-[#198B0A] hover:bg-[#198B0A] focus:ring-4 focus:outline-none focus:ring-[#140A4B] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                        <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        ตรวจสอบแล้ว
                                                    </button>
                                                </div>

                                                <button @click="infoModel = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <!-- หน้ายังไม่ตรวจ -->
                                            <div class="overflow-x-auto rounded-lg border">
                                                <table class="w-full text-sm text-left text-gray-500">
                                                    <thead class="text-xs text-[#FDFDFD] uppercase bg-[#140A4B]">
                                                        <tr class="text-center">
                                                            <th scope="col" class="px-4 py-3">หัวข้อ</th>
                                                            <th scope="col" class="px-4 py-3">
                                                                วันนัดหมาย
                                                            </th>
                                                            <th scope="col" class="px-4 py-3">
                                                                วันที่เข้าตรวจ
                                                            </th>
                                                            <th scope="col" class="px-4 py-3">สถานะ</th>
                                                            <th scope="col" class="px-4 py-3">จัดการ</th>
                                                        </tr>
                                                    </thead>
                                                    <!-- body -->
                                                    <tbody v-if="SelecttrueQueue.length > 0">
                                                        <tr v-for="(item, index) in sortedQueuemefalse" :key="item._id" :class="{
                                                                    'bg-white': index % 2 === 0,
                                                                    'bg-[#F6F6F6]': index % 2 !== 0,
                                                                }" class="border-b text-center text-[#303030]">
                                                            <th scope="row" class="px-4 py-3 font-medium whitespace-nowrap">
                                                                {{ item.topic }}
                                                            </th>
                                                            <td class="px-4 py-3">
                                                                {{ formatDate(item.startDate) }}
                                                            </td>
                                                            <td class="px-4 py-3">
                                                                {{ formatDate(item.updatedAt) }}
                                                            </td>
                                                            <td class="px-4 py-3">
                                                                {{
                                                                        item.status ? "ตรวจเเล้ว" : "ไม่ตรวจเเล้ว"
                                                                    }}
                                                            </td>
                                                            <td class="px-4 py-3 flex text-[#303030] justify-center">
                                                                Queueinfo_Btn
                                                                <button @click="trueQueueModal(item)" class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#EB1851] hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                                                    <svg class="w-[16px] h-[16px] text-[#303030]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                                    </svg>
                                                                </button>
                                                                <!-- Add_Btn -->
                                                                <button @click="UpdateModal(item)" class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#EB1851] hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                                                    <svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279" />
                                                                    </svg>
                                                                </button>
                                                                <!-- delete_Btn -->
                                                                <button class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#EB1851] hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                                                    <svg class="w-[16px] h-[16px] text-[#303030]" aria-hidden="true" style="color: #eb1851" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                                        <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                                                    </svg>
                                                                </button>
                                                                <!-- Main modal Layout Queue UpdateModel -->
                                                                <div id="UpdateModel" tabindex="-1" aria-hidden="true" :class="{
                                                                            hidden: !UpdateModel,
                                                                            flex: UpdateModel,
                                                                        }" class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50">
                                                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                                                        <!-- Modal content -->
                                                                        <div class="relative p-4 bg-white rounded-lg shadow sm:p-5">
                                                                            <!-- Modal header -->
                                                                            <div class="flex justify-between items-center rounded-t border-b sm:mb-5">
                                                                                <h3 class="text-lg font-semibold text-[#303030]">
                                                                                    แก้ไขคิว
                                                                                </h3>
                                                                                <button @click="UpdateModel = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                                                    </svg>
                                                                                    <span class="sr-only">Close
                                                                                        modal</span>
                                                                                </button>
                                                                            </div>
                                                                            <!-- Modal body -->
                                                                            <form action="#">
                                                                                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                                                                    <!-- _id -->
                                                                                    <div>
                                                                                        <label for="_id" class="block mb-2 text-lg font-bold text-[#303030] text-left">ไอดี</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            {{ item._id }}
                                                                                        </p>
                                                                                    </div>
                                                                                    <!-- idCard -->
                                                                                    <div>
                                                                                        <label for="idCard" class="block mb-2 text-lg font-bold text-[#303030] text-left">รหัสบัตรประชาชน</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            {{ item.idCard }}
                                                                                        </p>
                                                                                    </div>
                                                                                    <!-- firstname -->
                                                                                    <div>
                                                                                        <label for="firstname" class="block mb-2 text-lg font-bold text-[#303030] text-left">ชื่อจริง</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            {{ item.firstname }}
                                                                                        </p>
                                                                                    </div>
                                                                                    <!-- lastname -->
                                                                                    <div>
                                                                                        <label for="lastname" class="block mb-2 text-lg font-bold text-[#303030] text-left">นามสกุล</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            {{ item.lastname }}
                                                                                        </p>
                                                                                    </div>
                                                                                    <!-- topic -->
                                                                                    <div>
                                                                                        <label for="topic" class="block mb-2 text-lg font-bold text-[#303030] text-left">หัวข้อ</label>
                                                                                        <input type="text" name="topic" id="topic" value="" class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="หัวข้อ" />
                                                                                    </div>
                                                                                    <!-- status -->
                                                                                    <div>
                                                                                        <label for="status" class="block mb-2 text-lg font-bold text-[#303030] text-left">สถานะ</label>
                                                                                        <div class="flex justify-center mb-4 ml-auto mr-12">
                                                                                            <label class="inline-flex items-center ml-6">
                                                                                                <input type="radio" class="form-radio" name="accountType" value="false" />
                                                                                                <span class="ml-2">ยังไม่ได้รับ<br />การตรวจสอบ</span>
                                                                                            </label>
                                                                                            <label class="inline-flex items-center">
                                                                                                <input type="radio" class="form-radio" name="accountType" value="true" />
                                                                                                <span class="ml-2">ตรวจสอบแล้ว</span>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- dateQueue -->
                                                                                    <div>
                                                                                        <label for="dateQueue" class="block mb-2 text-lg font-bold text-[#303030] text-left">วันนัดหมาย</label>
                                                                                        <input type="date" name="dateQueue" id="dateQueue" value="" class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="วัน/เดือน/ปี เกิด" />
                                                                                    </div>
                                                                                    <!-- updatedAt -->
                                                                                    <div>
                                                                                        <label for="updatedAt" class="block mb-2 text-lg font-bold text-[#303030] text-left">วันที่เข้าตรวจ</label>
                                                                                        <input type="date" name="updatedAt" id="updatedAt" value="" class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="วัน/เดือน/ปี เกิด" />
                                                                                    </div>
                                                                                    <div class="sm:col-span-2">
                                                                                        <label for="description" class="block mb-2 text-lg font-bold text-[#303030] text-left">คำแนะนำ</label>
                                                                                        <textarea id="description" rows="5" class="block p-2.5 w-full text-sm text-[#303030] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Write a description..."></textarea>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="flex items-center content-center space-x-4">
                                                                                    <button @click="UpdateQueue_Btn(item)" type="button" class="text-[#140A4B] inline-flex items-center hover:text-white border border-[#140A4B] hover:bg-[#140A4B] focus:ring-4 focus:outline-none focus:ring-[#140A4B] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                                                        <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd">
                                                                                            </path>
                                                                                        </svg>
                                                                                        แก้ไขคิว
                                                                                    </button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- Main modal Layout Queue trueQueueModel -->
                                                                <div id="trueQueueModel" tabindex="-1" aria-hidden="true" :class="{
                                                                            hidden: !trueQueueModel,
                                                                            flex: trueQueueModel,
                                                                        }" class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50">
                                                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                                                        <!-- Modal content -->
                                                                        <div class="relative p-4 bg-white rounded-lg shadow sm:p-5">
                                                                            <!-- Modal header -->
                                                                            <div class="flex justify-between items-center rounded-t border-b sm:mb-5">
                                                                                <h3 class="text-lg font-semibold text-[#303030]">
                                                                                    ข้อมูลการนัดหมาย
                                                                                </h3>
                                                                                <button @click="trueQueueModel = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                                                    </svg>
                                                                                    <span class="sr-only">Close
                                                                                        modal</span>
                                                                                </button>
                                                                            </div>
                                                                            <!-- Modal body -->
                                                                            <form action="#">
                                                                                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                                                                    <!-- topic -->
                                                                                    <div>
                                                                                        <label for="topic" class="block mb-2 text-lg font-bold text-[#303030] text-left">หัวข้อ</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            หัวข้อ
                                                                                        </p>
                                                                                    </div>
                                                                                    <!-- status -->
                                                                                    <div>
                                                                                        <label for="status" class="block mb-2 text-lg font-bold text-[#303030] text-left">สถานะ</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            ตรวจสอบแล้ว
                                                                                        </p>
                                                                                    </div>
                                                                                    <!-- dateQueue -->
                                                                                    <div>
                                                                                        <label for="dateQueue" class="block mb-2 text-lg font-bold text-[#303030] text-left">วันนัดหมาย</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            xx-xx-xx
                                                                                        </p>
                                                                                    </div>
                                                                                    <!-- updatedAt -->
                                                                                    <div>
                                                                                        <label for="updatedAt" class="block mb-2 text-lg font-bold text-[#303030] text-left">วันที่เข้าตรวจ</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            xx-xx-xx
                                                                                        </p>
                                                                                    </div>
                                                                                    <div class="sm:col-span-2">
                                                                                        <label for="description" class="block mb-2 text-lg font-bold text-[#303030] text-left">คำแนะนำ</label>
                                                                                        <p class="block p-2.5 w-full text-sm text-[#303030] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-left">
                                                                                            คำแนะนำ
                                                                                        </p>
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
                                </div>
                                <!-- Main modal Layout Queue info ตรวจแล้ว -->
                                <div id="infoUserModal" tabindex="-1" aria-hidden="true" :class="{ hidden: !infotrueModel, flex: infotrueModel }" class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full">
                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                        <!-- Modal content -->
                                        <div class="p-4 bg-white rounded-lg shadow sm:p-5">
                                            <!-- Modal header -->
                                            <div class="flex justify-center rounded-t border-b sm:mb-2">
                                                <div class="flex gap-4">
                                                    <h3 class="text-lg text-center font-semibold text-[#303030]">
                                                        รายการคิวรายบุคคลไม่ตรวจ
                                                    </h3>
                                                    <button @click="infotrueModel = false" type="button" class="text-[#EB1851] mb-2 inline-flex items-center hover:text-white border border-[#EB1851] hover:bg-[#EB1851] focus:ring-4 focus:outline-none focus:ring-[#140A4B] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                        <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        ยังไม่ได้รับการตรวจสอบ
                                                    </button>
                                                </div>
                                                <button @click="infotrueModel = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <!-- หน้าตรวจสอบเเล้ว -->
                                            <div class="overflow-x-auto rounded-lg border">
                                                <table class="w-full text-sm text-left text-gray-500">
                                                    <thead class="text-xs text-[#FDFDFD] uppercase bg-[#140A4B]">
                                                        <tr class="text-center">
                                                            <th scope="col" class="px-4 py-3">หัวข้อ</th>
                                                            <th scope="col" class="px-4 py-3">
                                                                วันนัดหมาย
                                                            </th>
                                                            <th scope="col" class="px-4 py-3">
                                                                วันที่เข้าตรวจ
                                                            </th>
                                                            <th scope="col" class="px-4 py-3">สถานะ</th>
                                                            <th scope="col" class="px-4 py-3">จัดการ</th>
                                                        </tr>
                                                    </thead>
                                                    <!-- body -->
                                                    <tbody v-if="SelectQueue.length > 0">
                                                        <tr v-for="(item, index) in sortedQueueme" :key="item._id" :class="{
                                                                    'bg-white': index % 2 === 0,
                                                                    'bg-[#F6F6F6]': index % 2 !== 0,
                                                                }" class="border-b text-center text-[#303030]">
                                                            <th scope="row" class="px-4 py-3 font-medium whitespace-nowrap">
                                                                {{ item.topic }}
                                                            </th>
                                                            <td class="px-4 py-3">
                                                                {{ formatDate(item.startDate) }}
                                                            </td>
                                                            <td class="px-4 py-3">
                                                                {{ formatDate(item.updatedAt) }}
                                                            </td>
                                                            <td class="px-4 py-3"> {{
                                                                    item.status ? "ตรวจเเล้ว" : "ไม่ตรวจเเล้ว"
                                                                }}</td>
                                                            <td class="px-4 py-3 flex text-[#303030] justify-center">
                                                                <!-- Queueinfo_Btn -->
                                                                <!-- <button @click="trueQueueModal(item)"
                                                                        class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#EB1851] hover:text-gray-800 rounded-lg focus:outline-none"
                                                                        type="button">
                                                                        <svg class="w-[16px] h-[16px] text-[#303030]"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 20 20">
                                                                            <path stroke="currentColor"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" stroke-width="1"
                                                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                                        </svg>
                                                                    </button> -->
                                                                <!-- delete_Btn -->
                                                                <button class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#EB1851] hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                                                    <svg class="w-[16px] h-[16px] text-[#303030]" aria-hidden="true" style="color: #eb1851" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                                        <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                                                    </svg>
                                                                </button>
                                                                <!-- Main modal Layout Queue trueQueueModel -->
                                                                <div id="trueQueueModel" tabindex="-1" aria-hidden="true" :class="{
                                                                                hidden: !trueQueueModel,
                                                                                flex: trueQueueModel,
                                                                            }" class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full">
                                                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                                                        <!-- Modal content -->
                                                                        <div class="relative p-4 bg-white rounded-lg shadow sm:p-5">
                                                                            <!-- Modal header -->
                                                                            <div class="flex justify-between items-center rounded-t border-b sm:mb-5">
                                                                                <h3 class="text-lg font-semibold text-[#303030]">
                                                                                    ข้อมูลการนัดหมาย
                                                                                </h3>
                                                                                <button @click="trueQueueModel = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                                                    </svg>
                                                                                    <span class="sr-only">Close
                                                                                        modal</span>
                                                                                </button>
                                                                            </div>
                                                                            <!-- Modal body -->
                                                                            <form action="#">
                                                                                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                                                                    <!-- topic -->
                                                                                    <div>
                                                                                        <label for="topic" class="block mb-2 text-lg font-bold text-[#303030] text-left">หัวข้อ</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            หัวข้อ
                                                                                        </p>
                                                                                    </div>
                                                                                    <!-- status -->
                                                                                    <div>
                                                                                        <label for="status" class="block mb-2 text-lg font-bold text-[#303030] text-left">สถานะ</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            ตรวจสอบแล้ว
                                                                                        </p>
                                                                                    </div>
                                                                                    <!-- dateQueue -->
                                                                                    <div>
                                                                                        <label for="dateQueue" class="block mb-2 text-lg font-bold text-[#303030] text-left">วันนัดหมาย</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            xx-xx-xx
                                                                                        </p>
                                                                                    </div>
                                                                                    <!-- updatedAt -->
                                                                                    <div>
                                                                                        <label for="updatedAt" class="block mb-2 text-lg font-bold text-[#303030] text-left">วันที่เข้าตรวจ</label>
                                                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                            xx-xx-xx
                                                                                        </p>
                                                                                    </div>
                                                                                    <div class="sm:col-span-2">
                                                                                        <label for="description" class="block mb-2 text-lg font-bold text-[#303030] text-left">คำแนะนำ</label>
                                                                                        <p class="block p-2.5 w-full text-sm text-[#303030] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-left">
                                                                                            คำแนะนำ
                                                                                        </p>
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
                                </div>
                                <!-- Main modal Layout Queue Add -->
                                <div id="AddModel" tabindex="-1" aria-hidden="true" :class="{ hidden: !AddModel, flex: AddModel }" class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50">
                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                        <!-- Modal content -->
                                        <div class="relative p-4 bg-white rounded-lg shadow sm:p-5">
                                            <!-- Modal header -->
                                            <div class="flex justify-between items-center rounded-t border-b sm:mb-5">
                                                <h3 class="text-lg font-semibold text-[#303030]">
                                                    เพิ่มคิว
                                                </h3>
                                                <button @click="AddNewQueue()" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <!-- Modal body -->
                                            <form action="#">
                                                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                                    <!-- _id -->
                                                    <div>
                                                        <label for="_id" class="block mb-2 text-lg font-bold text-[#303030] text-left">ไอดี</label>
                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                            {{ SelectAddModal._id }}
                                                        </p>
                                                    </div>
                                                    <!-- idCard -->
                                                    <div>
                                                        <label for="idCard" class="block mb-2 text-lg font-bold text-[#303030] text-left">รหัสบัตรประชาชน</label>
                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                            {{ SelectAddModal.idCard }}
                                                        </p>
                                                    </div>
                                                    <!-- firstname -->
                                                    <div>
                                                        <label for="firstname" class="block mb-2 text-lg font-bold text-[#303030] text-left">ชื่อจริง</label>
                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                            {{ SelectAddModal.firstname }}
                                                        </p>
                                                    </div>
                                                    <!-- lastname -->
                                                    <div>
                                                        <label for="lastname" class="block mb-2 text-lg font-bold text-[#303030] text-left">นามสกุล</label>
                                                        <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                            {{SelectAddModal.lastname }}
                                                        </p>
                                                    </div>
                                                    <!-- topic -->
                                                    <div>
                                                        <label for="topic" class="block mb-2 text-lg font-bold text-[#303030] text-left">หัวข้อ</label>
                                                        <input  v-model="inputData.title" type="text" name="topic" id="topic" value="" class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="หัวข้อ" />
                                                    </div>
                                                    <br>
                                                    <!-- dateQueue -->
                                                    <div>
                                                        <label for="dateQueue" class="block mb-2 text-lg font-bold text-[#303030] text-left">ประเภทการตรวจ</label>
                                                        <div class=" ml-4 text-start  " >

                                                            <label class="">
                                                                <input type="radio" class="" name="accountType" value="false"  v-model="inputData.locations"/>
                                                                <span class="ml-2">ออนไลน์</span>
                                                            </label>
                                                            <label class=" ml-6  ">
                                                                <input type="radio" class="" name="accountType" value="true"  v-model="inputData.locations"/>
                                                                <span class="ml-2">ออนไซต์</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label for="dateQueue" class="block mb-2 text-lg font-bold text-[#303030] text-left">วันนัดหมาย</label>
                                                        <input class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " type="date" v-model="inputData.endDate" placeholder="1809901075727">
                                                    </div>
                                                    <!-- updatedAt -->
                                                    <!-- <div>
                                                        <label for="updatedAt" class="block mb-2 text-lg font-bold text-[#303030] text-left">วันที่เข้าตรวจ</label>
                                                        <input type="date" name="updatedAt" id="updatedAt" value="" class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="วัน/เดือน/ปี เกิด" />
                                                    </div> -->
                                                    <div class="sm:col-span-2">
                                                        <label for="description" class="block mb-2 text-lg font-bold text-[#303030] text-left">คำแนะนำ</label>
                                                        <input row="5" class="block p-2.5 w-full text-sm text-[#303030] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" v-model="inputData.topic" placeholder="Write a description..."> </div>
                                                    <!-- <div class="sm:col-span-2">
                                                        <label for="description" class="block mb-2 text-lg font-bold text-[#303030] text-left">คำแนะนำ</label>
                                                        <textarea id="description" rows="5" class="block p-2.5 w-full text-sm text-[#303030] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"  placeholder="Write a description..."></textarea>
                                                    </div> -->
                                                </div>
                                                <div class="flex items-center content-center space-x-4">
                                                    <button @click="addQueue_Btn(item)" type="button" class="text-[#140A4B] inline-flex items-center hover:text-white border border-[#140A4B] hover:bg-[#140A4B] focus:ring-4 focus:outline-none focus:ring-[#140A4B] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                        <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        เพิ่มคิว
                                                    </button>
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
