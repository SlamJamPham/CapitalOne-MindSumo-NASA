/* eslint-disable linebreak-style */

import Vue from 'vue';
import VueParticles from 'vue-particles';
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue';
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue';
import modal from './components/modal.vue';
import App from './App.vue';

Vue.component('modal', modal);
Vue.component('VueGoodshareFacebook', VueGoodshareFacebook);
Vue.component('VueGoodshareTwitter', VueGoodshareTwitter);
Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
