<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />

    <div id="wrapper">
      <div id="left">
        <div id="logo">
          <h2>VUE.JS</h2>
        </div>
        <Nav />
        <Form />
        <Footer />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Form from "@/components/Form.vue";

export default {
  components: {
    Nav,
    Footer,
    Form,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

#wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;
  background-color: #fcfafa;
}

#left {
  background-color: #484d9f;
  min-height: 100vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#logo {
  padding: 2rem 2rem;
  color: white;
  text-align: left;
}

#nav-menu {
}

#nav-menu ul {
  list-style-type: none;
  padding: 2rem;
  font-size: 12px;
}

#nav-menu li {
  text-align: left;
  padding: 14px 10px;
  border-bottom: 1px solid #ccc;
  color: white;
}

.awe {
  margin-right: 1.5rem;
}

li:hover {
  border-bottom: 1px solid white;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: #ddd;
}

#news {
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  padding: 2rem;
}

#news form {
  padding: 1rem 0;
}

#copyright {
  color: white;
  font-size: 10px;
  text-align: left;
  padding: 0 1.9rem;
}

#right {
  background-color: #fcfafa;
  padding: 2rem 3rem;
  color: gray;
  font-size: 12px;
  line-height: 1.6rem;
}

#right h3 {
  color: black;
}

.about {
  background-color: #fcfafa;
  padding: 2rem 3rem;
  color: gray;
  font-size: 12px;
  line-height: 1.6rem;
}

.about h3 {
  color: black;
}

#service {
  background-color: #fcfafa;
  padding: 2rem 3rem;
  color: gray;
  font-size: 12px;
  line-height: 1.6rem;
}

#service h3 {
  color: black;
}

#adminone {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 4rem 0;
  background-color: #fcfafa;
}

#proot {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
}

.pcard {
  margin-top: 2rem;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  padding: 14px;
}

.price {
  color: grey;
  font-size: 12px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #484d9f;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 12px;
}

.card button:hover {
  opacity: 0.7;
}
</style>