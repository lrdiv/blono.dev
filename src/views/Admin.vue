<template>
  <div class='admin'>
    <div class='container'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({ name: 'Admin' })
export default class Admin extends Vue {}
</script>

