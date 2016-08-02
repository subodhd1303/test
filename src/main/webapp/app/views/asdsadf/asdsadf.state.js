(function (angular) {
    'use strict';
    
    angular
        .module('agentportal')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('asdsadf', {
            parent: 'views',
            url: '/asdsadf',
            views: {
                'content@': {
                    templateUrl: 'app/views/asdsadf/asdsadf.html',
                    controller: 'asdsadfController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
