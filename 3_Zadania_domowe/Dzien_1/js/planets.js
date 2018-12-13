var planets = [
    {
        name: "Merkury",
        numberOfMoons: 0
    },
    {
        name: "Wenus",
        numberOfMoons: 0
    },
    {
        name: "Ziemia",
        numberOfMoons: 1
    },
    {
        name: "Mars",
        numberOfMoons: 2
    },
    {
        name: "Jowisz",
        numberOfMoons: 63
    },
    {
        name: "Saturn",
        numberOfMoons: 60
    },
    {
        name: "Uran",
        numberOfMoons: 27
    },
    {
        name: "Neptun",
        numberOfMoons: 13
    }
];

function sortPlanets(property){
    var sortOrder = 1;
    if(property[0] === '-'){
        sortOrder = -1;
        property = property.substr(1);
    }
    return function(a,b){
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 
        : 0;
        return result * sortOrder;
    }

    // planets.sort(function(a,b){
    //     return a-b;
    // })
    // var arr = [];
    // for(var i=0; i<planets.length; i++){
    //     var number = planets[i].numberOfMoons;
    //     console.log(number);
    //     for(var j=0; j<arr.length; j++){
    //         if(number > arr[j].numberOfMoons){
    //             arr.push(planets[i]);
    //         }
    //     }
    // }console.log(arr);
    // return arr;
}
console.log(planets.sort(sortPlanets('numberOfMoons')));
planets.reverse(sortPlanets('numberOfMoons'));