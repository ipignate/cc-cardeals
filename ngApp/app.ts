namespace cardeals {

    angular.module('cardeals', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        $urlRouterProvider.otherwise("/"); //if no other state, then default to carlist
        // Define routes
        $stateProvider
            .state('carList', {
                url: '/',
                templateUrl: '/ngApp/views/carList.html',
                controller: cardeals.Controllers.CarListCtrl,
                controllerAs: 'controller'
            })
            .state('carDetail',{
                url: '/carDetail/:id',
                templateUrl: '/ngApp/views/carDetail.html',
                controller: cardeals.Controllers.CarDetailCtrl,
                controllerAs: 'controller'
            })
            .state('makeList',{
                url: '/makeList',
                templateUrl: '/ngApp/views/makeList.html',
                controller: cardeals.Controllers.MakeCtrl,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });
}
