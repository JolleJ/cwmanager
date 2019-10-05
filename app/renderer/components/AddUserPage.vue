<template>
	<div class="hello">
		<form novalidate class="md-layout">
		<md-card class="md-layout-item md-size-200 md-small-size-100">
			<md-card-header>
          		<div class="md-title">Users</div>
        	</md-card-header>
			<md-card-content>
				    <md-field md-clearable>
      					<label>First name</label>
      					<md-input v-model="firstname"></md-input>
    				</md-field>
					<md-field md-clearable>
      					<label>last name</label>
      					<md-input v-model="lastname"></md-input>
    				</md-field>
					<md-field md-clearable>
      					<label>NFC ID</label>
      					<md-input value="" v-model="nfcId" type="password"></md-input>
    				</md-field>
					<md-button class="md-raised">Add</md-button>
				    <md-button class="md-raised" name="userNfcId" v-on:click="scanCard">Scan</md-button>
			</md-card-content>		
		</md-card>	
		</form>
	</div>

</template>

<script>

	import { NFC } from 'nfc-pcsc';

	export default {

		data() {
			return {
				nfc: null,
				readers: null,
				lastname: "",
				firstname: "",
				nfcId: "",
				form: {
					firstname: null,
					lastname: null,
					nfcId: null

				},
			};
		},

		methods: {
			scanCard: function(event) {
				
			this.nfc = new NFC();
			this.readers = new Set();	
		
			console.log("Trying to turn on reader");

			this.nfc.on('reader', reader => {
				console.log("Reader on");
				console.log(`${reader.name} reader attached, waiting for cards ...`);
				this.readers.add(reader);

				reader.on('card', card => {
					console.log(`card test ${card.uid}`);
						this.nfcId = card.uid;
						this.nfc.close();

						this.readers.forEach(reader => {
							// stops listening for reader status changes, reader emits 'end' event
							reader.close();
						});
						return card.uid;
				});

				reader.on('error', err => {
					console.error(`reader error`, err);
				});

				reader.on('end', () => {
					console.log(`${reader.name} reader disconnected.`);
				});

			});

			this.nfc.on('error', err => {
				console.error(err);
			});
			}
		},

		created() {
			console.log('created', this);
		},

		mounted() {
			console.log('mounted', this);
			
			this.nfc = new NFC();
			this.readers = new Set();

		},

		updated() {
			console.log('updated', this);
		},

		destroyed() {

			// stops listening for new readers
			this.nfc.close();

			this.readers.forEach(reader => {
				// stops listening for reader status changes, reader emits 'end' event
				reader.close();
			});

		},

	};

</script>

<style scoped>



</style>
