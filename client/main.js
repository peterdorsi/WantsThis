import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router'
import router from './router'
import './lib/resources';
import './lib/filters';

Vue.use(VueRouter)

// Settings
Vue.config.debug = process.env.NODE_ENV !== 'production'

/* eslint-disable no-new */
new Vue(Vue.util.extend({ router }, App)).$mount('app')
