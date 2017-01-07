;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app', ['ui.router', 'app.common'])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app.common', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {}
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('transclusion', transclusion);
    transclusion.$inject = [];

    function transclusion() {
        return {
            restrict: "E",
            transclude: true,
            template: '<div>' +
                '<div ng-transclude></div>' +
                '<span>This text comes from the directive.</span>' +
                '</div>'
        }
    }
}(window, angular, undefined));
