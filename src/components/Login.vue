<template>
  <div class='login-component'>
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" v-model="username" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" v-model="password" type="password" />
        </div>
      </div>
      <button class="button is-link" type="submit">Login</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>

</style>

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
