
(function (app) {
  'use strict';

  app.module('processFunnelApp')
    .controller('FooterCtrl', footerCtrl);

  /*@ngInject*/
  function footerCtrl ($scope, $location, $state, $stateParams) {
    var vm = this;
    console.log('Footer');
  };

})(angular);