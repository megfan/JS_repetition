/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");



    var buttons = document.querySelectorAll('button');
    console.log(buttons);
    var spanCounter = document.querySelector('.counter');
    var counter = 0;

    buttons.forEach(addEventListener('click', function(){
        counter++;
        spanCounter.innerText = counter;
    
    }));

    // var btn1 = document.querySelector('#button1');
    // var btn2 = document.querySelector('#button2');
    // var btn3 = document.querySelector('#button3');
    // var spanCounter = document.querySelector('.counter');
    // var counter = 0;

    // btn1.addEventListener('click', function () {
    //     counter++;
    //     spanCounter.innerText = counter;
    // });

    // btn2.addEventListener('click', function () {
    //     counter++;
    //     spanCounter.innerText = counter;
    // });

    // btn3.addEventListener('click', function () {
    //     counter++;
    //     spanCounter.innerText = counter;
    // });

});