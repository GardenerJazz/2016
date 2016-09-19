/**
 * Created by marianilascu on 17/09/16.
 */

(function() {

    angular
        .module('app.layout')
        .controller('ArtistController', ArtistController);

    function ArtistController($stateParams, artistsService) {
        var vm = this;

        var artistId = $stateParams.id;

        artistsService.getArtistById(artistId, function(artistData) {
            vm.artist = artistData;
        });
    }

}());
