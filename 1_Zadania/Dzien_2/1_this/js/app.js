//Zad 1 // Zadanie rozwiązywane z wykładowcą //

var car = {
    brand: "Mercedes",
    color: "black",
    numberOfKilometers: 0,
    printCarinfo: function() {

        var carInfo = "Color = " + this.color + ", Brand = " + this.brand + ", Kilometers = " + this.numberOfKilometers;
        console.log(carInfo);

        return carInfo;
    },

    drive: function (distance) {
        console.log(this.numberOfKilometers += distance);
    }

}

car.printCarinfo();
car.drive(10);
car.printCarinfo();
car.drive(20);


car.checkes = ["12.2015", "17.2016", "22.2017"];

car.adds = function (date) {
    this.checkes.push(date);
}

car.list = function () {

    return this.checkes;
}

car.adds("31.2018");
car.list();


// Zad 3

var stairs = {
    step: 0,
    up:function () {
        console.log(this.step+=1);
    },
    down: function () {
        console.log(this.step-=1);
    },
    printStep: function () {
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep()