<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <div class="flex justify-center items-center h-64 bg-blue-500 text-white">
      <h1 class="text-4xl font-bold">Services</h1>
    </div>
    
    <div class="container mx-auto mt-8 flex justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <!-- Service Card 1 -->
        <div class="p-4 border rounded-lg bg-white">
          <h2 class="text-xl font-semibold">Online Care</h2>
          <svg class="w-6 h-6 text-gray-600">
            <!-- Add your SVG path here -->
          </svg>
          <ul class="mt-2">
            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">Choose</button>
        </div>

        <!-- Service Card 2 -->
        <div class="p-4 border rounded-lg bg-white">
          <h2 class="text-xl font-semibold">Free Online Chat</h2>
          <svg class="w-6 h-6 text-gray-600">
            <!-- Add your SVG path here -->
          </svg>
          <ul class="mt-2">
            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">Choose</button>
        </div>

        <!-- Service Card 3 -->
        <div class="p-4 border rounded-lg bg-white">
          <h2 class="text-xl font-semibold">Show Queue Card</h2>
          <svg class="w-6 h-6 text-gray-600">
            <!-- Add your SVG path here -->
          </svg>
          <ul class="mt-2">
            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">Choose</button>
        </div>
      </div>
    </div>

    <!-- Queue Card Section -->
    <div class="mt-8 p-4 bg-white">
      <img src="@/assets/card.jpg" alt="card.jpg" class="w-64 h-64 mx-auto mb-4">
      <div class="flex justify-center items-center">
        <div>
          <h2 class="text-xl font-semibold">Your Queue Card</h2>
          <h3>นาย สมชาย ใจกล้า</h3>
          <p class="text-gray-600">Please arrive on your appointment date.</p>
        </div>
        <div class="pl-8">
          <button class="px-4 py-2 bg-blue-500 text-white rounded-full">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tabs: [
        { title: 'EYE Content', content: 'Lorem ipsum dolor sit amet.' },
        { title: 'BODY Content', content: 'Lorem ipsum dolor sit amet.' },
        { title: 'BONE Content', content: 'Lorem ipsum dolor sit amet.' },
      ],
    };
  },
  methods: {
    toggleTab(tabIndex) {
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === tabIndex;
      });
    },
  },
};
</script>

<style>

</style>
