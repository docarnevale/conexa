import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import Vuelidate from "vuelidate";


Vue.use(Vuelidate);
Vue.component('v-select', vSelect)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
