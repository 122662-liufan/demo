import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.devtools = true
import axios from 'axios'
//全局注册，使用方法为:this.$axios
Vue.prototype.$axios = axios


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
