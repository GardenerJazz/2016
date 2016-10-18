(function() {

    angular
        .module('app.schedule')
        .controller('ScheduleController', ScheduleController);

    function ScheduleController(scheduleService) {
        var vm = this;

        scheduleService.getSchedule(function(scheduleData) {
            vm.schedule = scheduleData;
        });
    }

}());
