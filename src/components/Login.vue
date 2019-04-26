<template>
  <div class="login-component">
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" v-model="username" type="text">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" v-model="password" type="password">
        </div>
      </div>
      <button class="button is-link" type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      username: "" as string,
      password: "" as string
    }
  },

  methods: {
    onSubmit(): Promise<void> {
      const { username, password } = this;
      return this.$store
        .dispatch("login", { username, password })
        .then(token => {
          this.$store.commit("storeToken", token);
          this.$router.push({ name: "admin-index" });
        });
    }
  }
});
</script>
