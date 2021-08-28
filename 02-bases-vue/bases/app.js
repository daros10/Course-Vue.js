const app = Vue.createApp({
	// template: `
	// <h1>Hola Mundo</h1>
	// <p> {{  {a:1, b:2} }} </p>
	// `

	// las propieades que vienene dentro del createApp se llaman optionsAPI
	// methods: {},
	// watch: {},

	// Si se usa el setup se lo conoce como compositionAPI
	// setup() { }

	data() {
		return {
			quote: "I'm Batman",
			author: "Bruce Wayne"
		}
	},
	methods: {
		changeQuote() {
			this.author = "Daro!"
		}
	}
})

app.mount("#myApp")