
(function (app) {
	'use strict';

	app.module('processFunnelApp')
	  .controller('FunnelCtrl', funnelCtrl);

	 /*@ngInject*/
	function funnelCtrl ($scope) {
		var vm = this;
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
		}];

	};


})(angular);