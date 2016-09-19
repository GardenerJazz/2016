(function() {
    'use strict';

    angular
        .module('app.artists')
        .run(appRun);

    /*@ngInject*/
    function appRun(routerHelper, $state, $stateParams) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'fest',
                config: {
                    url: '/fest',
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
