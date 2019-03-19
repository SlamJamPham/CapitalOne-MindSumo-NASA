import Vue from 'vue';
import App from './App.vue';
import modal from './components/modal.vue';
import VueParticles from 'vue-particles'


Vue.component('modal', modal);
Vue.use(VueParticles)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
