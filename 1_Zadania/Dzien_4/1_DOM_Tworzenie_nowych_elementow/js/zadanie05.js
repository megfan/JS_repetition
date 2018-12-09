document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

    var buttons = document.querySelectorAll('.moveBtn');
    var listA = document.querySelector('#list1');
    var listB = document.querySelector('#list2');

    buttons.forEach(addEventListener('click', function(e) {
            moveElem( e );
        }));
    function moveElem(e){
        var elemClicked = e.target.parentElement;
        var cloneElem = elemClicked.cloneNode(true);
        var listId = elemClicked.parentElement.id;
        elemClicked.parentElement.removeChild(elemClicked);
        
        if(listId === 'list1'){
            listB.appendChild(elemClicked);
            elemClicked.style.color = 'green';
        }else{
            listA.appendChild(elemClicked);
            elemClicked.style.color = 'purple';
        }
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
// });