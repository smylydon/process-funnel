
(function (app) {
	'use strict';

	app.module('processFunnelApp')
	  .controller('FunnelCtrl', funnelCtrl);

	 /*@ngInject*/
	function funnelCtrl ($scope,$state, $stateParams, $modal, PartyService, ShoppingCart) {
      	var kidsParties =['party1','party2','party3'];
		var adultParties =['party4','party5','party6'];
		var partyid = $stateParams.partyid;
		var party = PartyService.getPartyById(partyid);
		var vm = this;
		var oneDay = 24 * 60 * 60 * 1000;
		var today = new Date();
		var dummyItem = {
			text: '',
			item: '',
			price: 0,
			quantity: 1
		};
		var adultsAtParty = _.clone(dummyItem);
		var childrenAtParty = _.clone(dummyItem);

      	vm.tabItems = ShoppingCart.tabItems;
      	vm.total = ShoppingCart.total;

		vm.maxKids = 0;
		vm.minKids = 0;
		vm.maxAdults = 0;
		vm.minAdults = 0;

		vm.numberOfAdultGuests = 0;
		vm.numberOfChildGuests = 0;

		vm.minDate = new Date(today.getTime() + (7 * oneDay));
		vm.maxDate = new Date(vm.minDate.getTime() +(90 * oneDay));
		vm.startDate = null; 
		vm.format = 'dd-MMMM-yyyy';
		vm.showTimes = false;
		vm.showGuests = false;
		vm.availableTimes = [];
		vm.allKids = false;

		vm.minAdults = party.min_guests;
		vm.maxAdults = party.max_guests;

		ShoppingCart.clearTabItems();
		ShoppingCart.pushTabItem({
			text: party.text,
			item: party,
			price: party.price,
			quantity: 1
		});

		if (partyid !== 'party4') {
			vm.allKids = true;
			if (kidsParties.indexOf(partyid) > -1) {
				vm.minKids = party.min_guests;
				vm.maxKids = party.max_guests;
				vm.minAdults = 3;
			} else {
				vm.minKids = 0;
				vm.maxKids = party.max_guests;
			}
		}

		vm.selectTime = function () {
			vm.showGuests = true;
		};
		
		vm.showTimetable = function (day) {
			if (vm.startDate) {
				vm.showTimes = true;
				vm.showGuests = false;
				vm.availableTimes = PartyService.getAvailableTimes(day, partyid);
			} else {
				vm.showTimes = false;
				vm.showGuests = false;
			}
		};

		vm.hideTimetable = function () {
			vm.showTimes = false;
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

      	$scope.$watch(function () {
      		return ShoppingCart.tabItems;
      	}, function (newValue,oldValue) {
      		vm.total = ShoppingCart.total;
      		vm.tabItems = ShoppingCart.tabItems;
      	});

		adultsAtParty.price = 10;
		childrenAtParty.price = 5;

		function addGuestToCart(count, guest, label){
			if (_.isNumber(count)) {
	      		guest.text= guest.price + " x " + count + " " + label;
				guest.quantity = count;
				if (!guest.id) {
					ShoppingCart.pushTabItem(guest);
				} else {
					ShoppingCart.totalize();
				}
				vm.total = ShoppingCart.total;
			}
		}

      	vm.numberOfAdultGuestsChanged = function ($event) {
			addGuestToCart(vm.numberOfAdultGuests, adultsAtParty,"Adults");
      	};

      	vm.numberOfChildGuestsChanged = function ($event) {
			addGuestToCart(vm.numberOfChildGuests, childrenAtParty,"Kid(s)");
      	};

      	function checkLogin () {
      		if (ShoppingCart.isLoggedIn()) {
				$state.go('checkout');
      		} else {
			    var modalInstance = $modal.open({
					animation: true,
					templateUrl: 'app/funnel/loginModal.tpl.html',
					size:'sm',
	            	controller: function ($scope) {
	            		$scope.username = '';
	            		$scope.password = '';

	            		$scope.login = function () {
	            			ShoppingCart.login($scope.username, $scope.password);
	            			if (ShoppingCart.isLoggedIn()) {
	            				modalInstance.dismiss('cancel');
	            				$state.go('checkout');
	            			} else {
	            				alert('login failed');
	            			}
	            		}
	            		$scope.cancel = function () {
	            			modalInstance.dismiss('cancel');
	            		}
	            	}
			    });
      		}
      	}

      	vm.goToCheckOut = function () {
      		var adultGuests = vm.numberOfAdultGuests;
      		var childGuests = vm.numberOfChildGuests;

  			if (kidsParties.indexOf(partyid) > -1) {

  				if (_.isNumber(adultGuests) && adultGuests > 2 ) {
  					if (_.isNumber(childGuests) && childGuests >= vm.minKids) {
						checkLogin();
  					} else {
  						alert('There must be at least ' + vm.minKids + ' child guests.');
  					}
  				} else {
  					alert('There must be at least 3 adults guests at childrens parties.');
  				}

  			} else if (adultParties.indexOf(partyid) > -1) {

  				if (_.isNumber(adultGuests) && adultGuests >= vm.minAdults ) {
					checkLogin();
  				} else {
  					alert('There at least ' + vm.minAdults + ' adult guests.');
  				}
  			} else {
  				alert('There was an internal error');
  			}
      	}
	};


})(angular);