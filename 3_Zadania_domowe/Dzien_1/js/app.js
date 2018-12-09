
function getNumber(n,array) {

    var p = n;

    for (var i = 0; i < array.length; i++) {
            var x = array[i];
            // console.log(x);

            if(p === x) {
                console.log(true);
            }

    }
}

getNumber(2, [33,54,2,1,4,100]);
getNumber(5, [33,54,2,1,4,100]);


//zad 2

function createIdentityMatrix(rows, columns) {

    var array = [];

    for (var i = 0; i < rows; i++) {
        array[i] = [];
        for (var j = 0; j < columns; j++) {
           if(i === j){
               array[i][j] = 1;
           }else {
               array[i][j] = 0;
           }

        }
    }
    return array;

}

createIdentityMatrix(4,4);