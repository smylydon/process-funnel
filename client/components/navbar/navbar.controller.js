
(function (app) {
  'use strict';

  app.module('processFunnelApp')
    .controller('NavbarCtrl', navbarCtrl);

  /*@ngInject*/
  function navbarCtrl ($scope, $location, $state, $stateParams) {
    var vm = this;
    console.log('NavbarCtrl 2222');
    vm.menu = [{
      'title': 'Home',
      'state': 'home'
    },{
      'title': 'About Us',
      'state': 'about'
    },{
      'title': 'Parties',
      'state': 'party'
    },
    {
      'title': 'Contact Us',
      'state': 'contact'
    }];

    vm.isCollapsed = true;

    vm.isActive = function (route) {
      return route === $state.current.name;
    };
  };

})(angular);