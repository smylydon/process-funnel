'use strict';

angular.module('processFunnelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('funnel', {
      	url: '/funnel',
      	views: {
      		'menuView':{
		        templateUrl: 'components/navbar/navbar.html',
		        controller: 'NavbarCtrl',
            controllerAs: 'navbarCtrl'
      		},
	      	'mainView': {
		        templateUrl: 'app/funnel/funnel.tpl.html',
		        controller: 'FunnelCtrl',
            controllerAs: 'FunnelCtrl'
	    	  },
          'footerView':{
            templateUrl: 'components/footer/footer.tpl.html',
            controller: 'FooterCtrl',
            controllerAs: 'footerCtrl'
          },
    	}
      });
  });