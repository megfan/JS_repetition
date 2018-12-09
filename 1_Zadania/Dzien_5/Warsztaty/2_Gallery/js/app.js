/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */


document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');



    var galleryPic = document.querySelectorAll('li');
    var body = document.querySelector('body');
    var galleryPicSrc = document.querySelectorAll('img');
    console.log(galleryPicSrc);

    console.log(galleryPic);
    console.log(body);

    for (var i = 0; i < galleryPicSrc.length; i++) {
        galleryPic[i].addEventListener('click', function () {

            var bigPic = document.createElement('div');
            var firstBodyDiv = document.querySelector('.gallery');
            body.insertBefore(bigPic, firstBodyDiv);

            bigPic.classList.add('fullScreen');

            var btnBigDiv = document.createElement('button');
            bigPic.appendChild(btnBigDiv);
            btnBigDiv.classList.add('close');
            btnBigDiv.innerText = "Close";


            var imgBigDiv = document.createElement('img');
            bigPic.appendChild(imgBigDiv);

            var x = this.firstElementChild.getAttribute('src');
            imgBigDiv.setAttribute('src', x);


            btnBigDiv.addEventListener('click', function () {
                var close = document.querySelector('body').firstElementChild;
                console.log(close);
                close.parentElement.removeChild(close);
        });



        });
    }

});