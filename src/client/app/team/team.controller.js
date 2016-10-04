
(function() {

    angular
        .module('app.layout')
        .controller('TeamController', TeamController);

    function TeamController(teamService) {
        var vm = this;

        teamService.getTeam(function(teamData) {
            vm.team = teamData;
        });
    }

}());
