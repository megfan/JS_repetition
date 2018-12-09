/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var allIcons = document.querySelectorAll('img');

    for (var i = 0; i < allIcons.length; i++) {
        allIcons[i].style.display = 'none';
    }

    var select = document.querySelector('.form-control');

        select.addEventListener('change', function () {
            for (var i = 0; i < allIcons.length; i++) {
                allIcons[i].style.display = 'none';
            }

                if (select.value === 'Windows') {
                    allIcons[2].style.display = 'block';
                }
                if (select.value === 'Os X') {
                    allIcons[1].style.display = 'block';
                }
                if (select.value === 'Ubuntu') {
                    allIcons[0].style.display = 'block';
                }

            })



});