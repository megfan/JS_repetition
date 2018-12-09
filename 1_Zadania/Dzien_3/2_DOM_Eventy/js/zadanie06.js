/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function () {

    var boxById = document.querySelector('#box');

    var globSpanX = document.querySelector('#globalX');
    var globSpanY = document.querySelector('#globalY');

    var localSpanX = document.querySelector('#localX');
    var localSpanY = document.querySelector('#localY');

    boxById.addEventListener('click', function () {
        globSpanX.innerText = event.screenX;
        globSpanY.innerText = event.screenY;
        localSpanX.innerText = event.clientX;
        localSpanY.innerText = event.clientY;
    });

});



