<template>
  <div>
    <div v-for="invite in invites" :key="invite.id">
      <div>
        {{ invite.full_name }} - {{ invite.email_address }}
        <button @click.prevent="approveInvite(invite)">Approve</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Invite } from '../types';

@Component({
  beforeRouteEnter(to: Route, from: Route, next: any) {
    next((context: AdminIndex) => {
      if (!context.$store.getters.isAuthenticated) {
        next(false);
        return context.$router.push({ name: 'admin-login' });
      }
      return next();
    });
  }
})

export default class AdminIndex extends Vue {
  public mounted() {
    this.$store.dispatch('inviteList');
  }

  public approveInvite(invite: Invite) {
    this.$store.dispatch('approveInvite', invite);
  }

  get invites() {
    return this.$store.getters.sortedInvites;
  }
}
</script>
