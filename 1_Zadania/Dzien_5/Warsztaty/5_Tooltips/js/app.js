/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');


    var tulip = document.querySelectorAll('.tooltip');
    console.log(tulip);

    for (var i = 0; i < tulip.length; i++) {

            tulip[i].addEventListener('mouseover', function (event) {
                var tulipText = this.dataset.text;
                console.log(tulipText);

                var tulipBox = document.createElement('span');
                this.appendChild(tulipBox);

                tulipBox.classList.add('tulipBoxText');
                tulipBox.innerText = 'Text tooltipa';
                console.log(tulipBox.dataset);
            });

        tulip[i].addEventListener('mouseout', function (event) {
            console.log('mouseout');

                var toRemove = document.querySelector('.tulipBoxText');
                console.log(toRemove);
                this.removeChild(toRemove);

        });

    }

});