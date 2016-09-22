/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('googleAnalyticsId', 'UA-60793478-1')
    .constant('toastr', toastr)
    .constant('moment', moment);
})();
