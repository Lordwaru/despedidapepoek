import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#9c27b0',
    secondary: '#2196f3',
    accent: '#4caf50',
    error: '#f44336',
    warning: '#e91e63',
    info: '#607d8b',
    success: '#8bc34a'
    }
})
