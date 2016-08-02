(function (angular) {
    'use strict';
    
    angular
        .module('agentportal')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('io', {
            parent: 'views',
            url: '/io',
            views: {
                'content@': {
                    templateUrl: 'app/views/io/io.html',
                    controller: 'ioController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
