
(function (app) {
	'use strict';

	app.module('processFunnelApp')
	  .controller('PartyCtrl', partyCtrl);

	 /*@ngInject*/
	function partyCtrl ($scope, PartyService) {
		var vm = this;
		vm.parties = PartyService.getParties();
	};


})(angular);