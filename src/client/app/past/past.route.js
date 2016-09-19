(function() {
    'use strict';

    angular
        .module('app.past')
        .config(configRouting);

    /*@ngInject*/
    function configRouting($stateProvider) {
        $stateProvider
            .state('past', {
                url: '/past',
                views: {
                    '': {
                        templateUrl: 'app/past/past.html',
                        controller: 'PastCtrl as vm'
                    }
                }
            });
    }
})();
