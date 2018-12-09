//Zad 1

//---czesc 1----------//


var edgeElem = document.querySelector('.edge');
console.log(edgeElem);
edgeElem.style.backgroundImage = 'url(assets/img/edge.png)';
document.querySelector('.edge + a').setAttribute('href', 'https://www.microsoft.edge.com');

var fireElem = document.querySelector('.firefox');

fireElem.style.backgroundImage = 'url(assets/img/firefox.png)';
document.querySelector('.firefox + a').setAttribute('href', 'https://www.firefox.com');
document.querySelector('.firefox + a').innerHTML = 'Firefox';

var chromeElem = document.querySelector('.chrome');
chromeElem.style.width = '100px';
document.querySelector('.chrome + a').innerHTML = 'Chrome';


// var microsoftEdge = document.querySelector(".edge");
// console.log(microsoftEdge);

// microsoftEdge.style.backgroundImage = 'url(assets/img/edge.png)';


// var fireFox = document.querySelector(".firefox");
// console.log(fireFox);

// fireFox.style.backgroundImage = 'url(assets/img/firefox.png)';


//---czesc 2----------//

// document.querySelector(".edge + a").setAttribute("href", 'https://www.microsoft.edge.com');

// document.querySelector(".firefox + a").setAttribute("href", 'https://www.firefox.com');
// document.querySelector(".firefox + a").innerText = "Firefox";

// document.querySelector(".chrome + a").innerText = "Chrome";


// //---czesc 3----------//

// var chrome = document.querySelector(".chrome");
// chrome.style.width = "100px";

// chrome.style.backgroundRepeat = "no-repeat";

// fireFox.style.backgroundRepeat = "no-repeat";

// //Zad 2


var Name = document.querySelector('#name');
Name.innerHTML = 'Meg Stasz';
Name.style.color = 'red';
var favColor = document.querySelector('#fav_color');
favColor.innerHTML = 'black';
favColor.style.fontWeight = 'bold';
var favMenu = document.querySelector('#fav_meal');
favMenu.innerHTML = 'spaghetti';
favMenu.style.textTransform = 'uppercase';

// var idName = document.querySelector('.ex2 #name');
// idName.innerHTML = "Koziołek Matołek";

// var idColor = document.querySelector('.ex2 #fav_color');
// idColor.innerHTML = 'Green';

// var idMeal = document.getElementById('fav_meal');
// idMeal.innerHTML = 'Pierogi';


// //Zad 3

var menuList = document.querySelector('.ex3 ul');
menuList.classList.add('menu');

var menuElem = document.querySelectorAll('.menu li');
console.log(menuElem);
for (var i = 0; i< menuElem.length; i++){
    var e = menuElem[i];
    e.classList.add('menuElement');
    e.classList.remove('error');
}

// //---1----//
// document.querySelector('.ex3 ul').classList.add("menu");

// //-----2----//

// var elementList = document.querySelectorAll(".menu li");


//     for (var i = 0; i< elementList.length; i++){
//         var element = elementList[i];

//         element.classList.add("menuElement");
//         element.classList.remove("error");
// }

// //------3------------//

var exFour = document.querySelectorAll('.ex4 li');
var counter = 1;

for(var i=0; i<exFour.length; i++){
    exFour[i].dataset.id = counter;
    counter++;
}
// var elementList = document.querySelectorAll('.ex4 li');

// var numInt;

//         for (var i = 0; i< elementList.length; i++){
//             numInt = i+1;

//             //wariant Dataset
//             elementList[i].dataset.id = numInt;

//             //Wariant Set Attribute
//             elementList[i].setAttribute("data-id", numInt);
//         }


