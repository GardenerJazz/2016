(function() {
    'use strict';

    angular
        .module('app.landing')
        .config(configRouting);

    /*@ngInject*/
    function configRouting($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'app/landing-page/landing-page.html',
                        controller: 'LandingPageCtrl as vm'
                    }
                }
            });
    }
})();
