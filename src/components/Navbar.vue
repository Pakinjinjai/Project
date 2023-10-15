<template>
  <nav>
    <!-- Desktop menu -->
    <div class="font-sans bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between">
          <!-- menu -->
          <div class="flex space-x-4">
            <!-- logo -->
            <a href="" class="flex items-center space-x-2 py-5 px-2">
              <router-link to="/home">
                <span class="text-2xl font-extrabold text-white">Home</span>
              </router-link>
            </a>
            <!-- menu -->
            <div class="hidden md:flex items-center space-x-1">
              <router-link to="/about">
                <a class="hover:bg-sky-700 py-5 px-2 text-indigo-200 rounded-lg"
                  >About</a
                >
              </router-link>
              <router-link to="/contact">
                <a class="hover:bg-sky-700 py-5 px-2 text-indigo-200 rounded-lg"
                  >Contact</a
                >
              </router-link>
              <router-link to="/service">
                <a class="hover:bg-sky-700 py-5 px-2 text-indigo-200 rounded-lg"
                  >Service</a
                >
              </router-link>
              <router-link to="/account-info">
                <a class="hover:bg-sky-700 py-5 px-2 text-indigo-200 rounded-lg"
                  >Account</a
                >
              </router-link>
            </div>
          </div>
          <!-- login -->
          <div id="signIn" class="hidden md:flex items-center space-x-1">
            <router-link to="/signin">
              <a class="hover:bg-sky-700 py-5 px-2 text-indigo-200 rounded-lg"
                >Sign in</a
              >
            </router-link>
          </div>
          <!-- button show mobile menu -->
          <div class="md:hidden flex items-center">
            <button @click="showMobileMenu = !showMobileMenu" class="py-5 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-indigo-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <!-- <div class="md:hidden bg-gray-800" v-show="showMobileMenu">
      <router-link to="/home"
        ><a
          class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100"
          >Home</a
        ></router-link
      >
      <router-link to="/about"
        ><a
          class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100"
          >About</a
        ></router-link
      >
      <router-link to="/setting"
        ><a
          class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100"
          >Setting</a
        ></router-link
      >
    </div> -->
  </nav>
</template>

<style lang="scss" scoped>
.signInhide {
  display: none;
}
</style>

<script>
// import { ref } from "vue";
export default {
  name: "Navbar",
  created() {
    const signInele = document.getElementById("signIn");

    const existToken = localStorage.getItem("accessToken");
    if (existToken) {
      console.log(existToken);
      console.log(signInele);
      //   signInele.classList.add("signInhide");
    }
  },
};
// const showMobileMenu = ref(false);
</script>
