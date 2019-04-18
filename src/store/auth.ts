import { AxiosResponse } from 'axios';
import { Action, Module, Mutation, VuexModule  } from 'vuex-module-decorators';
import { Auth } from '../types';

@Module
export default class AuthModule extends VuexModule {
  get authToken(): string | null {
    return localStorage.getItem('blono_dev_auth_token');
  }

  get isAuthenticated(): boolean {
    return !!this.context.getters.authToken && !!this.context.getters.authToken.length;
  }

  @Mutation
  public storeToken(token: string): void {
    localStorage.setItem('blono_dev_auth_token', token);
  }

  @Action({ commit: 'storeToken' })
  public login(payload: Auth): Promise<void> {
    return new Promise((resolve, reject) => {
      const url: string = `${process.env.VUE_APP_API_HOST}/api/admin-auth`;
      this.context.getters.axios.post(url, payload)
        .then((resp: AxiosResponse) => {
          if (!!resp && !!resp.data.token) {
            resolve(resp.data.token);
          }
          reject();
        })
        .catch(reject);
    });
  }
}
