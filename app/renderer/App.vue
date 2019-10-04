<template>
	<div id='app'>
		<MainToolbar>
		</MainToolbar>
		<LoginPage></LoginPage>
	</div>
</template>

<script>

	import LoginPage from './components/LoginPage.vue';
	import Hello from './components/Hello.vue';
	import MainToolbar from './components/MainToolbar.vue';
	
	

	// With shell.openExternal(url) is how
	// external urls must be handled, not href
	const shell = require('electron').shell;

	export default {
		components: {
			LoginPage,
			Hello,
			MainToolbar,
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
