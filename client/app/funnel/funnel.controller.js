
(function (app) {
	'use strict';

	app.module('processFunnelApp')
	  .controller('FunnelCtrl', funnelCtrl);


	 /*@ngInject*/
	function funnelCtrl ($scope,$stateParams,PartyService) {
		var partyid = $stateParams.partyid;
		var party = PartyService.getPartyById(partyid);
		var vm = this;
		var oneDay = 24 * 60 * 60 * 1000;
		var today = new Date();

		vm.maxKids=0;
		vm.minKids=0;
		vm.maxAdults = 0;
		vm.minAdults =0;

		vm.numberOfAdultGuests = 0;
		vm.numberOfChildGuests = 0;
		vm.isOpen = true;
		vm.minDate = new Date(today.getTime() + (7 * oneDay));
		vm.maxDate = new Date(vm.minDate.getTime() +(90 * oneDay));
		vm.startDate = null; 
		vm.format = 'dd-MMMM-yyyy';
		vm.showTimes = false;
		vm.availableTimes = [];
		vm.allKids = false;

		vm.minAdults = party.min_guests;
		vm.maxAdults = party.max_guests;

		if (partyid !== 'party4') {
			vm.allKids = true;
			vm.minKids = party.min_guests;
			vm.maxKids = party.max_guests;
		}

		vm.menuState = function () {
			return vm.isOpen;
		};

		vm.showTimetable = function (day) {
			vm.showTimes = true;
			vm.availableTimes = PartyService.getAvailableTimes(day, partyid);
		};

		vm.hideTimetable = function () {
			vm.showTimes = false;
		};

		vm.selection = {};
/*
		vm.values = [{
			text:'Infants',
			value:1
		},{
			text:'Children',
			value:2
		},{
			text:'Teens',
			value:3
		},{
			text:'Family',
			value:4
		},{
			text:'Adults Only',
			value:5
		}];*/

		vm.openMenu = function () {
			vm.isOpen = true;
		};

		vm.selectOption = function (option) {
			vm.selection = option;
		};

		$scope.$watch(function () {
			return $scope.startDate;
		}, function (newValue, oldValue) {
			vm.startDate = newValue;
			var dayOfTheWeek = new Date(vm.startDate);
			vm.showTimetable(dayOfTheWeek.getUTCDay());
		});

		$scope.$watch(function () {
			return PartyService.availableTimes;
		}, function (newValue, oldValue) {
			vm.availableTimes = newValue;
		});
	};


})(angular);