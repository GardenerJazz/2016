(function() {
    'use strict';

    angular
        .module('app')
        .config(configRouting);

    /*@ngInject*/
    function configRouting($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/404');
    }
})();
