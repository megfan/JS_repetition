/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {

    
    var part1 = document.querySelector('.first').firstElementChild.children[2];
    console.log(part1);

        // var first = document.querySelector('.first');
        // var child = first.firstElementChild;
        // var grandsan  = child.children[2];
        // console.log(grandsan);

    var part2 = document.getElementById('second').parentElement.children[3];
    console.log(part2);

    var part3 = document.querySelector("[data-ex='third']").parentElement.parentElement.lastElementChild.firstElementChild.children;

    var childrenLenght = part3.length;
    part3 = part3[Math.floor(childrenLenght/2)];
    console.log(part3);

//punkt 4 ---------------------------------
        // var part4 = document.querySelector('div.forth').parentElement.children;
        //
        // for (var i = 0; i < part4.length; i++) {
        //     if(part4[i].tagName === 'ARTICLE'){
        //
        //         part4 = part4[i];
        //
        //         break;
        //     }
        // }
        // part4 = part4.querySelector('p:nth-of-type(2)');
        // console.log(part4);

    var fouthDiv = document.querySelector('div.forth').parentElement;
    var article = fouthDiv.querySelector('article');
    var paragraph = article.querySelector('p:nth-of-type(2)');
    console.log(paragraph);


});