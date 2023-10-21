<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Date</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in items" v-bind:key="index">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.title }}
          </th>
          <td class="px-6 py-4">{{ item.dateQueue }}</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div class="h-2.5 w-2.5 rounded-full bg-green-700 mr-2"></div>
              <div class="h-2.5 w-2.5 rounded-full bg-red-700 mr-2"></div>
              <div class="flex p-3">
                <div class="text-green-700">Online</div>
                <div class="text-red-700">Offline</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                style="margin-left: 20px"
              >
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "นัดตรวจทางงเดินปอด",
          dateQueue: "2023-10-19",
          status: "true",
        },
        {
          title: "นัดตรวจสอบสายตา",
          dateQueue: "2023-10-20",
          status: "true",
        },
        {
          title: "นัดตรวจอาการจากครั้งที่แล้ว",
          dateQueue: "2023-10-21",
          status: "true",
        },
      ],
    };
  },
};
</script>
