<template>
  <div class="admin-index">
    <button class="button is-pulled-right" @click.prevent="toggleAllShown">
      <span v-if="allShown">Show Pending</span>
      <span v-else>Show Approved</span>
    </button>
    <h3 class="is-size-3">Requests</h3>
    <table class="table is-fullwidth is-bordered">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email Address</th>
          <th>Github Username</th>
          <th>Requested At</th>
          <th>Approve</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invite in invites" :key="invite.id">
          <td>{{ invite.full_name }}</td>
          <td>{{ invite.email_address }}</td>
          <td>{{ invite.github_username }}</td>
          <td>{{ invite.requested_at | prettyDate }}</td>
          <td>
            <span v-if="invite.approved">Approved</span>
            <span v-else>
              <button @click.prevent="approveInvite(invite)" class="button is-link">Approve</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import moment from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Route } from 'vue-router';
import { Invite } from '../types';

@Component({
  name: 'AdminIndex',
  filters: {
    prettyDate(val: Date): string {
      return moment(val).fromNow();
    }
  }
})
export default class AdminIndex extends Vue {
  public allShown: boolean = false;

  public mounted(): void {
    this.$store.commit('loadAuthToken');

    if (!this.$store.getters.isAuthenticated) {
      return this.$router.push({ name: 'admin-login' });
    }

    this.$store.dispatch('inviteList');
  }

  get invites(): Invite[] {
      return this.$store.getters.sortedInvites;
  }

  public approveInvite(invite: Invite): void {
    this.$store.dispatch('approveInvite', invite);
  }

  public toggleAllShown(): void {
    const notShown: boolean = !this.allShown;
    this.allShown = notShown;
    this.$store.dispatch('inviteList', notShown);
  }
}
</script>
