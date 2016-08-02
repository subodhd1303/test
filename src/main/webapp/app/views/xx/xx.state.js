(function (angular) {
    'use strict';
    
    angular
        .module('agentportal')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('xx', {
            parent: 'views',
            url: '/xx',
            views: {
                'content@': {
                    templateUrl: 'app/views/xx/xx.html',
                    controller: 'xxController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
