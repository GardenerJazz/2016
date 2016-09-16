(function() {
    'use strict';

    angular
        .module('app.layout')
        .component('footer', footer());

    function footer() {
        /* @ngInject */
        function FooterController() {

        }

        var component = {
            templateUrl: 'app/layout/footer/footer.html',
            bindings: {},
            controller: FooterController,
            controllerAs: 'vm'
        };

        return component;
    }
})();
