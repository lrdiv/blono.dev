<template>
  <div class='login-component'>
    <form @submit.prevent="onSubmit">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      username: '',
      password: ''
    };
  },

  methods: {
    onSubmit() {
      const { username, password } = this;
      this.$store.dispatch('login', { username, password })
        .then(() => this.$nextTick())
        .then(() => this.$router.push({ name: 'admin-index' }));
    }
  }
});
</script>
