import { AxiosResponse } from 'axios';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { Invite, InviteRequest } from '../types';

@Module
export default class InvitesModule extends VuexModule {
  public invites: Invite[] = [];
  public requestedInvite: Invite | null = null;

  get sortedInvites(): Invite[] {
    return this.invites.sort((a: Invite, b: Invite) => a.requested_at < b.requested_at ? 1 : -1);
  }

  @Action({ commit: 'setInvites' })
  public inviteList(approved: boolean = false): Promise<void> {
    return new Promise((resolve, reject) => {
      let url: string = `${process.env.VUE_APP_API_HOST}/api/admin-invites`;

      if (approved) {
        url += '?approved=true';
      }

      this.context.getters.axios.get(url)
        .then((resp: AxiosResponse) => resolve(resp.data))
        .catch(reject);
    });
  }

  @Action({ commit: 'updateInvite' })
  public approveInvite(invite: Invite): Promise<void> {
    return new Promise((resolve, reject) => {
      const url: string = `${process.env.VUE_APP_API_HOST}/api/admin-invites/${invite.id}`;
      this.context.getters.axios.put(url, { ...invite, approved: true })
        .then((resp: AxiosResponse) => resolve(resp.data))
        .catch(reject);
    });
  }

  @Action({ commit: 'inviteRequested' })
  public requestInvite(invite: InviteRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      const url: string = `${process.env.VUE_APP_API_HOST}/api/invites`;
      this.context.getters.axios.post(url, invite)
        .then((resp: AxiosResponse) => resolve(resp.data))
        .catch(reject);
    });
  }

  @Mutation
  public setInvites(payload: Invite[]): void {
    this.invites = payload;
  }

  @Mutation
  public updateInvite(payload: Invite): void {
    const invites: Invite[] = [...this.invites];
    const index: number = invites.findIndex((i: Invite) => i.id === payload.id);
    invites[index] = payload;
    this.invites = invites.filter((i: Invite) => !i.approved);
  }

  @Mutation
  public inviteRequested(payload: Invite) {
    this.requestedInvite = payload;
  }
}
