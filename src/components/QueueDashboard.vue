<script>
import axios from "axios";

export default {
    name: "user-component",
    data() {
        return {
            AddModel: false,
            infoModel: false,
            UpdateModel: false,
        };
    },
    methods: {
        AddModal() {
            this.AddModel = true;
        },
        showinfoModal() {
            this.infoModel = true;
        },
        UpdateModal() {
            this.UpdateModel = true;
        },
        UpdateQueue_Btn() {
            this.UpdateModel = false;
        },
        addQueue_Btn() {
            this.AddModel = false;
        },
    },
};
</script>
<template>
    <section class="mt-5 p-3 sm:p-5">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <!-- search -->
                <div
                    class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-3 ">
                    <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                                <th scope="col" class="px-4 py-3">จัดการ</th>
                            </tr>
                        </thead>
                        <!-- body -->
                        <tbody>
                            <tr class="border-b text-center  text-[#303030]">
                                <th scope="row" class="px-4 py-3 font-medium  whitespace-nowrap dark:text-white">
                                    &#34HN1703572305&#34;
                                </th>
                                <td class="px-4 py-3">1809901075727</td>
                                <td class="px-4 py-3">ภาคิน</td>
                                <td class="px-4 py-3">จิ้นจ้าย</td>
                                <td class="px-4 py-3 flex  text-[#303030] justify-center ">
                                    <!-- info_Btn -->
                                    <button @click="showinfoModal()"
                                        class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#303030] hover:text-gray-800 rounded-lg focus:outline-none "
                                        type="button">
                                        <svg class="w-[16px] h-[16px] text-[#303030] " aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </button>
                                    <!-- edit_Btn -->
                                    <button @click="AddModal()"
                                        class="inline-flex items-center p-0.5 text-lg font-bold text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none "
                                        type="button">
                                        <svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                    <!-- Main modal Layout Queue info -->
                                    <div id="infoUserModal" tabindex="-1" aria-hidden="true"
                                        :class="{ hidden: !infoModel, flex: infoModel }"
                                        class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 ">
                                        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                            <!-- Modal content -->
                                            <div class=" p-4 bg-white rounded-lg shadow  sm:p-5">
                                                <!-- Modal header -->
                                                <div class="flex justify-center rounded-t border-b">
                                                    <div class="flex gap-4">
                                                        <h3 class="text-lg text-center font-semibold text-[#303030]">
                                                            รายการคิว
                                                        </h3>
                                                        <label
                                                            class="relative inline-flex items-center mb-5 cursor-pointer">
                                                            <input type="checkbox" value="" class="sr-only peer">
                                                            <div
                                                                class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600">
                                                            </div>
                                                            <span
                                                                class="ms-3 text-sm font-medium text-gray-900">ยังไม่ได้รับการตรวจสอบ/ตรวจสอบแล้ว</span>
                                                        </label>
                                                    </div>

                                                    <button @click="infoModel = false" type="button"
                                                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                clip-rule="evenodd"></path>
                                                        </svg>
                                                        <span class="sr-only">Close modal</span>
                                                    </button>
                                                </div>
                                                <!-- user info -->
                                                <div class="overflow-x-auto rounded-lg border ">
                                                    <table
                                                        class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                        <thead class="text-xs text-[#FDFDFD] uppercase bg-[#140A4B] ">
                                                            <tr class="text-center">
                                                                <th scope="col" class="px-4 py-3">หัวข้อ</th>
                                                                <th scope="col" class="px-4 py-3">วันนัดหมาย</th>
                                                                <th scope="col" class="px-4 py-3">วันที่เข้าตรวจ</th>
                                                                <th scope="col" class="px-4 py-3">สถานะ</th>
                                                                <th scope="col" class="px-4 py-3">จัดการ</th>
                                                            </tr>
                                                        </thead>
                                                        <!-- body -->
                                                        <tbody>
                                                            <tr class="border-b text-center  text-[#303030]">
                                                                <th scope="row"
                                                                    class="px-4 py-3 font-medium  whitespace-nowrap dark:text-white">
                                                                    &#34xxxxx&#34;
                                                                </th>
                                                                <td class="px-4 py-3">xx-xx-xx</td>
                                                                <td class="px-4 py-3">xx-xx-xx</td>
                                                                <td class="px-4 py-3">true/false</td>
                                                                <td class="px-4 py-3 flex  text-[#303030] justify-center ">
                                                                    <!-- Add_Btn -->
                                                                    <button @click="UpdateModal()"
                                                                        class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#EB1851] hover:text-gray-800 rounded-lg focus:outline-none "
                                                                        type="button">
                                                                        <svg class="w-[16px] h-[16px] text-gray-800 dark:text-white"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor" viewBox="0 0 20 20">
                                                                            <path
                                                                                d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" />
                                                                        </svg>
                                                                    </button>
                                                                    <!-- delete_Btn -->
                                                                    <button
                                                                        class="inline-flex items-center p-0.5 text-lg font-bold text-center text-[#EB1851] hover:text-gray-800 rounded-lg focus:outline-none "
                                                                        type="button">
                                                                        <svg class="w-[16px] h-[16px] text-[#303030]"
                                                                            aria-hidden="true" style="color: #EB1851;"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor" viewBox="0 0 18 20">
                                                                            <path
                                                                                d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                                                        </svg>
                                                                    </button>
                                                                    <!-- Main modal Layout Queue UpdateModel -->
                                                                    <div id="UpdateModel" tabindex="-1" aria-hidden="true"
                                                                        :class="{ hidden: !UpdateModel, flex: UpdateModel }"
                                                                        class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50">
                                                                        <div
                                                                            class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                                                            <!-- Modal content -->
                                                                            <div
                                                                                class="relative p-4 bg-white rounded-lg shadow  sm:p-5">
                                                                                <!-- Modal header -->
                                                                                <div
                                                                                    class="flex justify-between items-center  rounded-t border-b sm:mb-5 ">
                                                                                    <h3
                                                                                        class="text-lg font-semibold text-[#303030] ">
                                                                                        แก้ไขคิว
                                                                                    </h3>
                                                                                    <button @click="UpdateModel = false"
                                                                                        type="button"
                                                                                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                                                                        <svg aria-hidden="true"
                                                                                            class="w-5 h-5"
                                                                                            fill="currentColor"
                                                                                            viewBox="0 0 20 20"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <path fill-rule="evenodd"
                                                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                                                clip-rule="evenodd"></path>
                                                                                        </svg>
                                                                                        <span class="sr-only">Close
                                                                                            modal</span>
                                                                                    </button>
                                                                                </div>
                                                                                <!-- Modal body -->
                                                                                <form action="#">
                                                                                    <div
                                                                                        class="grid gap-4 mb-4 sm:grid-cols-2">
                                                                                        <!-- _id -->
                                                                                        <div>
                                                                                            <label for="_id"
                                                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">ไอดี</label>
                                                                                            <p
                                                                                                class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                                HN1703572305</p>

                                                                                        </div>
                                                                                        <!-- idCard -->
                                                                                        <div>
                                                                                            <label for="idCard"
                                                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">รหัสบัตรประชาชน</label>
                                                                                            <p
                                                                                                class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                                1809901075727</p>
                                                                                        </div>
                                                                                        <!-- firstname -->
                                                                                        <div>
                                                                                            <label for="firstname"
                                                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">ชื่อจริง</label>
                                                                                            <p
                                                                                                class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                                ภาคิน</p>
                                                                                        </div>
                                                                                        <!-- lastname -->
                                                                                        <div>
                                                                                            <label for="lastname"
                                                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">นามสกุล</label>
                                                                                            <p
                                                                                                class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                                                จิ้นจ้าย</p>
                                                                                        </div>
                                                                                        <!-- topic -->
                                                                                        <div>
                                                                                            <label for="topic"
                                                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">หัวข้อ</label>
                                                                                            <input type="text" name="topic"
                                                                                                id="topic" value=""
                                                                                                class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                                                                placeholder="หัวข้อ" />
                                                                                        </div>
                                                                                        <!-- status -->
                                                                                        <div>
                                                                                            <label for="status"
                                                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">สถานะ</label>
                                                                                            <div
                                                                                                class="flex justify-center mb-4 ml-auto mr-12">
                                                                                                <label
                                                                                                    class="inline-flex items-center ml-6">
                                                                                                    <input type="radio"
                                                                                                        class="form-radio"
                                                                                                        name="accountType"
                                                                                                        value="false" />
                                                                                                    <span
                                                                                                        class="ml-2">ยังไม่ได้รับ<br>การตรวจสอบ</span>
                                                                                                </label>
                                                                                                <label
                                                                                                    class="inline-flex items-center">
                                                                                                    <input type="radio"
                                                                                                        class="form-radio"
                                                                                                        name="accountType"
                                                                                                        value="true" />
                                                                                                    <span
                                                                                                        class="ml-2">ตรวจสอบแล้ว</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                        <!-- dateQueue -->
                                                                                        <div>
                                                                                            <label for="dateQueue"
                                                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">วันนัดหมาย</label>
                                                                                            <input type="date"
                                                                                                name="dateQueue"
                                                                                                id="dateQueue" value=""
                                                                                                class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                                                                placeholder="วัน/เดือน/ปี เกิด" />
                                                                                        </div>
                                                                                        <!-- updatedAt -->
                                                                                        <div>
                                                                                            <label for="updatedAt"
                                                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">วันที่เข้าตรวจ</label>
                                                                                            <input type="date"
                                                                                                name="updatedAt"
                                                                                                id="updatedAt" value=""
                                                                                                class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                                                                placeholder="วัน/เดือน/ปี เกิด" />
                                                                                        </div>
                                                                                        <div class="sm:col-span-2">
                                                                                            <label for="description"
                                                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">คำแนะนำ</label>
                                                                                            <textarea id="description"
                                                                                                rows="5"
                                                                                                class="block p-2.5 w-full text-sm text-[#303030] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                                                                                                placeholder="Write a description..."></textarea>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        class="flex items-center content-center space-x-4">
                                                                                        <button @click="UpdateQueue_Btn()"
                                                                                            type="button"
                                                                                            class="text-[#140A4B] inline-flex items-center hover:text-white border border-[#140A4B] hover:bg-[#140A4B] focus:ring-4 focus:outline-none focus:ring-[#140A4B] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                                                            <svg class="mr-1 -ml-1 w-5 h-5"
                                                                                                fill="currentColor"
                                                                                                viewBox="0 0 20 20"
                                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                                <path fill-rule="evenodd"
                                                                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                                                    clip-rule="evenodd">
                                                                                                </path>
                                                                                            </svg>
                                                                                            Update User
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
                                    </div>
                                    <!-- Main modal Layout Queue Add -->
                                    <div id="AddModel" tabindex="-1" aria-hidden="true"
                                        :class="{ hidden: !AddModel, flex: AddModel }"
                                        class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50">
                                        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                            <!-- Modal content -->
                                            <div class="relative p-4 bg-white rounded-lg shadow  sm:p-5">
                                                <!-- Modal header -->
                                                <div class="flex justify-between items-center  rounded-t border-b sm:mb-5 ">
                                                    <h3 class="text-lg font-semibold text-[#303030] ">
                                                        เพิ่มคิว
                                                    </h3>
                                                    <button @click="AddModel = false" type="button"
                                                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#303030] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                clip-rule="evenodd"></path>
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
                                                            <label for="_id"
                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">ไอดี</label>
                                                            <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                HN1703572305</p>

                                                        </div>
                                                        <!-- idCard -->
                                                        <div>
                                                            <label for="idCard"
                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">รหัสบัตรประชาชน</label>
                                                            <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                1809901075727</p>
                                                        </div>
                                                        <!-- firstname -->
                                                        <div>
                                                            <label for="firstname"
                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">ชื่อจริง</label>
                                                            <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                ภาคิน</p>
                                                        </div>
                                                        <!-- lastname -->
                                                        <div>
                                                            <label for="lastname"
                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">นามสกุล</label>
                                                            <p class="text-left p-2.5 bg-gray-50 border rounded-lg">
                                                                จิ้นจ้าย</p>
                                                        </div>
                                                        <!-- topic -->
                                                        <div>
                                                            <label for="topic"
                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">หัวข้อ</label>
                                                            <input type="text" name="topic" id="topic" value=""
                                                                class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                                placeholder="หัวข้อ" />
                                                        </div>
                                                        <!-- dateQueue -->
                                                        <div>
                                                            <label for="dateQueue"
                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">วันนัดหมาย</label>
                                                            <input type="date" name="dateQueue" id="dateQueue" value=""
                                                                class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                                placeholder="วัน/เดือน/ปี เกิด" />
                                                        </div>
                                                        <!-- updatedAt -->
                                                        <!-- <div>
                                                                                            <label for="updatedAt"
                                                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">วันที่เข้าตรวจ</label>
                                                                                            <input type="date"
                                                                                                name="updatedAt"
                                                                                                id="updatedAt" value=""
                                                                                                class="bg-gray-50 border border-gray-300 text-[#303030] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                                                                placeholder="วัน/เดือน/ปี เกิด" />
                                                                                        </div> -->
                                                        <div class="sm:col-span-2">
                                                            <label for="description"
                                                                class="block mb-2 text-lg font-bold text-[#303030] text-left">คำแนะนำ</label>
                                                            <textarea id="description" rows="5"
                                                                class="block p-2.5 w-full text-sm text-[#303030] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                                                                placeholder="Write a description..."></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center content-center space-x-4">
                                                        <button @click="addQueue_Btn()" type="button"
                                                            class="text-[#140A4B] inline-flex items-center hover:text-white border border-[#140A4B] hover:bg-[#140A4B] focus:ring-4 focus:outline-none focus:ring-[#140A4B] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                            <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                    clip-rule="evenodd">
                                                                </path>
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
