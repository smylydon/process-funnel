'use strict';

angular.module('processFunnelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('funnel', {
      	url: '/funnel/:partyid', 
      	views: {
      		'menuView':{
		        templateUrl: 'components/funnelbar/funnelbar.tpl.html',
		        controller: 'FunnelBarCtrl',
            controllerAs: 'funnelBarCtrl'
      		},
	      	'mainView': {
		        templateUrl: 'app/funnel/funnel.tpl.html',
		        controller: 'FunnelCtrl',
            controllerAs: 'funnelCtrl'
	    	  },
          'footerView':{
            templateUrl: 'components/footer/footer.tpl.html',
            controller: 'FooterCtrl',
            controllerAs: 'footerCtrl'
          },
    	}
      });
  });