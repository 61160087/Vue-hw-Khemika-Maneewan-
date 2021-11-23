<template>
  <h1>{{ msg }}</h1>
  <img
    alt="Vue logo"
    src="https://reg.buu.ac.th/registrar/getstudentimage.asp?id=61160087"
  />
  <div class="hello">
    <p>MS.Khemika Maneewan<br /></p>

    <h2>CONTACT INFORMATION</h2>
    123/49 M.6 Jumpa , Tharua Ayutthaya 13130
    <br />
    <br />
    Tel : 0957948749
    <br />
    <br />
    Line : @andnykmz
    <br />
    <br />
    Facebook : Khemika Maneewan
    <br />
    <br />
    Email : 61160087@go.buu.ac.th , andnyjellyfish2543@hotmail.com

    <!-- Add "scoped" attribute to limit CSS to this component only -->
  </div>
</template>

<script>
import Contact from './components/Contact.vue';
export default {
  name: 'Contact',
  props: {
    msg: String,
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 30px;
}
a {
  color: #cc00ff;
}
</style>
