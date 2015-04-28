
(function (app) {
	'use strict';

	app.module('processFunnelApp')
	  .controller('PartyCtrl', partyCtrl);
 console.log('askdjfa;ksdkfas')
	 /*@ngInject*/
	function partyCtrl ($scope, PartyService) {
		var vm = this;
		console.log('asdfasdfasd')
		vm.parties = PartyService.getParties();
	};


})(angular);