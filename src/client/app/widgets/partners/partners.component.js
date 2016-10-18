(function() {
    'use strict';

    angular
        .module('app.widgets')
        .component('partners', partners());

    function partners() {
        /* @ngInject */
        function PartnersController() {
            var vm = this;

            vm.mainPartner = {
                name: 'Primaria Iasi',
                url: 'http://www.primaria-iasi.ro/',
                image: 'images/parteneri/LogoS_MunIasi_c.png'
            };

            vm.sponsors = [
                {
                    name: 'Coseli',
                    url: 'http://www.coseli.ro/',
                    image: 'images/parteneri/LogoS_Coseli_c.png'
                },
                {
                    name: 'Antibiotice',
                    url: 'http://www.antibiotice.ro/',
                    image: 'images/parteneri/Logo_Antibiotice.jpg'
                },
                {
                    name: 'Ford',
                    url: 'http://www.ford-iasi.ro/',
                    image: 'images/parteneri/Logo_Ford2.png'
                },
                {
                    name: 'Pentalog',
                    url: 'http://www.pentalog.ro/',
                    image: 'images/parteneri/LogoS_Pentalog_c.png'
                },
                {
                    name: 'Innovative IT',
                    url: 'http://innovate-medical.ro/',
                    image: 'images/parteneri/Logo_InnovativeIt.jpg'
                },
                {
                    name: 'Kolos Group',
                    url: 'http://www.kolosgroup.ro/',
                    image: 'images/parteneri/Logo_KolosGroup.png'
                },
                {
                    name: 'Conest',
                    url: 'http://www.conestiasi.ro',
                    image: 'images/parteneri/Logo_Conest.png'
                },
                {
                    name: 'Printco',
                    url: 'http://www.printco.ro/',
                    image: 'images/parteneri/Logo_Printco.png'
                },
                {
                    name: 'Felicia',
                    url: 'http://felicia-iasi.ro/',
                    image: 'images/parteneri/LogoS_Felicia_c.png'
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
                    name: 'Wedalert',
                    url: 'https://www.facebook.com/wedalert.ro',
                    image: 'images/parteneri/LogoP_Wedalert_c.png'
                },
                {
                    name: 'Pixel Bonkers',
                    url: '',
                    image: 'images/parteneri/Logo_PixelBonkers.png'
                },
                {
                    name: 'Studioul de Baza',
                    url: 'https://www.facebook.com/StudioulDeBaza',
                    image: 'images/parteneri/Logo_StudiouldeBaza.png'
                },
                {
                    name: 'Code Camp',
                    url: 'http://iasi.codecamp.ro/',
                    image: 'images/parteneri/Logo_Codecamp.png'
                },
                {
                    name: 'Corporate Business Events',
                    url: 'http://corporatebusinessevents.ro/',
                    image: 'images/parteneri/LogoP_CBE_c.jpg'
                },
                {
                    name: 'Vanillya',
                    url: 'https://www.facebook.com/Vanillya-1615946581973211/?pnref=lhc',
                    image: 'images/parteneri/LogoP_Vanillya_c.png'
                },
                {
                    name: 'La Conac',
                    url: 'http://www.laconac-traditie.ro/',
                    image: 'images/parteneri/LogoS_LaConac_c.png'
                }
            ];

            vm.mediaPartners = [
                {
                    name: 'Radio Hit',
                    url: 'http://www.radiohit.ro/',
                    image: 'images/parteneri/LogoPM_RadioHIT_c.jpg'
                },
                {
                    name: 'Alt Iasi',
                    url: 'http://www.altiasi.ro/',
                    image: 'images/parteneri/LogoPM_AltIasi_c.jpg'
                },
                {
                    name: 'Absolut Media',
                    url: 'http://absolutmedia.ro/',
                    image: 'images/parteneri/LogoPM_AbsolutMedia_c.jpg'
                },
                {
                    name: 'In Oras',
                    url: 'http://iasi.inoras.ro/',
                    image: 'images/parteneri/LogoPM_InOras_c.png'
                },
                {
                    name: 'Iasi Live',
                    url: 'http://www.islive.ro/',
                    image: 'images/parteneri/LogoPM_IasiLive_c.jpg'
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
