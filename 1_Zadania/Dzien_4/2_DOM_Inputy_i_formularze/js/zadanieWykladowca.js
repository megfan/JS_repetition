/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var elem = document.querySelector('form');
    var errorm = document.querySelector('.error-message');

    elem.addEventListener('submit', function () {

        // 1 email
        var email = document.querySelector('#email').value;
        if (emailValue.includes('@')) {

            createErrorText('Niepoprawny email')
            // var error = document.createElement('div');
            // event.innerText = 'Niepoprawny email';
            // errorMessageBlock.appendChild(error);

            event.preventDefault();

        }else{
        }

        // 2 imie

        var nameValue = document.querySelector('#name').value;
    })
function createErrorText(text) {
    var error = document.createElement('div');
    event.innerText = 'Niepoprawny email';
    errorMessageBlock.appendChild(error);
}
});