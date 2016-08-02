(function (angular) {
    'use strict';
    
    angular
        .module('agentportal')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('sfg', {
            parent: 'views',
            url: '/sfg',
            views: {
                'content@': {
                    templateUrl: 'app/views/sfg/sfg.html',
                    controller: 'sfgController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
