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
import Component from 'vue-class-component';

@Component({})
export default class Login extends Vue {
  public username: string = '';
  public password: string = '';

  public onSubmit(): void {
    const { username, password } = this;
    this.$store.dispatch('login', { username, password })
      .then(() => this.$nextTick())
      .then(() => this.$router.push({ name: 'admin-index' }));
  }
}
</script>
