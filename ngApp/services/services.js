var cardeals;
(function (cardeals) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
                this.CarResource = $resource('/api/cars/:id');
            }
            CarService.prototype.listCars = function () {
                return this.CarResource.query();
            };
            CarService.prototype.listCar = function (id) {
                return this.CarResource.get({ id: id });
            };
            return CarService;
        }());
        Services.CarService = CarService;
        var MakeService = (function () {
            function MakeService($resource) {
                this.MakeResource = $resource('/api/makes/:id');
            }
            MakeService.prototype.listMakes = function () {
                return this.MakeResource.query();
            };
            return MakeService;
        }());
        Services.MakeService = MakeService;
        angular.module('cardeals')
            .service('CarService', CarService)
            .service('MakeService', MakeService);
    })(Services = cardeals.Services || (cardeals.Services = {}));
})(cardeals || (cardeals = {}));
