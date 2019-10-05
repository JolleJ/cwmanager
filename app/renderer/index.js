import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import { ipcRenderer } from 'electron'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/theme/default.css'


import router from "./router/index.js"

Vue.use(VueMaterial)

new Vue({
	el: '#app',
	router,
	render: h => h(App),
	
});

/*ipcRenderer.on('change-view', (event, data) => {
	console.log(data.route)
	if (data.route) {
		router.push(data.route)
	}
  })
*/