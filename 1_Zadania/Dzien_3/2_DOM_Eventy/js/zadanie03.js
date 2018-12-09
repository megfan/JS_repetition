/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");

    var buttons = document.getElementsByTagName('button');
    console.log(buttons);

    var counter = 1;
    for(var i= 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            console.log(this.nextElementSibling.children[0]);
            this.nextElementSibling.children[0].innerHTML = counter;
            counter++;
        })
    }

            // var btn1 = document.querySelector('#button1');
            // var span1 = document.querySelector('#button1 + p > .counter');
            // var counter =0;

            // btn1.addEventListener('click', function () {
            //     counter++;
            //     span1.innerText = counter;
            // });






});