<template>
    <div>
        <div class="container" v-if="showDiv">
            <section class="box special features bg-gray-100 p-8 text-center">
                <div>
                    กรุณากรอกประวัติส่วนตัวให้ครบถ้วน
                    <button type="button" v-on:click="goToAccount()">Click Me!</button>
                </div>
            </section>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            showDiv: false,
            profileData: {},
        };
    },
    mounted() {
        this.check();
    },
    methods: {
        check(){
            axios({
                method:"get",
                url:"http://localhost:3000/api/v1/users/me",
                headers: {
                      Authorization:
                        "Bearer " + localStorage.getItem("accessToken"),
                },
                data: this.formData,
            })
            .then((res) => {
                this.formData = res.data
                console.log(this.formData);
            })
        },
        goToAccount() {
            this.$router.push("/account-info");
        },
    }
};
</script>
  