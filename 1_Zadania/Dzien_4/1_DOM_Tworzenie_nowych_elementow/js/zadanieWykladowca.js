/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {

    var deleteBtn = document.querySelectorAll('.deleteBtn');
    for(var i =0; i < deleteBtn.length; i++){
        deleteBtn[i].addEventListener('click', function(){
            console.log(this.parentElement.parentElement);
            this.parentElement.parentElement.style.display = 'none';
        })
    }
    // var btns = document.querySelectorAll('.deleteBtn');

    // for(var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener('click', function (event) {

    //         var tableRow = this.parentElement.parentElement;
    //         var table = tableRow.parentElement;

    //         table.removeChild(tableRow);

    //     });
    // }
});