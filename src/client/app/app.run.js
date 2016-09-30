(function() {
    'use strict';

    angular.module('app')
        .run(run);

    /*@ngInject*/
    function run(googleAnalyticsId, $rootScope, $location, $window) {
        // initialise google analytics
        $window.ga('create', googleAnalyticsId, 'auto');

        // track pageview on state change
        $rootScope.$on('$stateChangeSuccess', function(event) {
            $window.ga('send', 'pageview', $location.path());
            
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    }
})();
