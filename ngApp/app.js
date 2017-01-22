var cardeals;
(function (cardeals) {
    angular.module('cardeals', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('carList', {
            url: '/',
            templateUrl: '/ngApp/views/carList.html',
            controller: cardeals.Controllers.CarListCtrl,
            controllerAs: 'controller'
        })
            .state('carDetail', {
            url: '/carDetail/:id',
            templateUrl: '/ngApp/views/carDetail.html',
            controller: cardeals.Controllers.CarDetailCtrl,
            controllerAs: 'controller'
        })
            .state('makeList', {
            url: '/makeList',
            templateUrl: '/ngApp/views/makeList.html',
            controller: cardeals.Controllers.MakeCtrl,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(cardeals || (cardeals = {}));
