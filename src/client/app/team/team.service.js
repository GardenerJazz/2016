/**
 * Created by marianilascu on 04/10/2016.
 */

/**
 * Created by marianilascu on 15/09/16.
 */

(function() {

    angular
        .module('app.team')
        .factory('teamService', teamService);

    function teamService($http) {

        return {
            getTeam: getTeam
        };

        function getTeam(callback) {
            $http
                .get('../../../resources/team.json')
                .success(callback);
        }

    }

}());
