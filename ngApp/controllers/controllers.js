var cardeals;
(function (cardeals) {
    var Controllers;
    (function (Controllers) {
        var cars = [];
        var makes = [];
        var CarListCtrl = (function () {
            function CarListCtrl(CarService) {
                this.cars = CarService.listCars();
            }
            return CarListCtrl;
        }());
        Controllers.CarListCtrl = CarListCtrl;
        var CarDetailCtrl = (function () {
            function CarDetailCtrl(CarService, $state, $stateParams) {
                this.CarService = CarService;
                this.$state = $state;
                this.car = CarService.listCar($stateParams['id']);
            }
            return CarDetailCtrl;
        }());
        Controllers.CarDetailCtrl = CarDetailCtrl;
        var MakeCtrl = (function () {
            function MakeCtrl(MakeService, $scope) {
                this.MakeService = MakeService;
                $scope.makes = MakeService.listMakes();
            }
            return MakeCtrl;
        }());
        Controllers.MakeCtrl = MakeCtrl;
        angular.module('cardeals')
            .controller('CarListCtrl', CarListCtrl)
            .controller('CarDetailCtrl', CarDetailCtrl)
            .controller('MakeCtrl', MakeCtrl);
    })(Controllers = cardeals.Controllers || (cardeals.Controllers = {}));
})(cardeals || (cardeals = {}));
