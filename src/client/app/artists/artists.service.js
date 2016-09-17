/**
 * Created by marianilascu on 15/09/16.
 */

(function() {

    angular
        .module('app.artists')
        .factory('artistsService', artistsService);

    function artistsService($http) {

        return {
            getArtists: getArtists,
            getArtistById: getArtistById
        };

        function getArtists(callback) {
            $http
                .get('../../../resources/artists.json')
                .success(callback);
        }

        function getArtistById(artistId, callback) {
            getArtists(function(artistsData) {
                var artist;

                for(var i = 0; i < artistsData.length; i++) {
                    if(artistsData[i].id === artistId) {
                        artist = artistsData[i];
                        break;
                    }
                }

                callback(artist);
            });
        }

    }

}());
