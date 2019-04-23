<template>
  <div class='slack-request-component'>
    <div v-if="alreadyRequested">
      <p>We've received your request and will send you an invite as soon as we can!</p>
      <p>In the meantime, check us out on <a href="https://meetup.com/blonodevs" target="_blank">Meetup.com</a></p>
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
        <button class="button is-link is-pulled-right" type="submit">Submit</button>
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

export default Vue.extend({
  name: 'SlackRequest',

  data() {
    return {
      emailAddress: '',
      fullName: '',
      githubUsername: '',
      submitted: false
    };
  },

  computed: {
    alreadyRequested(): boolean {
      return !!this.$store.state.invites.requestedInvite;
    }
  },

  methods: {
    onSubmit() {
      const { fullName, emailAddress, githubUsername } = this;
      this.$store.dispatch('requestInvite', {
        full_name: fullName,
        email_address: emailAddress,
        github_username: githubUsername
      });
    }
  }
});
</script>
