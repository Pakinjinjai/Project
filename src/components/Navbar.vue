<template>
  <nav>
    <!-- Desktop menu -->
    <div class="font-sans bg-[#140A4B]">
      <div class="max-w-7xl mx-auto">
        <div class="flex">
          <!-- menu -->
          <div class="flex space-x-4">
            <a
              v-on:click="goToHome()"
              class="cursor-pointer font-bold hover:text-white active:text-white focus:text-white transition-transform active:scale-110 py-5 px-2 text-white rounded-lg"
            >
              Home
            </a>

            <div
              id="Health"
              class="hidden md:flex items-center space-x-1"
              v-on:click="goToHealth()"
              v-if="token != null"
            >
              <a
                class="font-bold hover:text-white active:text-white focus:text-white transition-transform active:scale-110 py-5 px-2 text-white rounded-lg"
                >Health</a
              >
            </div>
            <div
              id="Queue"
              v-if="token != null"
              v-on:click="goToQueue()"
              class="hidden md:flex items-center space-x-1"
            >
              <a
                class="font-bold hover:text-white active:text-white focus:text-white transition-transform active:scale-110 py-5 px-2 text-white rounded-lg"
                >Queue</a
              >
            </div>
            <div
              class="hidden md:flex items-center space-x-1"
              id="accountEle"
              v-on:click="goToAccountInfo()"
              v-if="token != null"
            >
              <a
                class="font-bold hover:text-white active:text-white focus:text-white transition-transform active:scale-110 py-5 px-2 text-white rounded-lg"
                >Account</a
              >
            </div>
            <a
                class="font-bold hover:text-white py-5 px-2 text-white rounded-lg"
                id="Name"
                v-if="token != null"
              >
                {{ profileName.gender ? "Mr" : "Mrs" }}.{{
                  profileName.firstname
                }}
              </a>
          </div>
          
          <div
            v-if="token == null"
            id="signIn"
            lass="items-center md:flex space-x-1"
            v-on:click="signIn()"
          >
            <a
              id="signIn"
              class="hover:bg-sky-700 py-5 px-2 color: rgb(0 0 0) rounded-lg"
              style="display: block; align-items: center; height: 100%"
              >Sign in</a
            >
          </div>
          <div
            v-if="token != null"
            id="signOut"
            class="ml-auto items-center space-x-1"
            v-on:click="signOut()"
          >
            <a
              id="signOut"
              class="text-red-600 hover:text-red active:text-black focus:text-black transition-transform active:scale-110 py-5 px-2 color: rgb(0 0 0) rounded-lg"
              style="display: flex; align-items: center; height: 100%"
              >Sign Out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
#accountEle,
#Queue,
#Health,
#signOut,
#signIn {
  cursor: pointer;
}

#Name {
  display: flex;
  justify-content: flex-end; /* ทำให้อยู่ตรงกลางแถว */
  align-items: center; /* ทำให้อยู่ตรงกลางคอลัมน์ */
}
</style>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
      token: null,
      profileName: {},
    };
  },
  created() {
    this.checkAccessToken();
    this.getData();
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
    goToQueue() {
      const token = localStorage.getItem("accessToken");
      if (token) {
        this.$router.push("/queue");
      }
    },
    getData() {
      axios
        .get("http://localhost:3000/api/v1/users/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          this.profileName = res.data.user;
          console.log(this.profileName);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToHome() {
      this.$router.push("/home");
    },
  },
};
</script>
