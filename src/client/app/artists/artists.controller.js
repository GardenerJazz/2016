/**
 * Created by marianilascu on 15/09/16.
 */
(function() {

    angular
        .module('app.layout')
        .controller('ArtistsController', ArtistsController);

    function ArtistsController(artistsService) {
        var vm = this;

        artistsService.getArtists(function(artistsData) {
            vm.artists = artistsData;
        });
    }

}());
