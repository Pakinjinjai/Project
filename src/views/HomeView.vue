<template>
  <div id="" class="grid-container">
    <div class="grid-content">
      <div class="bg-white p-7 relative rounded-2xl ml-4">
        <div class="w-96 mx-auto" style="scroll-snap-type: x mandatory">
          <!-- first -->
          <div class="">
            <input
              class="sr-only peer"
              type="radio"
              name="carousel"
              id="carousel-1"
              checked
            />
            <!-- content #1 -->
            <div
              class="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0"
            >
              <img
                class="rounded-xl w-96 max-h-80"
                src="https://images.unsplash.com/photo-1628788835388-415ee2fa9576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80"
                alt=""
              />
              <!-- controls -->
              <div class="absolute top-1/2 w-full flex justify-between z-20">
                <label
                  for="carousel-3"
                  class="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </label>
                <label
                  for="carousel-2"
                  class="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <!-- second -->
          <div class="">
            <input
              class="sr-only peer"
              type="radio"
              name="carousel"
              id="carousel-2"
            />
            <!-- content #2 -->
            <div
              class="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0"
            >
              <img
                class="rounded-xl w-96 h-64"
                src="https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80"
                alt=""
              />
              <!-- controls -->
              <div class="absolute top-1/2 w-full flex justify-between z-20">
                <label
                  for="carousel-1"
                  class="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </label>
                <label
                  for="carousel-3"
                  class="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <!-- three -->
          <div class="">
            <input
              class="sr-only peer"
              type="radio"
              name="carousel"
              id="carousel-3"
            />
            <!-- content #3 -->
            <div
              class="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0"
            >
              <img
                class="rounded-xl w-96 h-64"
                src="https://images.unsplash.com/photo-1628718120482-07e03fe361dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80"
                alt=""
              />
              <!-- controls -->
              <div class="absolute top-1/2 w-full flex justify-between z-20">
                <label
                  for="carousel-2"
                  class="inline-block text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </label>
                <label
                  for="carousel-1"
                  class="inline-block text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-black w-1.5 max-h-max relative rounded-sm mt-4 mb-4 ml-3"
      ></div>
      <div class="card">
        <h1 class="card_title">ปัญหาที่พบบ่อยในผู้สูงอายุ</h1>
        <p class="card_text">
          โรคที่พบบ่อยในผู้สูงอายุ โรคอ้วน โรคเบาหวาน โรคความดันโลหิตสูง
          โรคไขมันในเลือดสูง โรคข้อเสื่อม โรคหัวใจขาดเลือด โรคสมองเสื่อม
          โรคซึมเศร้า อาการวิตกกังวลและนอนไม่หลับ โรคเกี่ยวกับทางเดินอาหาร
          ท้องอืด ท้องผูก
          จะเห็นได้ว่าผู้สูงอายุมีปัญหาด้านสุขภาพที่ต้องได้รับการดูแล
          ดังนั้นผู้สูงอายุควรได้รับการตรวจสมรรถภาพร่างกายผู้สูงอายุ (Geriatric
          Assessment) และการตรวจสุขภาพอย่างสม่ำเสมอ
          และเมื่อพบโรคหรือความผิดปกติต่าง ๆ
          ควรรับการตรวจรักษาและดูแลอย่างต่อเนื่อง
          เพื่อให้มีสุขภาพสมบูรณ์แข็งแรงเหมาะสมกับวัย
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";
.grid-container {
  display: grid;
  background-color: whitesmoke;
  padding: 12px;
  height: 100vh;
  border-radius: 16px;
  .grid-content {
    display: flex;
    background-color: white;
    border-radius: 16px;
    border: 1px solid black;
    height: 45vh;
    margin-top: 30px;
    margin-right: 20%;
    margin-left: 20%;
    font-size: 12px;
    .card {
      justify-content: center;
      width: 655px;
      height: auto;
      padding: 50px;
      .card_title {
        margin-top: 25px;
        font-style: normal;
        font-size: x-large;
      }
      .card_text {
        margin-top: 25px;
      }
    }
  }
}
</style>
