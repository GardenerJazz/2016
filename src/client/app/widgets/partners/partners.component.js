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
                    image: 'images/parteneri/Logo_TS.png'
                },
                {
                    name: 'Antibiotice',
                    url: 'http://www.antibiotice.ro/',
                    image: 'images/parteneri/Logo_Antibiotice.jpg'
                },
                {
                    name: 'Ford',
                    url: 'http://www.ford-iasi.ro/',
                    image: 'images/parteneri/Logo_Ford.png'
                },
                {
                    name: 'Innovative IT',
                    url: 'http://innovate-medical.ro/',
                    image: 'images/parteneri/Logo_InnovativeIt.jpg'
                },
                {
                    name: 'Conest',
                    url: 'http://www.conestiasi.ro',
                    image: 'images/parteneri/Logo_Conest.png'
                },
                {
                    name: 'Kolos Group',
                    url: 'http://www.kolosgroup.ro/',
                    image: 'images/parteneri/Logo_KolosGroup.png'
                },
                {
                    name: 'Printco',
                    url: 'http://www.printco.ro/',
                    image: 'images/parteneri/Logo_Printco.png'
                }
            ];

            vm.partners = [
                {
                    name: 'Fundatia Comunitara Iasi',
                    url: 'http://www.fundatiacomunitaraiasi.ro/',
                    image: 'images/parteneri/Logo_FundatiaComIasi.png'
                },
                {
                    name: 'Tudor Bolnavu Photography',
                    url: 'http://tudorbolnavu.ro/',
                    image: 'images/parteneri/Logo_TudorBolnavu.jpg'
                },
                {
                    name: 'Studioul de Baza',
                    url: 'https://www.facebook.com/StudioulDeBaza',
                    image: 'images/parteneri/Logo_StudiouldeBaza.png'
                },
                {
                    name: 'Wedalert',
                    url: 'https://www.facebook.com/wedalert.ro',
                    image: 'images/parteneri/Logo_Wedalert.png'
                },
                {
                    name: 'Pixel Bonkers',
                    url: '',
                    image: 'images/parteneri/Logo_PixelBonkers.png'
                },
                {
                    name: 'Code Camp',
                    url: 'http://iasi.codecamp.ro/',
                    image: 'images/parteneri/Logo_Codecamp.png'
                }
            ];

            vm.mediaPartners = [

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
