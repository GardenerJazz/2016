(function() {
    'use strict';

    angular
        .module('app')
        .config(configRouting);

    /*@ngInject*/
    function configRouting($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('default', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'app/landing-page/landing-page.html',
                        controller: 'LandingPageCtrl as vm'
                    }
                }
            });

        $urlRouterProvider.otherwise('/404');
    }
})();
