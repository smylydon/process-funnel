'use strict';

angular.module('processFunnelApp')
  .controller('CheckOutCtrl', checkOutCtrl);

/*@ngIject*/
function checkOutCtrl ($scope, ShoppingCart) {
	var vm = this;
  	vm.tabItems = ShoppingCart.tabItems;
  	vm.total = ShoppingCart.total;
}
