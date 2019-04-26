<template>
  <div class="slack-request-component">
    <div v-if="alreadyRequested">
      <p>We've received your request and will send you an invite as soon as we can!</p>
    </div>
    <div v-else>
      <div v-if="submissionError">
        <span class="danger">{{ submissionError }}</span>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="field">
          <div class="control">
            <input v-model="fullName" class="input is-rounded" type="text" placeholder="Name">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input v-model="emailAddress" class="input is-rounded" type="email" placeholder="Email">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              v-model="githubUsername"
              class="input is-rounded"
              type="text"
              placeholder="Github Username (Optional)"
            >
          </div>
        </div>
        <button
          class="button is-link is-pulled-right"
          :class="{ 'is-loading': isSubmitting }"
          type="submit"
        >Submit</button>
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
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      emailAddress: "" as string,
      fullName: "" as string,
      githubUsername: "" as string,
      isSubmitting: false as boolean,
      submitted: false as boolean,
      submissionError: null as string | null
    };
  },

  computed: {
    alreadyRequested(): boolean {
      return !!this.$store.state.invites.requestedInvite;
    }
  },

  methods: {
    onSubmit(): void {
      this.isSubmitting = true;
      this.submissionError = null;
      const { fullName, emailAddress, githubUsername } = this;

      if (!fullName.length || !emailAddress.length || !githubUsername.length) {
        this.showError();
        return;
      }

      const data = {
        full_name: fullName,
        email_address: emailAddress,
        github_username: githubUsername
      };

      this.$store
        .dispatch("requestInvite", data)
        .then(() => (this.isSubmitting = false))
        .catch(() => this.showError());
    },

    showError(): void {
      this.isSubmitting = false;
      this.submissionError =
        "There was an error with your submission. Please fill out all required fields are try again.";
    }
  }
});
</script>
