<template>
  <div class='admin-login'>
    <Login />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Route } from 'vue-router';

import Login from '../components/Login.vue';

@Component({
  name: 'AdminLogin',
  components: { Login }
})
export default class AdminLogin extends Vue {
  public mounted(): void {
    this.$store.commit('loadAuthToken');

    if (this.$store.getters.isAuthenticated) {
      this.$router.push({ name: 'admin-index' });
    }
  }
}
</script>
