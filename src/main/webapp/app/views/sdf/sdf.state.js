(function (angular) {
    'use strict';
    
    angular
        .module('agentportal')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('sdf', {
            parent: 'views',
            url: '/sdf',
            views: {
                'content@': {
                    templateUrl: 'app/views/sdf/sdf.html',
                    controller: 'sdfController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
