/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('resize', function (ev) {
        document.querySelector('#windowHeight').innerHTML = window.innerHeight;
        document.querySelector('#windowWidth').innerHTML = window.innerWidth;

    })

});