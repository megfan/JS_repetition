
document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var btn = document.querySelector('#addBtn');

    btn.addEventListener('click', function (event) {

        var table = document.querySelector('#orders');
        var row = table.querySelectorAll('tr')[2];
        var newRaw = row.cloneNode(true);
        row.parentElement.appendChild(newRaw);
        var orderNr = document.querySelector('#orderId');
        var item = document.querySelector('#item');
        var quantity = document.querySelector('#quantity');
        
        newRaw.firstElementChild.innerHTML = orderNr.value;
        newRaw.firstElementChild.nextElementSibling.innerHTML = item.value;
        newRaw.lastElementChild.innerHTML = quantity.value;
    })
});