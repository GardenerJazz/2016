(function() {
    'use strict';

    angular
        .module('app.layout')
        .component('footer', footer());

    function footer() {
        /* @ngInject */
        function FooterController($timeout) {
            var vm = this;

            vm.onInputKeypress = onInputKeypress;

            function onInputKeypress($event) {
                if ($event.which !== 13) {
                    console.log('bummer');
                    return;
                }

                triggerNewsletterClick();
            }

            function triggerNewsletterClick() {
                $timeout(function() {
                    angular.element('#newsletter-email')[0].click();
                });
            }
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
