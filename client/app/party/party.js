'use strict';

angular.module('processFunnelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('party', {
        url: '/party',
        views: {
          'menuView':{
            templateUrl: 'components/navbar/navbar.tpl.html',
            controller: 'NavbarCtrl',
            controllerAs: 'navbarCtrl'
          },
          'mainView': {
            templateUrl: 'app/party/party.tpl.html',
            controller: 'PartyCtrl',
            controllerAs: 'partyCtrl'
          },
          'footerView':{
            templateUrl: 'components/footer/footer.tpl.html',
            controller: 'FooterCtrl',
            controllerAs: 'footerCtrl'
          },
       }
      });
  });