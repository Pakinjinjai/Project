<template>
  <div class="flex flex-center">
  <div class="flex flex-center font-sans px-4 py-4">
    <div class="rounded-l-md">
    <article class="card first border border-gray-600 m-16 rounded-r-none ">
      <h2>Service</h2>
      <svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
</svg>
      <var>
        <abbr>Online Care</abbr>
      </var>
      <ul>
        <li>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
      </ul>
      <button>
        choose
      </button>
    </article>
    <article class="card primary border border-gray-600 mb-4">
      <h2>Service</h2>
      <svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>
</svg>
      <var>
        <abbr>free online chat</abbr>
      </var>
      <ul>
        <li>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
      </ul>
      <button>
        choose
      </button>
    </article>
    <article class="card three border border-gray-600 mb-4">
      <h2>Service</h2>
      <svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
</svg>
</svg>
      <var>
        <abbr>Show Queue Card</abbr>
      </var>
      <ul>
        <li>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
      </ul>
      <button>
        choose
      </button>
    </article>
  </div>
    <!-- แสดงบัตรคิว -->
    <div class="cardq flex flex-col  ">
      <img src="@/assets/card.jpg" alt="card.jpg" >
      <div class="flex">
        <div class="flex-center ">
        <h2>บัตรเเสดงคิวของท่าน</h2>
        <h3>นาย สมชาย ใจกล้า</h3>
        <p>
          กรุณามาตามนัดหมาย
        </p>
      </div>
      <div class="pl-64px">
        <button>summit</button>
      </div>
      </div>
      </div>
      <!-- เเสดงหน้าหมอ -->
      <div>
  <body>
    <section>
      <header>
       <b></b>
      </header>
      <div class="carddoc bg-rgb-248-170-75">
        <div id="carousel" class="visual">
          <router-link to="/about">
         <button>
          <img
            id="card1"
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/assets/carousel-img/img-01.webp"
            alt="Cute dogs"
          />
          </button>
        </router-link>
          <img
            id="card2"
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/assets/carousel-img/img-02.webp"
            alt="Cute dogs"
          />
          <img
            id="card3"
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/assets/carousel-img/img-03.webp"
            alt="Cute dogs"
          />  
        </div>
      </div>
    </section>
  </body>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: 'EYE Content', content: 'Lorem ipsum dolor sit amet.' },
        { title: 'BODY Content', content: 'Lorem ipsum dolor sit amet.' },
        { title: 'BONE Content', content: 'Lorem ipsum dolor sit amet.' },
      ],
    };
  },
  methods: {
    toggleTab(tabIndex) {
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === tabIndex;
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 60px 0;
  gap: 16px;
  color: #36393f;
  background: #ffecec;
  font-family: "poppins";
} */

p, h2 { margin:0; }


.card {
  display: grid;
  place-items: center;
  /* gap: 10px; */
  width: 100%;
  margin: 0 auto;
  /* border-radius: 6px; */
  padding: 16px;
  /* border-color: rgb(39, 39, 39); */
  background: #F8BDEB;
}

/* .card {
  display: flex;
  /* gap: 10px; */
  /* width: 75%; */
  /* margin: 0 auto; */
  /* border-radius: 6px; */
  /* padding: 50px; */
  /* background: #ffffff; */
/* }  */

.card.first {
  order: 1;
}

.card.primary {
  order: 2;
}

.card.three {
  order: 3;
}


.card.first.var {
  font-size: 60px;
}

.card.primary.var {
  font-size: 60px;
}

.card.three.var {
  font-size: 60px;
}

.card var {
  color: #000000;
  font-weight: 400;
  font-size: 50px;
  font-style: normal;
  margin-bottom: 10px;
}

.card var small {
  font-size: 16px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
}

ul li {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 6px 0;
}

/* ul li img {
  width: 16px;
} */

.card button {
  display: grid;
  place-items: center;
  min-width: 200px;
  border: 2px solid #072541;
  border-radius: 6px;
  padding: 14px 0;
  background: transparent;
  background-color: #ffffff;
  color: #0f71ff;
  font-size: inherit;
  font-family: inherit;
}

.card.primary button {
  /* background: #0f71ff; */
  color: #0f71ff;
  transition: background 0.3s, color 0.3s; 
}

.card.primary button:hover {
  background: #5272F2; 
  color: #ffffff; 
}

.card.first button {
  /* background: #0f71ff; */
  color: #0f71ff;
  transition: background 0.3s, color 0.3s; 
}

.card.first button:hover {
  background: #5272F2; 
  color: #ffffff; 
}

.card.three button {
  /* background: #0f71ff; */
  color: #5272F2;
  transition: background 0.3s, color 0.3s; 
}

.card.three button:hover {
  background: #F1B4BB; 
  color: #ffffff; 
}


@media (width >= 660px) {
  .card {
    width: 60vw;
  }
}

@media (width >= 960px) {
  /* body {
    padding: 0;
    flex-direction: row;
  }

  body,html {
    height: 100%;
  } */

  .card {
    width: 700px;
    max-width: 700px;
    margin: 0;
  }

  .card.first {
    order: 1;
  }

  .card.primary {
    order: 2;
  }

  .card.three {
    order: 3;
  }
}

.cardq {
  display: flex;
  align-items: center;
  width: 75vw;
  max-width: 700px;
  padding: 50px 30px 50px 20px;
  /* background:#FBECB2; */
  background-color: #FBECB2;
  /* border-radius: 8px; */
}

.cardq img {
  max-width: 280px;
  width: 28vw;
  height: 300px;
  object-fit: cover;
  margin-left: -60px;
  margin-right: 30px;
  border-radius: inherit;
  box-shadow: 0 60px 40px rbg(0 0 0 / 8%);
}



.cardq h3 { color: rgb(0 0 0 / 90%);}

.cardq p { color : rgb(0 0 0 / 70%);}

.cardq button {
  display: grid;
  place-items: center;
  min-width: 200px;
  border: 2px solid #d8021e;
  border-radius: 6px;
  padding: 14px 0;
  background: transparent;
  background-color: #ffffff;
  color: #0f71ff;
  font-size: inherit;
  font-family: inherit;
}

.cardq button:hover {
  background: #5272F2; 
  color: #ffffff; 
}

@media (width <= 740px) {
  .cardq {
    flex-direction: column;
    text-align: center;
    margin: 0 40px;
    padding-left: 50px;
    padding-right: 50px;
    width: 100%
  }

  .cardq img {
    margin: -100px 0 30px 0;
    width: 100%;
    max-width: 1000px;
  }
}
/* css หน้าหมอ */
.tab-buttons {
  display: flex;
}

.tab-button {
  background-color: #ffffff;
  border: none;
  /* padding: 10px 20px; */
  cursor: pointer;
  height: 40px;
}


.tab {
  display: none;
  width: 70%;
  padding: 20px;
  background-color: #ccc;
}

.active-tab-button {
  background-color: #ccc;
  transform: scaleY(1.1);
  transform-origin: bottom;
}


</style>
