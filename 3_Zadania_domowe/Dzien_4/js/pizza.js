
    var price = document.getElementById('price');
    var products = document.querySelectorAll('.checkbox input');
    var allAdditions = products[0];
    var allClear = products[products.length-1];

    var arrOfCheckBox = [];
    for(var i =1; i< products.length-1; i++){
        arrOfCheckBox.push(products[i]);
    }
    var sum = 0;
    arrOfCheckBox.forEach((elem) => {
        elem.addEventListener('change', function(){
            if(this.checked === true){
                sum += Number(this.dataset.price);
                price.innerHTML = sum.toFixed(2) + 'zł';
                allClear.checked = false;
                allAdditions.checked = false;
            }else{
                sum -= Number(this.dataset.price);
                price.innerHTML = sum.toFixed(2) + 'zł';
                allClear.checked = false;
                allAdditions.checked = false;
            }
        })
    });
    allAdditions.addEventListener('change', function(){
        arrOfCheckBox.forEach((elem) => {
            elem.checked = true;
            sum += Number(elem.dataset.price);
            price.innerHTML = sum.toFixed(2) + 'zł';
        })
    });
    allClear.addEventListener('change', function(){
        arrOfCheckBox.forEach((elem) => {
        elem.checked = false;
        })
        allAdditions.checked = false;
        sum = 0;
        price.innerHTML = sum + 'zł';
    })