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
              class="cursor-pointer font-bold hover:text-[#FDFDFD] active:text-[#FDFDFD] focus:text-[#FDFDFD] transition-transform active:scale-110 py-5 px-2 text-[#FDFDFD] rounded-lg"
            >
              Home
            </a>

            <div
              id="User"
              class="hidden md:flex items-center space-x-1"
              v-on:click=""
              v-if="token != null"
            >
              <a
                class="font-bold hover:text-[#FDFDFD] active:text-[#FDFDFD] focus:text-[#FDFDFD] transition-transform active:scale-110 py-5 px-2 text-[#FDFDFD] rounded-lg"
                >User</a
              >
            </div>
            <div
              id="Report"
              v-if="token != null"
              v-on:click=""
              class="hidden md:flex items-center space-x-1"
            >
              <a
                class="font-bold hover:text-[#FDFDFD] active:text-[#FDFDFD] focus:text-[#FDFDFD] transition-transform active:scale-110 py-5 px-2 text-[#FDFDFD] rounded-lg"
                >Report</a
              >
            </div>
            <div
              class="hidden md:flex items-center space-x-1"
              id="accountEle"
              v-on:click=""
              v-if="token != null"
            >
              <a
                class="font-bold hover:text-[#FDFDFD] active:text-[#FDFDFD] focus:text-[#FDFDFD] transition-transform active:scale-110 py-5 px-2 text-[#FDFDFD] rounded-lg"
                >User health</a
              >
            </div>
            <a
                class="font-bold hover:text-[#FDFDFD] py-5 px-2 text-[#FDFDFD] rounded-lg"
                id="Name"
                v-if="token != null"
              >
                Admin : {{
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
              class="text-[#EB1851] font-medium hover:text-red-600 active:text-[#303030] focus:text-[#303030] transition-transform active:scale-110 py-5 px-2 color: rgb(0 0 0) rounded-lg"
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
              class="text-[#EB1851] font-medium  hover:text-red-600 active:text-[#303030] focus:text-[#303030] transition-transform active:scale-110 py-5 px-2 color: rgb(0 0 0) rounded-lg"
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
#Report,
#User,
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
