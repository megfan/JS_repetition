
document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var check = document.getElementById('invoice');
    var factura = document.getElementById('invoiceData');

    factura.style.display = 'none';
    check.addEventListener('click', ()=> {
        if(check.checked){
            factura.style.display = 'block';
        }else{
            factura.style.display = 'none';
        }
    })
});
