/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');


    var next = document.querySelector('#nextPicture');
    var prev = document.querySelector('#prevPicture');
    var list = document.querySelectorAll('li');


    var listIndex = 0;
    var listElements = list.length;
    var listMax = listElements -1;
    for (var i = 0; i < listElements; i++) {

          list[i].style.display = 'none';
        }
        list[listIndex].style.display = 'block';


    next.addEventListener('click', function () {
        console.log('click');
        list[listIndex].style.display = 'none';
        listIndex += 1;
        if(listIndex === listMax){
            listIndex = 0;
            list[listIndex].style.display = 'block';
        }else {
            list[listIndex].style.display = 'block';
        }

    });

    prev.addEventListener('click', function () {
        list[listIndex].style.display = 'none';
        listIndex -= 1;
        if(listIndex < 0){
            listIndex = listMax;
            list[listIndex].style.display = 'block';
        }else {
            list[listIndex].style.display = 'block';
        }

    })


});