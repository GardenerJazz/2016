(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate', 'ngSanitize', 'ngMap',
      'blocks.exception', 'blocks.logger', 'blocks.router',
      'ui.router', 'ngplus',
      'app.filters'
    ]);
})();
