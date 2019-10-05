<template>
	<div id='app'>	
		<MainToolbar></MainToolbar>
		<router-view/>
	</div>
</template>

<script>

	import LoginPage from './components/LoginPage.vue';
	import MainToolbar from './components/MainToolbar.vue';
	import Home from "./components/Home.vue";
	import AddUserPage from "./components/AddUserPage.vue";

	

	// With shell.openExternal(url) is how
	// external urls must be handled, not href
	const shell = require('electron').shell;

	export default {
		name: "App",
		components: {
			MainToolbar,
			LoginPage,
			Home
		},
		methods: {
			link: (url) => {
				shell.openExternal(url);
			},
		},
	};

</script>



<style>


</style>
