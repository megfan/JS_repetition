/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var newTeams = document.querySelector('.table *');

    var newT = newTeams.lastElementChild;

    var newCopyTeams = newT.cloneNode(true);
    newTeams.appendChild(newCopyTeams);




    var btn = document.querySelector('.btn');
    btn.addEventListener('click', function () {
        var team1 = document.querySelector('#team1');
        var team2 = document.querySelector('#team2');

        if(team1 === team2){
            newCopyTeams[0]

        }
    })





});