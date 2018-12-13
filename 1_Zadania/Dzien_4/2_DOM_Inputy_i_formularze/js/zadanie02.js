
document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var icons = document.querySelectorAll('img');
    var control = document.querySelector('.form-control');
    for(var i=0; i<icons.length; i++){
        icons[i].style.display = 'none';
    }
 
    control.addEventListener('change', ()=> {
        for(var i=0; i<icons.length; i++){
            icons[i].style.display = 'none';
        }
        if(control.value === 'Windows'){
            icons[2].style.display = 'block';
        }else if(control.value === 'Os X'){
            icons[0].style.display = 'block';
        }else if(control.value === 'Ubuntu'){
            icons[1].style.display = 'block';
        }
    })
});