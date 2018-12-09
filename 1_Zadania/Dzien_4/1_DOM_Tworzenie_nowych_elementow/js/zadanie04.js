document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var elem = document.querySelectorAll('ul li');
    console.log(elem);

    var btn = document.querySelector('#remove');
    btn.addEventListener('click', ()=> 
        elem.forEach((e) => e.parentElement.removeChild(e))
    )
});