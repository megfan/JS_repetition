
function getNumber(a, arr){
    var check = arr.indexOf(a);
    if(check === -1){
        console.log(false);
        return false;
    }else{
        console.log(true + a);
        return true;
    }
};
getNumber(5, [33,54,2,5,1,4,100]);

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
function createMatrix(rows,columns){
    var arr =[];
    for(var i =0; i<rows; i++){
        arr[i]= [];
        for(var j=0; j<columns; j++){
            if(i === j){
            arr[i][j] = 1;
            }else{
                arr[i][j]=0;
            }
        }
    }console.log(arr);
    return arr;
}
createMatrix(4,4);