import Vue from 'vue';
import App from './App.vue';
import modal from './components/modal.vue';
import VueParticles from 'vue-particles'
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";

Vue.component('modal', modal);
Vue.component('VueGoodshareFacebook', VueGoodshareFacebook );
Vue.use(VueParticles)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
