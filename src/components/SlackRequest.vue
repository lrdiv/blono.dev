<template>
  <div class='slack-request-component'>
    <div v-if="alreadyRequested">
      <p>We've received your request and will send you an invite as soon as we can!</p>
    </div>
    <div v-else>
      <form @submit.prevent="onSubmit">
        <div class="field">
          <div class="control">
            <input v-model="fullName" class="input is-rounded" type="text" placeholder="Name" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input v-model="emailAddress" class="input is-rounded" type="email" placeholder="Email" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input v-model="githubUsername" class="input is-rounded" type="text" placeholder="Github Username (Optional)" />
          </div>
        </div>
        <button class="button is-link is-pulled-right" :class="{ 'is-loading': isSubmitting }" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  p {
    margin-bottom: 24px;
  }
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({ name: 'SlackRequest' })
export default class SlackRequest extends Vue {
  public emailAddress: string = '';
  public fullName: string = '';
  public githubUsername: string = '';
  public isSubmitting: boolean = false;
  public submitted: boolean = false;

  get alreadyRequested(): boolean {
    return !!this.$store.state.invites.requestedInvite;
  }

  public onSubmit(): void {
    this.isSubmitting = true;

    const { fullName, emailAddress, githubUsername } = this;
    const data = {
      full_name: fullName,
      email_address: emailAddress,
      github_username: githubUsername
    };

    this.$store.dispatch('requestInvite', data)
      .then(() => this.isSubmitting = false);
  }
}
</script>
