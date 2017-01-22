namespace cardeals.Controllers {

    let cars = [];
    let makes = [];

    export class CarListCtrl {
        public cars;

        constructor(CarService: cardeals.Services.CarService) {
            this.cars = CarService.listCars();
          }
      }

    export class CarDetailCtrl {
        public car;

        constructor(private CarService: cardeals.Services.CarService,
                    private $state: ng.ui.IStateService,
                    $stateParams: ng.ui.IStateParamsService){
           this.car = CarService.listCar($stateParams['id'])
        }
    }

    export class MakeCtrl {
        public makes;

        constructor(private MakeService: cardeals.Services.MakeService, $scope){
        $scope.makes = MakeService.listMakes();
      }
    }

    angular.module('cardeals')
           .controller('CarListCtrl',CarListCtrl)
           .controller('CarDetailCtrl',CarDetailCtrl)
           .controller('MakeCtrl',MakeCtrl)
 }
