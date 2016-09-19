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
                state: 'artists',
                config: {
                    url: '/artists',
                    views: {
                        '': {
                            templateUrl: 'app/artists/artists.html',
                            controller: 'ArtistsController as vm'
                        }
                    }
                }
            },
            {
                state: 'artist',
                config: {
                    url: '/artists/:id',
                    views: {
                        '': {
                            templateUrl: 'app/artists/artist/artist.html',
                            controller: 'ArtistController as vm'
                        }
                    }
                }
            }
        ];
    }
})();
