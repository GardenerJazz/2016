/**
 * Created by marianilascu on 04/10/2016.
 */

(function() {
    'use strict';

    angular
        .module('app.team')
        .run(appRun);

    /*@ngInject*/
    function appRun(routerHelper, $state, $stateParams) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'team',
                config: {
                    url: '/team',
                    views: {
                        '': {
                            templateUrl: 'app/team/team.html',
                            controller: 'TeamController as vm'
                        }
                    }
                }
            }
        ];
    }
})();
