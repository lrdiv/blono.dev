import { AxiosResponse } from 'axios';
import { Action, Module, Mutation, VuexModule  } from 'vuex-module-decorators';

import { Auth } from '../types';

@Module
export default class AuthModule extends VuexModule {
  public authToken: string = '';

  get isAuthenticated(): boolean {
    return !!this.authToken && !!this.authToken.length;
  }

  @Mutation
  public storeToken(token: string): void {
    localStorage.setItem('blono_dev_auth_token', token);
    this.authToken = token;
  }

  @Mutation
  public loadAuthToken(): void {
    const token: string|null = localStorage.getItem('blono_dev_auth_token');
    if (!!token && token.length) {
      this.authToken = token;
    }
  }

  @Action
  public login(payload: Auth): Promise<string> {
    return new Promise((resolve, reject) => {
      const url: string = `${process.env.VUE_APP_API_HOST}/api/admin-auth`;
      return this.context.getters.axios.post(url, payload)
        .then((resp: AxiosResponse) => resolve(resp.data.token))
        .catch(reject);
    });
  }
}
