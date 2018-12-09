/**
 * Created by Jacek on 2016-01-12.
 */
"use strict"
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");

    var allDivs = document.querySelectorAll('.box');

    for(var i=0; i<allDivs.length; i++){
        allDivs[i].addEventListener('click', function () {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        });
    }

});