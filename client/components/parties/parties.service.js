(function (app) {
	'use strict'

	app.module('processFunnelApp')
	.service('PartyService', partyService);

	function partyService () {
		var vm = this;

		var parties = [{
			text: 'Little tots',
			description: 'Come celebrate babys 1st birthday with us.',
			partyid: 'party1',
			category: 1,
			min_guest: 8,
			max_guest: 15
		},{
			text: 'Build A Bear',
			description: 'Party 2. real funn',
			partyid: 'party2',
			category: 1,
			min_guest: 8,
			max_guest: 25
		},{
			text: 'Teen Time',
			description: 'Party 4. real funn',
			partyid: 'party3',
			category: 2,
			min_guest: 8,
			max_guest: 35
		},{
			text: 'Club 18-30',
			description: 'Party 5. real funn',
			partyid: 'party4',
			category: 3,
			min_guest: 8,
			max_guest: 50
		},{
			text: 'Adult Fun',
			description: 'Customise our adult fun package to suit every occaission.' +
			'From 40th to 100th birthday party or perhaps a retirement party.',
			partyid: 'party5',
			category: 3,
			min_guest: 8,
			max_guest: 50
		},{
			text: 'Create My Own',
			description: 'Make you own party. Tell us what you want.',
			partyid: 'party6',
			category: 999,
			min_guest: 8,
			max_guest: 50
		}];

		vm.availableTimes = [];

		vm.getPartyById =  function (partyid) {
			var value = null;
			angular.forEach(parties, function (party) {
				if (party.partyid == partyid) {
					value = party;
				}
			});
			return value;
		};

		vm.getAvailableTimes = function (day, partyid) {
			var start = 11;
			var end = 16;
			var slot = 0;
			var party = vm.getPartyById(partyid);
			var category = party ? party.category: null;

			if (day == 0 || day == 6) {
				start = 9;
				switch (category = 3) {
					case 3:
						end = 20
					break;
					case 2:
						end = 20;
					break;
					case 1:
					default:
						end = 18;
					break;
				}
			}		
			var slots = [];

			for(var i = start; i < end; i++) {
				slots.push({
					slot: 0,
					text: i + ":00 start time"
				});
			}

			vm.availableTimes = slots;
		};

		vm.getParties = function () {
			return _.clone(parties);
		};
	};
})(angular);