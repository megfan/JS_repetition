/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');


    var checkB = document.querySelector('#invoice');
    var factura = document.querySelector('#invoiceData');

    factura.style.display = 'none';


    checkB.addEventListener('change', function () {

         if(checkB.checked === true){
             factura.style.display = 'block';
         }else{
             factura.style.display = 'none';
         }
    });

});
