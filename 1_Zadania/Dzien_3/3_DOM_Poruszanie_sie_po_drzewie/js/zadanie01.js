/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {

    var buttons = document.querySelectorAll('.button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            console.log(this);
        var box = this.nextElementSibling;
        if(box.style.visibility === 'hidden'){
            this.nextElementSibling.style.visibility = 'visible';
        }else {
            this.nextElementSibling.style.visibility = 'hidden';
        }
        });
    }
});