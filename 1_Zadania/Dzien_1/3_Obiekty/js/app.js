//1

var city = {
    capital: "Oslo",
    population: 20050000,
    president: "Ida",
    primeMinister: ["Mati"],

}

//2

var timeMachine = {
    shape: "circle",
    model: "Ronaldo",
    run: function (date, place) {
        console.log("You travel to:" + date + "to place named:" + place);
    }
}




//Zad 1 //

var book = {
    title: "Moon",
    author: "Charles Bradley",
    numberOfPages: 251,

}


//Zad 2 //


var person = {
    name: "John",
    age: 33,
    sayHello: function (){
    console.log("Hello");
}
}


//Zad 3 //

var cake = {
    title: "Chocolate cupcake",
    servings: 6
};

cake.ingredients =  ["flour", "eggs", "milk", "chocolate", "almonds", "cacao"];
console.log(cake.ingredients);


//Zad 6 //
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;
