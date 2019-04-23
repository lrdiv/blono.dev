import Vue from 'vue';
import './../node_modules/bulma/css/bulma.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
