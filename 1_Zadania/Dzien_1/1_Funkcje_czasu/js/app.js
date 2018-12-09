//Zad 1

    function countHello(number){
        if(number <=10 && number >0){

            var counter = 0;

            var interval = setInterval(function () {
                console.log("Hello" + counter++);

                if (counter > number){
                    clearInterval(interval)
                }

            }, 1000);

        }else {
            console.log("Złe argumenty");
        }
    }

    countHello(5);

