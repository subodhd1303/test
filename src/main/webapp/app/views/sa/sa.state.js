(function (angular) {
    'use strict';
    
    angular
        .module('agentportal')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('sa', {
            parent: 'views',
            url: '/sa',
            views: {
                'content@': {
                    templateUrl: 'app/views/sa/sa.html',
                    controller: 'saController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
