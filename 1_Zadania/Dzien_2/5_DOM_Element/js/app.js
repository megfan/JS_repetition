/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */


    //Zad 1 ------------------------


    // function getDatasInfo(elements) {
    //     console.log(elements);
    //
    //     var colorList = [];
    //
    //     for(var i = 0; i < elements.length; i++){
    //         var color = elements[i].dataset.color;
    //
    //         colorList[colorList.length] = color;
    //
    //     }
    //     return colorList;
    //
    // }
    //
    //     var result = getDatasInfo(links);
    // console.log(result);


    //Zad 1 -------------------samodzielne

    // console.log(homeElement);
    // console.log(childElements);
    // console.log(banner);
    // console.log(blocks);
    // console.log(links);
    //
    // for (var i = 0; i < childElements.length; i++);
    //     var child = childElements[i].dataset.classList;


    //Zad 2-------------------

    // for(var i = 0 ; i < blocks.length; i++){
    //     var block = blocks[i];
    //     console.log(block);
    // }
    //
    //
    // console.log(block.innerHTML);
    // console.log(block.outerHTML);
    //
    // block.innerHTML = "Nowa wartosc diva o klasie blocks";
    //
    // console.log("----------------wartosc po modyfikacji");
    // console.log(block.innerHTML);
    // console.log(block.outerHTML);



    //Zad 3----------------------

    // var mainFooter = document.getElementById("mainFooter");
    // console.log(mainFooter);
    //
    // function getId(element) {
    //
    //     var id = element.id;        //var id = element.getAttribute("id");
    //
    //     return id;
    //
    // }
    //
    // console.log(getId(mainFooter));



    //Zad 4 -------------------

    // function getTags(elements) {
    //
    //     var Array = [];
    //
    //     for(var i = 0; i < elements.length; i++){
    //         var child = elements[i].tagName;
    //
    //         Array.push(child);
    //     }
    //     return Array;
    //
    // }
    // console.log(getTags(childElements));

    //Zad 5 -----------------

    // function getClassInfo(element) {
    //     console.dir(element.classList);
    //
    //     //inzjalizuje poczatkowa czyta tabilice
    //     var resultList = [];
    //
    //     for (var i=0; i<element.classList.length; i++){
    //         var className = element.classList[i];
    //
    //         resultList.push(className);
    //     }
    //     return resultList;
    // }
    //
    // console.dir(getClassInfo(banner));


    //Zad 6 ------------------------

    var navLiList = document.querySelectorAll('nav li');

    function setDataDirection(elements) {
        for (var i=0; i<elements.length; i++){
            var element = elements[i];
            var newValue = 'top';

            if (!element.hasAttribute('data-direction')) {
                element.setAttribute('data-direction', newValue);
            }

        }

    }

    console.dir(navLiList);

    setDataDirection(navLiList);

    var navLiLisMod = document.querySelectorAll('nav li');

    for (var i=0; i<navLiLisMod.length; i++){
        var element = navLiLisMod[i];

        if (!element.hasAttribute('data-direction')) {
            console.log('Data Direction not set');
        } else {
            console.log('Data Direction SET');
        }

    }







});
