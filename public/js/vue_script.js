
/*
  const vm = new Vue({
  el: '#selection',
  data: {
  burgers: food
  }

  
  })
*/

'use strict';
const socket = io();
const vm = new Vue({
    el: '#button-clicked',
    data: {
	orders: {},
	burgerbox: [],
	name: '',
	email: '',
	payment: 'Credit card',
	gender: 'Do not provide',
	selected: [],
	burgers: food,
    },
    created: function () {
	/* When the page is loaded, get the current orders stored on the server (in app.js) */
	socket.on('initialize', function (data) {
	    this.orders = data.orders;
	}.bind(this));

	/* Whenever an addOrder is emitted by a client (every open map.html is a client),
	 * the server responds with a currentQueue message (this is defined in app.js).
	 * The message's data payload is the entire updated order object. Here we define what
	 * the client should do with it.
	 * Spoiler: We replace the current local order object with the new one. */
	socket.on('currentQueue', function (data) {
	    this.orders = data.orders;
	}.bind(this));
    },
    methods: {
	getInput: function() {
	    this.selected = [this.name, this.email, this.payment, this.gender, this.burgerbox]
	    console.log(this.selected)
	},
	getNext: function () {
	    /* This function returns the next available key (order number) in the orders object,
	     * it works under the assumptions that all keys are integers. */
	    let lastOrder = Object.keys(this.orders).reduce(function (last, next) {
		return Math.max(last, next);
	    }, 0);
	    return lastOrder + 1;
	},
	addOrder: function (event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different coordinates 
	     * that we need when calculating where in the map the click actually happened. */
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top
	    };
	    
	    socket.emit("addOrder", { 
		orderId: this.getNext(),
		details: { 
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y 
		},
		
		orderItems: ["Beans", "Curry"]
	    });
	    
	}
    }
});
