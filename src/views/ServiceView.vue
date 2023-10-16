<template>
  <div class="text-2xl text-center">Service Page</div>
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="background"></div>
    <article class="card first">
      <h2>Service</h2>
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
    <article class="card primary">
      <h2>Service</h2>
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
    <article class="card three">
      <h2>Service</h2>
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
  </body>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
}

/* body {
  display: flex;
  align-items: center;
  justify-content: row;
  flex-direction: column;
  margin: 0px;
  padding: 60px 0;
  gap: 0px;
  color: #36393f;
  background: #ffecec;
  font-family: "poppins";
} */

p, h2 { margin:0; }


.card {
  display: grid;
  place-items: center;
  gap: 10px;
  order:2;
  width: 75%;
  margin: 0 auto;
  border-radius: 6px;
  /* padding: 50px; */
  background: #ffffff;
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
  justify-content: flex-end; /* จัดตำแหน่งด้านขวา */
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
  color: #0f71ff;
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

ul li img {
  width: 16px;
}

.card button {
  display: grid;
  place-items: center;
  min-width: 200px;
  border: 2px solid #0f71ff;
  border-radius: 6px;
  padding: 14px 0;
  background: transparent;
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
  background: #0071e6; 
  color: #ffffff; 
}

.card.first button {
  /* background: #0f71ff; */
  color: #0f71ff;
  transition: background 0.3s, color 0.3s; 
}

.card.first button:hover {
  background: #0071e6; 
  color: #ffffff; 
}

.card.three button {
  /* background: #0f71ff; */
  color: #0f71ff;
  transition: background 0.3s, color 0.3s; 
}

.card.three button:hover {
  background: #0071e6; 
  color: #ffffff; 
}


@media (width >= 660px) {
  .card {
    width: 60vw;
  }
}

@media (width >= 960px) {
  body {
    padding: 0;
    flex-direction: row;
  }

  body,html {
    height: 100%;
  }

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
</style>
