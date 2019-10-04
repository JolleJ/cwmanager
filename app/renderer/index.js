import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import routes from './routes/routes'

Vue.use(VueMaterial)
Vue.use(VueRouter);

const router = new VueRouter({mode: 'history', routes});


new Vue({
	router,
	el: '#app',
	render: h => h(App),
	
});
