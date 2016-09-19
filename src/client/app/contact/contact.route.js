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
                state: 'contact',
                config: {
                    url: '/contact',
                    views: {
                        '': {
                            templateUrl: 'app/contact/contact.html'
                        }
                    }
                }
            }
        ];
    }
})();
