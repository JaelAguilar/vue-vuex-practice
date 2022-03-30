<template>
  <img src="../assets/logo.png" alt="Vue Logo" />
  <div class="counter">
    {{ $store.state.counter }}
  </div>

  <div class="squared">
    {{ $store.state.counter }} <sup>2</sup> ={{ $store.getters.cuadrado }}
  </div>

  <div class="buttons">
    <button @click="$store.dispatch('bajarContador')">-</button>
    <button @click="$store.dispatch('subirContador')">+</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "HomeView",
}
</script>
<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
.squared {
  font-size: 30px;
}
</style>
