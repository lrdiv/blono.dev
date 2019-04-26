<template>
  <div class="admin-login">
    <h3 class="is-size-3">Login</h3>
    <Login/>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Route } from "vue-router";

import Login from "../components/Login.vue";

export default Vue.extend({
  name: "AdminLogin",
  components: { Login },

  mounted(): void {
    this.$store.commit("loadAuthToken");
    if (this.$store.getters.isAuthenticated) {
      this.$router.push({ name: "admin-index" });
    }
  }
});
</script>
