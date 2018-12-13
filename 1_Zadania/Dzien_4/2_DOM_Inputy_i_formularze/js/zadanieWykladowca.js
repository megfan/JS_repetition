

document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var error = document.querySelector('.error-message');
    var success = document.querySelector('.success-message');
    var info = document.querySelector('.info-container');

    var email = document.getElementById('email').value;
    if(!email.includes('@')){
        // var successMessage = document.createElement('div');
        // successMessage.innerHTML = 'Poprawny email';
        // success.appendChild(successMessage);
        // console.log(successMessage);
        error.innerHTML = 'Niepoprawny email';
        event.preventDefault();

    }else{
        success.innerHTML = 'Poprawny email';
    };
    var name = document.getElementById('name').value;
    console.log(name.length);
    if(name.length < 6){
        error.innerHTML = 'Twoje imię jest za krótkie';
        event.preventDefault();

    };






//     var elem = document.querySelector('form');
//     var errorm = document.querySelector('.error-message');

//     elem.addEventListener('submit', function () {

//         // 1 email
//         var email = document.querySelector('#email').value;
//         if (emailValue.includes('@')) {

//             createErrorText('Niepoprawny email')
//             // var error = document.createElement('div');
//             // event.innerText = 'Niepoprawny email';
//             // errorMessageBlock.appendChild(error);

//             event.preventDefault();

//         }else{
//         }

//         // 2 imie

//         var nameValue = document.querySelector('#name').value;
//     })
// function createErrorText(text) {
//     var error = document.createElement('div');
//     event.innerText = 'Niepoprawny email';
//     errorMessageBlock.appendChild(error);
// }
});