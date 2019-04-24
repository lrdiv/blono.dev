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
  public beforeRouteEnter(to: Route, from: Route, next: any) {
    next((context: any) => {
      if (context.$store.getters.isAuthenticated) {
        next(false);
        context.$router.push({ name: 'admin-index' });
      } else {
        next();
      }
    });
  }
}
</script>
