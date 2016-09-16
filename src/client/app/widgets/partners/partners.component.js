(function() {
    'use strict';

    angular
        .module('app.widgets')
        .component('partners', partners());

    function partners() {
        /* @ngInject */
        function PartnersController() {
            var vm = this;

            vm.partners = [
                {name: 'Thinslices'},
                {name: 'Antibiotice'},
                {name: 'Xivic'},
                {name: 'Wedalert'}
            ];
        }

        var component = {
            templateUrl: 'app/widgets/partners/partners.html',
            bindings: {},
            controller: PartnersController,
            controllerAs: 'vm'
        };

        return component;
    }
})();
