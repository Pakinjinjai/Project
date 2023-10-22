<template>
  <section class="pagr-container">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        <img class="w-auto h-10 mr-2" src="/KMITL_PCC.png" />
        | Sing up
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Create account
          </h1>
          <form id="vuetify" class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                type="email"
                v-model="formData.email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="e-mail"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                type="password"
                v-model="formData.password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div>
              <label
                for="confirmpassword"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Confirm Password</label
              >
              <input
                type="password"
                name="confirmpassword"
                v-model="formData.confirmPassword"
                id="confirmpassword"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required=""
              />
            </div>

            <button
              type="submit"
              v-on:click="SIGN_UP()"
              class="w-full text-white bg-black hover:bg-indigo-950 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <router-link to="/signin"
                ><a class="font-medium text-indigo-800 hover:underline"
                  >Sing in here</a
                ></router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "SingupView",
  data() {
    return {
      formData: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      passwordsMatch: true,
    };
  },

  methods: {
    SIGN_UP() {
      // ตรวจสอบว่ารหัสผ่านตรงกันหรือไม่
      if (this.formData.password !== this.formData.confirmPassword) {
        this.passwordsMatch = false; // ถ้าไม่ตรงกัน กำหนดให้ passwordsMatch เป็น false
        return; // ไม่ทำการส่งข้อมูล
      }
      axios({
        method: "post",
        url: "http://localhost:3000/api/v1/users/register",
        data: {
          email: this.formData.email,
          password: this.formData.password,
        },
      })
        .then((res) => {
          this.$router.push("/signin");
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";
</style>
