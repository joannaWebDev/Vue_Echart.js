<template>
  <div id="app">
    <my-logo/>   
    <charts-container/>
  </div>
</template>

<script>
  import Logo from './components/Logo';
  import ChartsContainer from './components/ChartsContainer';

  export default {
    components: {
      'my-logo':Logo,
      "charts-container": ChartsContainer
    },
  }
</script>

<style>
  * {
    box-sizing:border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    margin:0;
    padding:0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    overflow-x: hidden;
    color: #333;
    height: 100vh;
    width:100%;
  }

</style>