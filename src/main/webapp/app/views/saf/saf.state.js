(function (angular) {
    'use strict';
    
    angular
        .module('agentportal')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('saf', {
            parent: 'views',
            url: '/saf',
            views: {
                'content@': {
                    templateUrl: 'app/views/saf/saf.html',
                    controller: 'safController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
