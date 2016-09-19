(function() {
  'use strict';

  angular
    .module('app.filters')
    .filter('trustAsResourceUrl', trustAsResourceUrl);

    /*@ngInject*/
    function trustAsResourceUrl($sce) {
        return function(val) {
            return $sce.trustAsResourceUrl(val);
        };
    }
})();
