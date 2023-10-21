<template>
  <div class="container flex flex-col items-center gap-16 mx-auto my-32">
    <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main"
      >
        <p class="text-base leading-7 text-dark-grey-600">ความดันโลหิต</p>
        <span
          ><input
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder=""
            required=""
          />
        </span>

        <a class="text-lg font-bold text-purple-blue-500">DONE</a>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main"
      >
        <p class="text-base leading-7 text-dark-grey-600">
          ปริมาณออกซิเจนในเลือด
        </p>
        <span
          ><input
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder=""
            required=""
          />
        </span>

        <a class="text-lg font-bold text-purple-blue-500" href="">DONE</a>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main"
      >
        <p class="text-base leading-7 text-dark-grey-600">ค่าอุณภูมิร่างกาย</p>
        <span
          ><input
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder=""
            required=""
          />
        </span>

        <!-- <p class="text-2xl font-extrabold text-dark-grey-900">
            ค่าอุณภูมิร่างกาย
          </p> -->
        <a
          class="text-lg font-bold text-purple-blue-500"
          target="_blank"
          href=""
          >DONE</a
        >
      </div>
    </div>
  </div>
</template>
<script></script>
