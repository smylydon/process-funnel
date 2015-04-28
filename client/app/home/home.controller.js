
(function (app) {
	'use strict';

	app.module('processFunnelApp')
	  .controller('HomeCtrl', homeCtrl);

	 /*@ngInject*/
	function homeCtrl ($scope, $http) {
		var vm = this;

	    vm.awesomeThings = [];

	    $http.get('/api/things').success(function (awesomeThings) {
	      vm.awesomeThings = awesomeThings;
	    });
	};

})(angular);