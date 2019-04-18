<template>
  <form @submit.prevent="onSubmit">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Login extends Vue {
  public username: string = '';
  public password: string = '';

  public onSubmit() {
    const { username, password } = this;
    this.$store.dispatch('login', { username, password })
      .then(() => this.$router.push({ name: 'admin-index' }));
  }
}
</script>
