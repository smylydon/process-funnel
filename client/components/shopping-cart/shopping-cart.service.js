(function (angular) {
	'use strict';

	angular.module('processFunnelApp')
	  .service('ShoppingCart', shoppingCart);

	function shoppingCart() {
	    var vm = this;
	    vm.tabItems = [];
	    vm.total = 0;
	    vm.totalize = function () {
	    	var total = 0;
	    	angular.forEach(vm.tabItems, function (item) {
	    		item.cost = (item.price * item.quantity);
	    		return total += item.cost;
	    	});
	    	vm.total = total;
	    };

	    vm.pushTabItem = function (tabItem) {
	    	tabItem.id = (new Date()).getTime();
	    	vm.tabItems.push(tabItem);
	    	vm.totalize();
	    };
	    vm.clearTabItems = function () {
	    	vm.total = 0;
	    	vm.tabItems = [];
	    };
	};
})(angular)



