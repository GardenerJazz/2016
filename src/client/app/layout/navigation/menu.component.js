(function() {
    'use strict';

    angular
        .module('app.layout')
        .component('menu', menu());

    function menu() {
        /* @ngInject */
        function MenuController($state) {
            var vm = this;

            vm.isActive = isActive;
            vm.goTo = goTo;

            vm.menuItems = [
                {
                    name: 'Acasa',
                    path: 'default'
                },
                {
                    name: 'Despre Festival',
                    path: 'fest'
                },
                {
                    name: 'Artisti',
                    path: 'artists'
                },
                {
                    name: 'Program',
                    path: 'schedule'
                },
                {
                    name: 'Parteneri',
                    path: 'partners'
                },
                {
                    name: 'Contact',
                    path: 'contact'
                }
            ];

            function goTo(path) {
                $state.go(path);
            }

            function isActive(item) {
                if ($state.current.name === 'artist' && item.path === 'artists') {
                    return true;
                }

                return item.path === $state.current.name;
            }
        }

        var component = {
            templateUrl: 'app/layout/navigation/menu.html',
            bindings: {
                active: '='
            },
            controller: MenuController,
            controllerAs: 'vm'
        };

        return component;
    }
})();
