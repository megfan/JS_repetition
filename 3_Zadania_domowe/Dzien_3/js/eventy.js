

    var contents = document.querySelectorAll('.content');

    var links = document.querySelectorAll('article a');

    links.forEach((e)=>{
        e.addEventListener('click', function (){
            this.nextElementSibling.style.display = 'block';
        });
    })