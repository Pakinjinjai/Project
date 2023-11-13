<template>
  <div class="page-container">
    <div class="mt-16">
      <Queue />
    </div>
    <div class="">
      <h1 class="mt-6">ช่องทางการติดต่อ</h1>
      <a
        href="https://lin.ee/THyM1sN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#00c300"
              d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"
            ></path>
            <path
              fill="#fff"
              d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z"
            ></path>
            <!-- แสดงรหัส SVG ของคุณที่นี่ -->
          </svg>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import Queue from "@/components/Queue.vue";
export default {
  name: "ServicePage",
  components: { Queue },
  data() {
    return {
      profileData: {},
    };
  },
  methods: {},
};
</script>

<style>
.page-container {
  width: 1440px;
  position: relative;
  margin: 0 auto;
  transition: all 0.3s;

  @media screen and (max-width: 1920px) {
    width: 1280px;
  }

  @media screen and (max-width: 1600px) {
    width: 1280px;
  }

  @media screen and (max-width: 1440px) {
    width: 1280px;
  }

  @media screen and (max-width: 1280px) {
    width: 1024px;
  }

  @media screen and (max-width: 1024px) {
    width: 768px;
  }

  @media screen and (max-width: 960px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>
