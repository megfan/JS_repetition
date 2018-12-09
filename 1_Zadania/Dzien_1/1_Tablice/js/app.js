// Zadanie 1//
function distFromAverage (arr){
    var avg;
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    avg = sum / arr.length;

    var arrToReturn = [];
    for (var i = 0; i < arr.length; i++) {
        arrToReturn[i] = arr[i] -avg;
    }

    return arrToReturn;
}

distFromAverage([1,2,3,4,5,6,7]);

//Zadanie 1 samodzielne//

var arr = ["banana","ananas","coconut"];

console.log(arr[0]);

var x = arr.length;

console.log(arr.length);

console.log(arr[x-1]);

for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


//Zadanie 3//

function printTable(array) {
    for(var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printTable([1,2,3,4,5,6,7]);


//Zadanie 4 //

function multiply(array){

    multi = array[0];
    for(var i = 0; i < array.length; i++){
        multi *= array[i];

    }return multi;

}multiply([1,2,3,4,5,6,7]);

//Zadanie 5 //

function getEvenAvarage (arr){

    var newArr = [];
    var sum = 0;
    var end;

    for(var i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {
            sum += arr[i];
            newArr.push(arr[i])
        }
    }

        if (sum == 0){
            return null;
        }
        end = sum / newArr.length;
        return end;
}
getEvenAvarage([1,2,3,4,5,6,7]);

//Zadanie 6 //

function sortArray (arr){
    arr.sort(function(a, b){return a-b});
    console.log(arr);

}sortArray([145,11,3,64,4,6,10]);

//Zadanie 7 //

function addArrays(arr1, arr2) {
    var length1 = arr1.length;
    var length2 = arr2.length;

    var arr = [];

    if (length1 > length2) {
        for (var i = 0; i < length2; i++) {
            arr.push( arr1[i] + arr2[i] );
        }

        for (i = length2; i < length1; i++) {
            arr.push( arr1[i] );
        }
    }

    return arr;
}

addArrays( [1,1,1,1,1], [1,1,1] );



//zaddddddd

