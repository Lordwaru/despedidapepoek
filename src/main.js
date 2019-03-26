import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuetify,{
  theme: {
    primary: '#e91e63',
    secondary: '#607d8b',
    accent: '#4caf50',
    error: '#ff9800',
    warning: '#ffc107',
    info: '#00bcd4',
    success: '#3f51b5'
    }
  }
)

new Vue({
  render: h => h(App),
}).$mount('#app')
