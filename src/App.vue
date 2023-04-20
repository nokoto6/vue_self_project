<template>
  <router-view></router-view>
</template>

<style lang="scss">
  @import "@/assets/css/globals.scss";

  #app {
    //font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    //color: #2c3e50;
  }

  body {
    //background-image: url('@/assets/images/4003568.webp');
    background-image: url('@/assets/images/bg2.jpg');
    //background-color: rgb(51, 51, 51);
    height: 1100px;
    background-attachment: fixed;
    background-size: cover;
    padding: 0 20px 0 20px;
    border: none;
    margin: 0;
  }

  body::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: rgb(59, 59, 59);
  }

  body::-webkit-scrollbar-thumb {
    //box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: darken($maincolor,5%);
  }


  * {
    font-family: 'Minecraft';
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    color: white;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: white !important;
    -webkit-box-shadow: 0 0 0px 40rem darken($maincolor,30%) inset !important;
  }

</style>
