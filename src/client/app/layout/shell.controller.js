(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  /* @ngInject */
  function ShellController($rootScope, $timeout, config, logger) {
    var vm = this;

    activate();

    function activate() {
        toggleMenuAppearanceByScroll();
    }

    function toggleMenuAppearanceByScroll() {
        var body = document.body,
            menu = angular.element('menu'),
            menuHeight = 100;

        document.addEventListener('scroll', function() {
            var scrollTop = body.scrollTop,
                isFixed = scrollTop > menuHeight;

            menu.toggleClass('fixed', isFixed);
        }, false);
    }

    $rootScope.$watch(function() {
        return vm.showMenu;
    }, function(n, o) {
        if (n !== 0) {
            console.log('toggle menu!');
        }
    });

  }
})();
