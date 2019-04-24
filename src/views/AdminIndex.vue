<template>
  <div class='admin-index'>
    <div v-for="invite in invites" :key="invite.id">
      <div>
        {{ invite.full_name }} - {{ invite.email_address }}
        <button @click.prevent="approveInvite(invite)">Approve</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Route } from 'vue-router';
import { Invite } from '../types';

@Component({ name: 'AdminIndex' })
export default class AdminIndex extends Vue {
  public beforeRouteEnter(to: Route, from: Route, next: any) {
    next((context: any) => {
      if (!context.$store.getters.isAuthenticated) {
        next(false);
        return context.$router.push({ name: 'admin-login' });
      }
      return next();
    });
  }

  public mounted(): void {
    this.$store.dispatch('inviteList');
  }

  get invites(): Invite[] {
      return this.$store.getters.sortedInvites;
  }

  public approveInvite(invite: Invite): void {
    this.$store.dispatch('approveInvite', invite);
  }
}
</script>
