document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var btn = document.querySelector('#remove');
    console.log(btn);
    btn.addEventListener('click', ()=> {
        btn.parentElement.removeChild(btn);
    })
});