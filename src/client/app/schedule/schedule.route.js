(function() {
    'use strict';

    angular
        .module('app.schedule')
        .run(appRun);

    /*@ngInject*/
    function appRun(routerHelper, $state, $stateParams) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'schedule',
                config: {
                    url: '/schedule',
                    views: {
                        '': {
                            templateUrl: 'app/schedule/schedule.html'
                        }
                    }
                }
            }
        ];
    }
})();
