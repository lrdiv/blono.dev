import axios, { AxiosInstance } from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import AuthModule from './store/auth';
import InvitesModule from './store/invites';

Vue.use(Vuex);

const store = new Vuex.Store({
  getters: {
    axios(state, getters): AxiosInstance {
      const instance = axios.create();
      if (getters.isAuthenticated) {
        // @ts-ignore https://github.com/vuejs/vuex/pull/1121
        instance.defaults.headers.common.Authorization = `Token ${state.auth.authToken}`;
      }
      return instance;
    }
  }
});

store.registerModule('auth', AuthModule);
store.registerModule('invites', InvitesModule);

export default store;
