<template>
  <div class='admin'>
    <div class='container'>
      <h2 class="is-size-2">BloNo Devs Admin</h2>
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

