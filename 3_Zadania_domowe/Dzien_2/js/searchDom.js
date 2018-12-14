
    //1
    
    // var menu = document.getElementById('menu');

    // function getDataInfo(elem){
    //     var arr =[];
    //     var children = elem.children;
    //     for(var i =0; i<children.length; i++){
    //        var child = children[i];
    //        arr.push(child.dataset.info);
    //     }
    //     return arr;
    // }
    // console.log(getDataInfo(menu));

 //2
    // var contener = document.getElementById('main-contener');

    // function getElemClass(elem){
    //     var arrClass = [];
    //     var classelem = elem.classList;
    //     for(var i=0; i<classelem.length; i++){
    //         arrClass.push(classelem[i]);
    //     }
    //     return arrClass;
    // }
    // console.log(getElemClass(contener));

//3
    var color = document.querySelector('.pink-color');

    function getElemText(el){
        console.log(el.innerHTML)
    }
    getElemText(color);

//4

    var images = document.getElementsByClassName('images');
 
    function getElemAlt(e){
        var imagesArr =[];
        for(var i=0; i<e.length; i++){
            var image = e[i];
            imagesArr.push(image.getAttribute('alt'));
        }
        return imagesArr;
    }
    console.log(getElemAlt(images));

//5 

    var links = document.querySelectorAll('.my-link');
    console.log(links);

    function getElemHref(e){
        var linksArr =[];
        for(var i=0; i<e.length; i++){
            var links = e[i];
            linksArr.push(links.getAttribute('href'));
        }
        return linksArr;
    }
    console.log(getElemHref(links));