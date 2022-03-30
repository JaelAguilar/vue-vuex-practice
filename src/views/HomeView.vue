<template>
    <img src="../assets/logo.png" alt="Vue Logo">
    <div class="counter">
        {{counter}}
    </div>
    <div class="buttons">
        <button @click="bajarContador()">-</button>
        <button @click="subirContador()">+</button>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data(){
      return {counter:0}
  },
  methods: {
      bajarContador(){
          this.counter--
      },
      subirContador(){
          this.counter++
      }
  }
}
</script>
<style>
    div{
        margin-bottom:10px;
    }
    .counter{
        font-size:80px;
    }
    .buttons button{
        font-size:40px;
        width:100px;
        margin:0 10px;
    }
</style>
