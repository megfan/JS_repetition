/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');


    var mainList = document.querySelectorAll('.nav > ul > li');
    console.log(mainList);

    for (var i = 0; i < mainList.length; i++) {

        mainList[i].addEventListener('mouseover', function (event) {

            var listElement = this.querySelector('ul');
            if(!(listElement == null)){
                listElement.style.display = 'block';

            }

        });

        mainList[i].addEventListener('mouseout', function () {
            var listElement = this.querySelector('ul');
            if(!(listElement == null)){
                listElement.style.display = 'none';

            }

        });

    }


});