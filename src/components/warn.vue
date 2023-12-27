<template>
    <div>
        <div class="container" v-if="showDiv">
            <section class="box special features bg-gray-100 p-8 text-center">
                <div>
                    กรุณากรอกประวัติส่วนตัวให้ครบถ้วน
                    <button type="button" class="text-[#EB1851]" v-on:click="goToAccount()">Click Me!</button>
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
            formData: {
                district: null,
                houseNo: null,
                postalCode: null,
                moo: null,
                province: null,
                road: null,
                soi: null,
                subDistrict: null,
            },
        };
    },
    mounted() {
        this.check();
    },
    methods: {
        check() {
            axios({
                method: "get",
                url: "http://localhost:3000/api/v1/users/me",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("accessToken"),
                },
                data: this.formData,
            })
                .then((res) => {
                    this.formData.district = res.data.user.address.district;
                    this.formData.houseNo = res.data.user.address.houseNo;
                    this.formData.postalCode = res.data.user.address.postalCode;
                    this.formData.moo = res.data.user.address.moo;
                    this.formData.province = res.data.user.address.province;
                    this.formData.road = res.data.user.address.road;
                    this.formData.soi = res.data.user.address.soi;
                    this.formData.subDistrict = res.data.user.address.subDistrict;
                    console.log(this.formData);

                    if (
                        this.formData.district === null ||
                        this.formData.houseNo === null ||
                        this.formData.postalCode === null ||
                        this.formData.moo === null ||
                        this.formData.province === null ||
                        this.formData.road === null ||
                        this.formData.soi === null ||
                        this.formData.subDistrict === null ||
                        this.formData.district === null ||
                        this.formData.houseNo === null ||
                        this.formData.postalCode === null ||
                        this.formData.moo === null ||
                        this.formData.province === null ||
                        this.formData.road === null ||
                        this.formData.soi === null ||
                        this.formData.subDistrict === null ||
                        this.formData.district === "" ||
                        this.formData.houseNo === "" ||
                        this.formData.postalCode === "" ||
                        this.formData.moo === "" ||
                        this.formData.province === "" ||
                        this.formData.road === "" ||
                        this.formData.soi === "" ||
                        this.formData.subDistrict === ""
                    ) {
                        this.showDiv = true;
                    } else {
                        this.showDiv = false;
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        goToAccount() {
            this.$router.push("/account-info");
        },
    }
};
</script>
