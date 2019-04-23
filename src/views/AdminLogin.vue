<template>
  <div class='admin-login'>
    <Login />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Route } from 'vue-router';
import Login from '../components/Login.vue';

export default Vue.extend({
  name: 'AdminLogin',

  beforeRouteEnter(to: Route, from: Route, next: any) {
    next((context: any) => {
      if (context.$store.getters.isAuthenticated) {
        next(false);
        context.$router.push({ name: 'admin-index' });
      } else {
        next();
      }
    });
  },

  components: {
    Login
  }
});
</script>
