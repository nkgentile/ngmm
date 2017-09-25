"use strict";

Vue.component('view-router', {
	data: function(){
		return {
			currentRoute: window.location.hash,
		};
	},

	computed: {
		ViewComponent: function(){
			return this.$root.routes[this.currentRoute].component || NotFound;
		}
	},

	render: function(h){
		return h(this.ViewComponent);
	}
});