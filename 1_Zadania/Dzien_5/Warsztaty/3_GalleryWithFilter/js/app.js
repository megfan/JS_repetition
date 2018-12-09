/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');


    var picGallery = document.querySelectorAll('#gallery img');
    var hideBtn = document.querySelector('#hideButton');
    var showBtn = document.querySelector('#showButton');
    var input = document.querySelector('#tagInput');

    var inputValue = input.value;


    hideBtn.addEventListener('click', function () {
        input.value = '';
    });



    showBtn.addEventListener('click', function () {

        for (var i = 0; i < picGallery.length; i++) {
            var pic = picGallery[i];
            var picTag = pic.dataset.tag;

             var x = picTag.indexOf(inputValue);

             picGallery[i].style.display = 'none';

             if(x > -1){
                 picGallery[i].style.display = 'block';
             }
        }


    });


});
