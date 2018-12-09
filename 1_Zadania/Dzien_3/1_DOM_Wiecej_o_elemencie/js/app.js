/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zrobic skróty klawiaturowe:

    // var selector = '';
    // var elementsList = document.querySelectorAll(selector);
    //
    // console.log(elementsList);
    //
    // for( var i = 0; i<elementList.length; i++) {
    //     var elements = elementList[i];
    //     var result;
    //     var temp;
    //
    //
    //
    //     result.push(temp);
    // }
    // return result;
    //
    //
    // console.log()


    //dodac do snipetów>

    // var className = "big";
    //element.classList.add(className);

//Zad 1

    var ex5 = document.querySelector('.ex5');
    console.dir(ex5);

//------------------- Czesc 1 --------------------
    
var exElem = ex5.querySelectorAll('li:nth-child(even)');
console.log(exElem);

for(var i = 0 ; i<exElem.length; i++){
    var greenElem = exElem[i];
    greenElem.style.backgroundColor = 'pink';
}

var fifthElem = ex5.querySelector('li:nth-child(5)');
fifthElem.classList.add('big');

var everyThird = ex5.querySelectorAll('li a');
       
        for(var i = 0 ; i<everyThird.length; i++){
            var thirdElem = everyThird[i];

            if(i % 3 !== 0){
                thirdElem.style.textDecoration = 'none';
            }
        }

// var ex5LiEven = ex5.querySelectorAll('li:nth-child(even)');
    // console.dir(ex5LiEven);

    // elementList = ex5LiEven;
    // for (var i =0; i<elementList.length; i++) {
    //     var element = elementList[i];
    //     var result;
    //     var temp;

    //     element.style.backgroundColor = 'green';

    // }

//------------------- Czesc 2 --------------------

    // var ex5Five = ex5.querySelector('li:nth-child(5)');
    // console.dir(ex5Five);

    // var className = 'big';
    // ex5Five.classList.add(className);

//------------------- Czesc 3 --------------------

    // var exLiEveryThird = ex5.querySelectorAll('li a');

    // for (var i=0; i<exLiEveryThird.length; i++){

    //     var element = exLiEveryThird[i];

    //     //------------- Wariant 1 ---------------------
    //     if(!(i%3 === 0)){
    //         element.style.textDecoration = 'none';
    //     }

        //------------- Wariant 2 ---------------------
        /*
        //for every third element in table
        if(i%3 === 0){
            // element.style.textDecoration = 'underline';
        } else {
            element.style.textDecoration = 'none';
        }
        */
    // }

});

//----------------- D2 F5 zad 06 ----------

// document.addEventListener("DOMContentLoaded", function(){
//     var homeElement = document.getElementById("home");
//     var childElements = document.querySelector(".oferts").children;
//     var banner = document.querySelector(".ban");
//     var blocks = document.querySelectorAll(".block");
//     var links = document.querySelector(".links").children;

//     var navLiList = document.querySelectorAll('nav li');

//     function setDataDirection(elements) {
//         for (var i=0; i<elements.length; i++){
//             var element = elements[i];
//             var newValue = 'top';

//             if (!element.hasAttribute('data-direction')) {
//                 element.setAttribute('data-direction', newValue);
//             }

//         }

//     }

//     console.dir(navLiList);

//     setDataDirection(navLiList);

//     var navLiLisMod = document.querySelectorAll('nav li');

//     for (var i=0; i<navLiLisMod.length; i++){
//         var element = navLiLisMod[i];

//         if (!element.hasAttribute('data-direction')) {
//             console.log('Data Direction not set');
//         } else {
//             console.log('Data Direction SET');
//         }

//     }





// });
