<script>
export default {
  data() {
    return {
      health: [
        {
          bloodPressure: 120,
          temperature: 37.5,
          oxygen: 96,
          heartRate: 88,
        },
      ],
    };
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
          ><p class="text-base leading-7 text-dark-grey-600">
            {{ health[0].bloodPressure }} mmHg
          </p>
        </span>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">ปริมาณออกซิเจนในเลือด</p>
        <span
          ><p class="text-base leading-7 text-dark-grey-600">
            {{ health[0].oxygen }} %
          </p>
        </span>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">ค่าอุณภูมิร่างกาย</p>
        <span
          ><p class="text-base leading-7 text-dark-grey-600">
            {{ health[0].temperature }} °C
          </p>
        </span>
      </div>
      <div
        class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl hover:shadow shadow-main"
      >
        <p class="text-xl text-dark-grey-900">อัตราการเต้นของหัวใจ</p>
        <span
          ><p class="text-base leading-7 text-dark-grey-600">
            {{ health[0].heartRate }} bpm
          </p>
        </span>
      </div>
    </div>
  </div>
</template>
