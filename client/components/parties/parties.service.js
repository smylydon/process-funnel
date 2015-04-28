(function (app) {
	'use strict'

	app.module('processFunnelApp')
	.service('PartyService', partyService);

	function partyService () {
		var vm = this;

		var parties = [{
			text: 'Party 1',
			description: 'Party 1. real funn',
			partyid: 'party1',
		},{
			text: 'Party 2',
			description: 'Party 1. real funn',
			partyid: 'party2',
		},{
			text: 'Party 3',
			description: 'Party 1. real funn',
			partyid: 'party3',
		},{
			text: 'Party 4',
			description: 'Party 1. real funn',
			partyid: 'party4',
		}];

		vm.getParties = function () {
			console.log('getting:', parties);
			return _.clone(parties);
		};
	};
})(angular);