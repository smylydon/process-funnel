'use strict';

angular.module('processFunnelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('funnel', {
      	url: '/funnel', 
      	views: {
      		'menuView':{
		        templateUrl: 'components/navbar/navbar.tpl.html',
		        controller: 'NavbarCtrl',
            controllerAs: 'navbarCtrl'
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