(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  /* @ngInject */
  function ShellController($rootScope, $timeout, config, logger) {
    var vm = this;

    activate();

    function activate() {

    }

  }
})();
