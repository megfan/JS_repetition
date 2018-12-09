/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {


    var btn = document.querySelector('.button');

    var counter = 1;
    btn.addEventListener('click', function(){
        var list = document.querySelector('.menu');
        var elem = document.createElement('li');
        list.appendChild(elem);
        elem.innerHTML = " Jestem element nr : "+ counter;
        counter++;
    })
    // var btn = document.querySelector('.button');
    // btn.addEventListener('click',function (event) {

    //     var menuLista = document.querySelector('.menu');
    //     var newElementLi = document.createElement('li');
    //     menuLista.appendChild(newElementLi);

    //     var index = menuLista.childElementCount;
    //     newElementLi.innerText = "Element "+ index;
    // });
});