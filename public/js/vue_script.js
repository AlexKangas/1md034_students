
/*
const vm = new Vue({
    el: '#selection',
    data: {
	burgers: food
    }

    
})
*/

const button = new Vue({
    el: '#button-clicked',
    data: {
	burgerbox: [],
	name: '',
	email: '',
	street: '',
	house: '',
	payment: 'Credit card',
	gender: 'Do not provide',
	selected: [],
	burgers: food

    },
    methods: {
	getInput: function() {
	    this.selected = [this.name, this.email, this.street, this.house, this.payment, this.gender, this.burgerbox]
	    console.log(this.selected)
	}
    }
    
})
