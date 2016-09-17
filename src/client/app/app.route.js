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
            })
            .state('artists', {
                url: '/artists',
                views: {
                    '': {
                        templateUrl: 'app/artists/artists.html',
                        controller: 'ArtistsController as vm'
                    }
                }
            })
            .state('artist', {
                url: '/artists/:id',
                views: {
                    '': {
                        templateUrl: 'app/artists/artist/artist.html',
                        controller: 'ArtistController as vm'
                    }
                }
            });

        $urlRouterProvider.otherwise('/404');
    }
})();
