<template>
  <div class="squared">
    {{ $store.state.counter }} <sup>2</sup> ={{ $store.getters.cuadrado }}
  </div>
</template>
<script>
export default {
  name: "squared",
}
</script>
