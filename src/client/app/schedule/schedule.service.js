(function() {

    angular
        .module('app.schedule')
        .factory('scheduleService', scheduleService);

    function scheduleService($http) {

        return {
            getSchedule: getSchedule
        };

        function getSchedule(callback) {
            $http
                .get('../../../resources/schedule.json')
                .success(callback);
        }

    }

}());
