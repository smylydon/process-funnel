'use strict';

angular.module('processFunnelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('checkout', {
      	url: '/checkout',
      	views: {
          'menuView':{
            templateUrl: 'components/funnelbar/funnelbar.tpl.html',
            controller: 'FunnelBarCtrl',
            controllerAs: 'funnelBarCtrl'
          },
	      	'mainView': {
		        templateUrl: 'app/checkout/checkout.tpl.html',
		        controller: 'CheckOutCtrl',
            controllerAs: 'checkOutCtrl'
	    	  },
          'footerView':{
            templateUrl: 'components/footer/footer.tpl.html',
            controller: 'FooterCtrl',
            controllerAs: 'footerCtrl'
          },
    	 }
      });
  });