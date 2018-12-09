document.addEventListener("DOMContentLoaded", function () {
console.log("DOM fully loaded and parsed!");



    var allArticle = document.querySelectorAll('article a');
    console.log(allArticle);

    var allPar = document.querySelectorAll('.content');
    console.log(allPar);
    function show() {
        allPar.style.visibility = 'visible';
        console.log(allPar);
    }

    });


allArticle.addEventListener('click', show ());;