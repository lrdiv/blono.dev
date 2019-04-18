<template>
  <Login/>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import Login from '../components/Login.vue';

@Component({
  beforeRouteEnter(to: Route, from: Route, next: any) {
    next((context: AdminLogin) => {
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
})

export default class AdminLogin extends Vue {}
</script>
