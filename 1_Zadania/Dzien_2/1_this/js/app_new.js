var car = {

    brand: "Fiat",
    color: "red",
    numberOfkilometers: 0 + "km",

    printCarInfo: function () {
        var info = this.brand + this.color + this.numberOfKilometers;
        return info;
    },

    drive: function (distance) {
       console.log(this.numberOfKilometers += distance);
    }
}

car.printCarInfo();
car.drive(10);
car.printCarInfo();
car.drive(20);
