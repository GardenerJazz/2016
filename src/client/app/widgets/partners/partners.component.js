(function() {
    'use strict';

    angular
        .module('app.widgets')
        .component('partners', partners());

    function partners() {
        /* @ngInject */
        function PartnersController() {
            var vm = this;

            vm.sponsors = [
                {
                    name: 'Thinslices',
                    url: 'http://www.thinslices.com/',
                    image: 'http://iasi-mit.org/wp-content/uploads/2015/04/Logo_4.png'
                },
                {
                    name: 'Antibiotice',
                    url: 'http://www.antibiotice.ro/',
                    image: 'http://www.antibiotice.ro/wp-content/themes/antibiotice/images/antibiotice-logo.png'
                },
                {
                    name: 'Xivic',
                    url: 'http://www.xivic.com/',
                    image: 'https://pbs.twimg.com/profile_images/1125643544/xivicinc_400x400.jpg'
                },
                {
                    name: 'Wedalert',
                    url: 'https://www.facebook.com/wedalert.ro',
                    image: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-1/10945720_1549941321950356_6088432585448441425_n.png?oh=32727bd63991be781958311f59ccec9e&oe=587A7846'
                },
                {
                    name: 'Conest',
                    url: 'http://www.conestiasi.ro',
                    image: 'http://www.conestiasi.ro/app/img/logo_top.png'
                }
            ];

            vm.partners = [
                {
                    name: 'TVR Iasi',
                    url: 'http://iasi.tvr.ro/',
                    image: 'http://gardenerjazz.ro/2015/images/logos/Logo_TVRIasi.png'
                },
                {
                    name: 'Studioul de Baza',
                    url: 'https://www.facebook.com/StudioulDeBaza',
                    image: 'http://gardenerjazz.ro/2015/images/logos/Logo_StudiouldeBaza.png'
                }
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
