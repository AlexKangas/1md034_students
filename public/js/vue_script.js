
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
	nextOrder: 0,
	localOrder: {
	    details: {x: 0, y: 0},
	},
	orders: {},
	burgerbox: [],
	name: '',
	email: '',
	payment: 'Credit card',
	gender: 'Do not provide',
	selected: [],
	burgers: food,
    },
    methods: {
	getInput: function() {
	    this.selected = [this.name, this.email, this.payment, this.gender, this.burgerbox]
	    console.log(this.selected)
	},
	getNext: function () {
	    /* This function returns the next available key (order number) in the orders object,
	     * it works under the assumptions that all keys are integers. */
	    /*let lastOrder = Object.keys(this.orders).reduce(function (last, next) {
		return Math.max(last, next);
		}, 0);*/
	    this.nextOrder += 1;
	    return this.nextOrder;
	},
	addOrder: function (event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different coordinates 
	     * that we need when calculating where in the map the click actually happened. */
	    let offset = {
		x: this.localOrder.details.x,
		y: this.localOrder.details.y
	    };

	  
	    
	    socket.emit("addOrder", { 
		orderId: this.getNext(),
		details: { 
		    x: this.localOrder.details.x,
		    y: this.localOrder.details.y,
		},
		personalInfo: [this.name, this.email, this.payment, this.gender],
		orderItems: this.burgerbox
	    });
	    
	},
	displayOrder: function (event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different coordinates 
	     * that we need when calculating where in the map the click actually happened. */
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top
	    };

	    this.localOrder.details.x = event.clientX - 10 - offset.x;
	    this.localOrder.details.y = event.clientY - 10 - offset.y;
	    
	},
    }
});
