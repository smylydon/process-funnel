
(function (app) {
	'use strict';

	app.module('processFunnelApp')
	  .controller('AboutCtrl', aboutCtrl);


	 /*@ngInject*/
	function aboutCtrl ($scope, $http) {
		var vm = this;

	    vm.awesomeThings = [];

	    $http.get('/api/things').success(function (awesomeThings) {
	      vm.awesomeThings = awesomeThings;
	    });
	};


})(angular);