<template>
  <div class="bg-blue-800 text-center text-5xl flex flex-col items-center justify-center text-white"> Contact <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

    
  </div>
  <div
    class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-blue-800"
  >
    <div class="text-2xl text-center">
      <a href="">
        <div
          class="img-box1 w-1/2 h-4/5 absolute bottom-0 right-[1040px] inline-block"
        >
          <img class="back-img1" src="../assets/bg.png" alt="" />
          <img class="people-img1" src="../assets/man.png" alt="" />
        </div>
      </a>
      <a href="">
        <div
          class="img-box2 w-1/2 h-4/5 absolute bottom-0 left-[200px] inline-block"
        >
          <img class="back-img2" src="../assets/bg.png" alt="" />
          <img class="people-img2" src="../assets/man.png" alt="" />
        </div>
      </a>
      <a href="">
        <div
          class="img-box3 w-1/2 h-4/5 absolute bottom-0 left-[680px] inline-block"
        >
          <img class="back-img3" src="../assets/bg.png" alt="" />
          <img class="people-img3" src="../assets/man.png" alt="" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contain {
  background-color: blue;
}
.img-box1 img {
  height: 70%;
  position: absolute;
  left: 45%;
  bottom: 0;
  transform: translateY(10%);
  transition: bottom 1s, left 1s;
}
.img-box2 img {
  height: 70%;
  position: absolute;
  left: 45%;
  bottom: 0;
  transform: translateY(10%);
  transition: bottom 1s, left 1s;
}
.img-box3 img {
  height: 70%;
  position: absolute;
  left: 45%;
  bottom: 0;
  transform: translateY(10%);
  transition: bottom 1s, left 1s;
}
.img-box1:hover .back-img1 {
  bottom: 40px;
}
.img-box1:hover .people-img1 {
  left: 54%;
}
.img-box2:hover .back-img2 {
  bottom: 40px;
}
.img-box2:hover .people-img2 {
  left: 54%;
}
.img-box3:hover .back-img3 {
  bottom: 40px;
}
.img-box3:hover .people-img3 {
  left: 54%;
}
</style>