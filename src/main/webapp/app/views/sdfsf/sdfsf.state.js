(function (angular) {
    'use strict';
    
    angular
        .module('agentportal')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('sdfsf', {
            parent: 'views',
            url: '/sdfsf',
            views: {
                'content@': {
                    templateUrl: 'app/views/sdfsf/sdfsf.html',
                    controller: 'sdfsfController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
