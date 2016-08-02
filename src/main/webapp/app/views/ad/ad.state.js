(function (angular) {
    'use strict';
    
    angular
        .module('agentportal')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('ad', {
            parent: 'views',
            url: '/ad',
            views: {
                'content@': {
                    templateUrl: 'app/views/ad/ad.html',
                    controller: 'adController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
