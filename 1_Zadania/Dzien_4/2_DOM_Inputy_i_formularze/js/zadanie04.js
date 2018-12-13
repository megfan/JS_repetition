
document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');


    var creditCard = document.getElementById('name');
    var alertCopy = document.querySelector('.form-group').firstElementChild;
    var alert = alertCopy.cloneNode(true);
    alertCopy.parentElement.appendChild(alert);
    alert.innerHTML = '...';

    var green = document.querySelectorAll('.form-control')[0];
    console.log(green);

    creditCard.addEventListener('change', function(e){
        e.target.value = creditCard.value;
        Validation(e);
    })
    function Validation(e){
        if(e.target.value[0] == 4){
            if(creditCard.value.length < 13){
                alert.innerHTML = 'Karta Visa ma od 13 do 16 cyfr';
            }else{
                alert.innerHTML = 'Karta Visa poprawna';
            }           
        }else if(creditCard.value[0] == 5){
            if(creditCard.value.length != 16){
                alert.innerHTML = 'Karta MasterCard ma 16 cyfr';
            }else{
                alert.innerHTML = 'Karta MasterCard poprawna';
            }           
        }else if(creditCard.value[0] == 3 && creditCard.value[1] == 4 || creditCard.value[1] == 7){
            if(creditCard.value.length != 15){
                alert.innerHTML = 'Karta American Express ma 15 cyfr';
                alert.parentElement.children[1].style.border = 'thin solid green';
            }else{
                alert.innerHTML = 'Karta American Express poprawna';
            } 
        }else{
            console.log('karta Unknown');
        }
    }



});