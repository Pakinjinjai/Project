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
              class="flex  cursor-pointer font-bold hover:text-[#FDFDFD] active:text-[#FDFDFD] focus:text-[#FDFDFD] transition-transform active:scale-110 py-5 px-2 text-[#FDFDFD] rounded-lg"
            ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mx-auto mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

            หน้าหลัก
            </a>

            <div
              id="Health"
              class="hidden md:flex items-center space-x-1"
              v-on:click="goToHealth()"
              v-if="token != null"
            >
              <a
                class="font-bold hover:text-[#FDFDFD] active:text-[#FDFDFD] focus:text-[#FDFDFD] transition-transform active:scale-110 py-5 px-2 text-[#FDFDFD] rounded-lg"
                >ตรวจวัดสุขภาพ</a
              >
            </div>
            <div
              id="Queue"
              v-if="token != null"
              v-on:click="goToQueue()"
              class="hidden md:flex items-center space-x-1"
            >
              <a
                class="font-bold hover:text-[#FDFDFD] active:text-[#FDFDFD] focus:text-[#FDFDFD] transition-transform active:scale-110 py-5 px-2 text-[#FDFDFD] rounded-lg"
                >คิวส่วนตัว</a
              >
            </div>
            <div
              class="hidden md:flex items-center space-x-1"
              id="accountEle"
              v-on:click="goToAccountInfo()"
              v-if="token != null"
            >
              <a
                class="font-bold hover:text-[#FDFDFD] active:text-[#FDFDFD] focus:text-[#FDFDFD] transition-transform active:scale-110 py-5 px-2 text-[#FDFDFD] rounded-lg"
                >ประวัติส่วนตัว</a
              >
            </div>
            <a
                class="font-bold hover:text-[#FDFDFD] py-5 px-2 text-[#FDFDFD] rounded-lg"
                id="Name"
                v-if="token != null"
              >
                {{ profileName.gender ? "Mr" : "Mrs" }}.{{
                  profileName.firstname
                }}
              </a>
          </div>
          <!-- singin-singup -->
          <div class="flex ml-auto">
          <div
            v-if="token == null"
            id="signIn"
            class="md:flex space-x-1"
            v-on:click="signIn()"
          >
            <a
              id="signIn"
              class="text-[#36a343] space-x-1 font-medium hover:text-[#36a343c2] active:text-[#303030] focus:text-[#303030] transition-transform active:scale-110 py-5 px-2 color: rgb(0 0 0) rounded-lg"
              style="display: block; align-items: center; height: 100%"
              >เข้าสู่ระบบ</a
            >
          </div>
          <div
            v-if="token == null"
            id="signIn"
            class="items-center md:flex space-x-1"
            v-on:click="signUp()"
          >
            <a
              id="signUp"
              class="text-[#EB1851] space-x-1 font-medium hover:text-[#eb1850c2] active:text-[#303030] focus:text-[#303030] transition-transform active:scale-110 py-5 px-2 color: rgb(0 0 0) rounded-lg"
              style="display: block; align-items: center; height: 100%"
              >สมัครสมาชิก</a
            >
          </div>
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
              >ออกจากระบบ
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
    signUp() {
      this.$router.push("/signup");
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
