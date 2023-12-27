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
            profileAddress: {},
        };
    },
    methods: {
        check() {
            fetchData("http://localhost:3000/api/v1/users/update")
                .then((res) => {
                    this.profileAddress = res.data.user.address;
                    console.log(this.profileAddress);

                    if (this.profileAddress === null) {
                        this.showDiv = true;
                    } else {
                        this.showDiv = false;
                    }
                })
                .catch((error) => {
                    console.error("staus", error);
                });
        },

        goToAccount() {
            this.$router.push("/account-info");
        },
    },
    mounted() {
        this.check();
    },
};

// Function to simulate asynchronous data fetching
function fetchData() {
    return new Promise((resolve) => {
        // Simulating an API call
        setTimeout(() => {
            resolve({ data: { user: { address: { houseNo: null } } } });
        }, 1000); // Simulating a delay of 1 second
    });
}
</script>
  