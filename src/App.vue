<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Poppins');
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({ name: 'App' })
export default class App extends Vue {}
</script>
