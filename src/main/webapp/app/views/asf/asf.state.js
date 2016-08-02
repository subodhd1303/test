(function (angular) {
    'use strict';
    
    angular
        .module('agentportal')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('asf', {
            parent: 'views',
            url: '/asf',
            views: {
                'content@': {
                    templateUrl: 'app/views/asf/asf.html',
                    controller: 'asfController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
