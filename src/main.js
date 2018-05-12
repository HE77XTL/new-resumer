// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import '@/assets/reset.scss'

import AV from 'leancloud-storage'
var APP_ID = 'SJXi3wo2nBxftSkxA7MnpmN7-gzGzoHsz';
var APP_KEY = 'YFwSYPN5DFNF39QtTnl9Yer9';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

