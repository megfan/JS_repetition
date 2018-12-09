

function checkArray (array){

    var arrToReturn = [];

    for(var i = 0; i <array.length; i++){

        for(var j = 0; j < array[i].length; j++){
            if(array[i][j] % 2 != 0){
                arrToReturn[i] = false;
            }else {
                arrToReturn[i] = true
            }
        }
    }return arrToReturn;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

checkArray(arr);



//Zadanie 1 //
var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];

console.log(task1Array[3][2]);

console.log(task1Array[2].length);

console.log(task1Array[4][2]);

var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

 // for(var i = 0; i < task2Array[0].length; i++){
 //        console.log(task2Array[0][i]);
 //
 // }


// console.log(task2Array[2].length)

for(var i = 0; i < task2Array.length; i++){
    for(var j = 0; j < task2Array[i].length; j++){
        console.log(task2Array[i][j]);
    }
}


//Zadanie 3//

function print2DArray(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}


print2DArray([
    [1,2,3],
    ["ala","rocky","paper"]
]);


// Zadanie 5 //

function create2DArray(rows,columns){

    var newArr = [];
    var start = 1;

    for(var i = 0; i < rows; i++){
        newArr[i]= [];

        for(var j = 0; j < columns; j++) {
            newArr[i][j] = start;
            start++
        }


        }console.log(newArr);
}

create2DArray(4,4);


