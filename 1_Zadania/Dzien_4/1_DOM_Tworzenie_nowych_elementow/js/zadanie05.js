document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var buttons = document.querySelectorAll('.moveBtn');
    var listA = document.querySelector('#list1');
    var listB = document.querySelector('#list2');

    buttons.forEach(addEventListener('click', (e) => {
        moveElem(e);
    }));

    function moveElem(e){
        
    }

});








// window.addEventListener('DOMContentLoaded', function() {
//     var buttons = document.querySelectorAll('.moveBtn');
//     var list1 = document.getElementById('list1');
//     var list2 = document.getElementById('list2');

//     for (var i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', function(event) {
//             moveNode( event );
//         });
//     }

//     function moveNode(event) {
//         var listElem = event.target.parentElement;
//         var clone = listElem.cloneNode(true);
//         clone
//             .querySelector('a')
//             .addEventListener('click', moveNode);

//         var listId = listElem.parentElement.id;

//         listElem.parentElement.removeChild(listElem);

//         if (listId === 'list1') {
//             list2.appendChild(clone)
//         } else {
//             list1.appendChild(clone);
//         }
//     }
// })