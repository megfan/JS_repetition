
document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var data = document.querySelectorAll('.table tr')[2];
    var team1 = document.getElementById('team1');
    var points1 = document.getElementById('points1');
    var team2 = document.getElementById('team2');
    var points2 = document.getElementById('points2');
    var btnSubmit = document.querySelector('.btn');

    btnSubmit.addEventListener('click', function(e){
        e.preventDefault();
        if(team1.value === team2.value){
            alert('drużyny muszą być inne');
            return false
        }else{
            var newDataElem = data.cloneNode(true);
            data.parentElement.appendChild(newDataElem);
            var newChildren = newDataElem.querySelectorAll('td');
    
            newChildren[0].innerHTML = team1.value;
            newChildren[1].innerHTML = team2.value;
            newChildren[2].innerHTML = points1.value + ' - '+points2.value
            return true;
        }
    })
});