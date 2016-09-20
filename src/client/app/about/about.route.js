(function() {
    'use strict';

    angular
        .module('app.about')
        .run(appRun);

    /*@ngInject*/
    function appRun(routerHelper, $state, $stateParams) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'about',
                config: {
                    url: '/about',
                    views: {
                        '': {
                            templateUrl: 'app/about/about.html'
                        }
                    }
                }
            }
        ];
    }
})();
