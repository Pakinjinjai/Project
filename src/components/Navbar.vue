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
            </div>
             <div
              class="hidden md:flex items-center space-x-1"
              v-on:click="goToHealth()"
              v-if="token != null"
            >
              <a class="hover:bg-sky-700 py-5 px-2 text-indigo-200 rounded-lg"
                >Health</a
              >
            </div> 
            <div class="hidden md:flex items-center space-x-1">
              <router-link to="/service">
                <a class="hover:bg-sky-700 py-5 px-2 text-indigo-200 rounded-lg"
                  >Service</a
                >
              </router-link>
            </div>
            <div
              class="hidden md:flex items-center space-x-1"
              id="accountEle"
              v-on:click="goToAccountInfo()"
              v-if="token != null"
            >
              <a class="hover:bg-sky-700 py-5 px-2 text-indigo-200 rounded-lg"
                >Account</a
              >
            </div>
          </div>
          <!-- login -->
          <div
            v-if="token == null"
            id="signIn"
            lass="items-center md:flex space-x-1"
            v-on:click="signIn()"
          >
            <a
              id="signIn"
              class="hover:bg-sky-700 py-5 px-2 text-indigo-200 rounded-lg"
              style="display: block; align-items: center; height: 100%"
              >Sign in</a
            >
          </div>
          <div
            v-if="token != null"
            id="signOut"
            class="items-center space-x-1"
            v-on:click="signOut()"
          >
            <a
              id="signOut"
              class="hover:bg-sky-700 py-5 px-2 text-indigo-200 rounded-lg"
              style="display: flex; align-items: center; height: 100%"
              >Sign Out</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#accountEle,
#signOut,
#signIn {
  cursor: pointer;
}
</style>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      token: null,
    };
  },
  created() {
    this.checkAccessToken();
  },
  methods: {
    checkAccessToken() {
      this.token = localStorage.getItem("accessToken");

      // const accountElement = document.getElementById("accountEle");
      // if (!this.token) {
      //   accountElement.style.display = "none";
      // } else {
      //   accountElement.style.display = "block";
      // }
    },
    signIn() {
      this.$router.push("/signin");
    },
    signOut() {
      localStorage.removeItem("accessToken");
      window.location.reload();
      this.token = null;
      this.checkAccessToken(); // เรียกใช้ฟังก์ชันเพื่อตรวจสอบ accessToken
    },
    goToAccountInfo() {
      const token = localStorage.getItem("accessToken");
      if (token) {
        this.$router.push("/account-info");
      }
    },
    goToHealth() {
      const token = localStorage.getItem("accessToken");
      if (token) {
        this.$router.push("/health");
      }
    },
  },
};
</script>
