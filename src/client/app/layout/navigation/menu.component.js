(function() {
    'use strict';

    angular
        .module('app.layout')
        .component('menu', menu());

    function menu() {
        /* @ngInject */
        function MenuController() {

        }

        var component = {
            templateUrl: 'app/layout/navigation/menu.html',
            bindings: {},
            controller: MenuController,
            controllerAs: 'vm'
        };

        return component;

    }
})();
