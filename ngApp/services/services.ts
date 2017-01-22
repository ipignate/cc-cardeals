namespace cardeals.Services {

  export class CarService {
    private CarResource;

    public listCars() {
      return this.CarResource.query();
    }

    public listCar(id) {
      return this.CarResource.get({id: id});
    }

    constructor($resource: ng.resource.IResourceService){
      this.CarResource = $resource('/api/cars/:id');
    }
  }

  export class MakeService {
    private MakeResource;

    public listMakes() {
      return this.MakeResource.query();
    }

    constructor($resource: ng.resource.IResourceService){
      this.MakeResource = $resource('/api/makes/:id');
    }
  }

  angular.module('cardeals')
         .service('CarService',CarService)
         .service('MakeService',MakeService)
}
