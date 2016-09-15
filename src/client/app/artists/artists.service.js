/**
 * Created by marianilascu on 15/09/16.
 */

(function() {

    angular
        .module('app.artists')
        .factory('artistsService', artistsService);

    function artistsService($http) {

        return {
            getArtists: getArtists
        };

        function getArtists(callback) {
            $http
                .get('../../../resources/artists.json')
                .success(callback);
        }
    }

}());
