<template>
  <h1></h1>
   <img alt="Vue logo" src="https://reg.buu.ac.th/registrar/getstudentimage.asp?id=61160087">
  <div class="hello">
    <p>MS.KHEMIKA MANEEWAN<br>
   
    <h2> ABOUT ME </h2>
    Hello , My name is Khemika Maneewan
    <br> 
    My Nickname is Anne 
    <br>
    My birthday is 28th July 2000, 
    <br>now I am 21 years old. 
  
   <h2> CONTACT INFORMATION </h2> 
    123/49 M.6 Jumpa , Tharua Ayutthaya 13130 
    <br>
    Tel : 0957948749 
    <br>
    Line : @andnykmz 
    <br>
    Facebook : Khemika Maneewan
    <br> 
    Email : 
    61160087@go.buu.ac.th ,
    andnyjellyfish2543@hotmail.com 
     </a>
    </p>
    <h2>CAREER OVERVIEW</h2>
    <ul>
      <li>Known for effective planning and management , <br>Implementation of quality work procedures As a result,<br> the work is systematic and successful</li>
    </ul>
    <h2>EDUCATION</h2>
    <br>
    2018-present 
    Burapha University
    B.Sc. (Information 
    Technology) <br> – in progess
    Faculty of Informatics
    <br>
    <br>
    2015-2018  
    Pibulwitthayalai
    Science and Mathematics 
    <br>
    <br>
    2012-2015 
    Winitsuksa
    Science and Mathematics

    <ul>
    
    </ul>
    <h2>SKILL</h2>
    <span>COMPUTER SKILLS : <span>
      <br>
      <br>Programming Lang<br>
        TML  , JAVA  , LINUX ,
        PYTHON , PHP
      <br>
      <br>Software :
      <br>
      Microsoft Word, Microsoft Windows ,Microsoft Excel, 
     <br> Microsoft Power Point, Adobe Photoshop ,Docker  Huawei web service

   </div>
   <br/>
 <router-link
 :to="{
   name: 'Contact'
 }"
 >
 <button class=" border-4 border-indigo-300 hover:border-gray-500 rounded-full py-3 px-6"
 >Other Contact</button>
</div>
</router-link>
</template>

<script>
import Portfolio from './components/Portfolio.vue';
export default {
  name: 'Portfolio',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  color: #CC00FF;
}
</style>

