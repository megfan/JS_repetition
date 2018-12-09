/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {

    var containers = document.querySelectorAll('.listContainer');

    for (var i = 0; i < containers.length; i++) {
        containers[i].addEventListener('click', function () {

            var greenChildren = this.firstElementChild.children;

            for (var i = 0; i < greenChildren.length; i++) {
               greenChildren[i].style.color = "green";

            }
            this.firstElementChild.firstElementChild.style.color = 'red';
            this.firstElementChild.lastElementChild.style.color = 'blue';

        });


    }


});