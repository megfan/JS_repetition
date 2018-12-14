
// function getNumber(a, arr){
//     var check = arr.indexOf(a);
//     if(check === -1){
//         console.log(false);
//         return false;
//     }else{
//         console.log(true + a);
//         return true;
//     }
// };
// getNumber(5, [33,54,2,5,1,4,100]);

// function getNumber(n,array) {
//     var p = n;
//     for (var i = 0; i < array.length; i++) {
//             var x = array[i];
//             // console.log(x);
//             if(p === x) {
//                 console.log(true);
//             }
//     }
// }
// getNumber(2, [33,54,2,1,4,100]);
// getNumber(5, [33,54,2,1,4,100]);

// //zad 2
// function createMatrix(rows,columns){
//     var arr =[];
//     for(var i =0; i<rows; i++){
//         arr[i]= [];
//         for(var j=0; j<columns; j++){
//             if(i === j){
//             arr[i][j] = 1;
//             }else{
//                 arr[i][j]=0;
//             }
//         }
//     }console.log(arr);
//     return arr;
// }
// createMatrix(4,4);


// zadania dodatkowe
//1
// function addTehSameNUmbers(n, arr){
//     var sum = 0;
//     arr.forEach(element => {
//         if(element != n){
//             return sum = null;
//         }else{
//             sum += element ;
//             console.log(sum);
//         }
//     });return sum;
// }

// console.log(addTehSameNUmbers(7,[4,10]));

//2

// function factors(n){
//     var resultArr =[];
//     for(var i=n; i>=0; i--){
//         if(n%i == 0){
//             console.log(i);
//             resultArr.push(i);
//         }
//     }return resultArr;
// }

// console.log(factors(54));

//3
// function grtMissingElem(arr){
//     var result = null;
//     for(var i=0; i<arr.length; i++){
//         var x = arr[i];
//         if(x-i!=1){
//             result = arr[i]-1;
//         }
//     }return result
// };
// console.log(grtMissingElem([1,2,3,4,5,6,7,8,9]));

//4
function getLastNumber(n, arr){
    var newArr=[];
    console.log(typeof(n));
    if(typeof(n) != 'number'){
        return newArr;
    }else{
        var x = arr.length;
        console.log(x);
        for(var i=x-1; i>=x-n; i--){
            newArr.push(arr[i]);
        }console.log(newArr);
        return newArr;
    }
}
getLastNumber(2,[1,2,3,4,5,6,7,8,9]);