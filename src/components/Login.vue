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
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({ name: 'Login' })
export default class Login extends Vue {
  public username: string = '';
  public password: string = '';

  public onSubmit(): Promise<void> {
    const { username, password } = this;
    return this.$store.dispatch('login', { username, password })
      .then((token) => {
        this.$store.commit('storeToken', token);
        this.$router.push({ name: 'admin-index' });
      });
  }
}
</script>
