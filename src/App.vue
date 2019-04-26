<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins");

@media screen and (max-width: 1078px) {
  .container {
    margin-left: 20px;
    margin-right: 20px;
  }
}

@media screen and (max-width: 1020px) {
  .home .column.is-one-third {
    width: 50%;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({ name: "App" });
</script>
