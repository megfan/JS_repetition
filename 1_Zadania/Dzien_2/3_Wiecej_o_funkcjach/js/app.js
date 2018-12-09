/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//deklaracja funkcji
function jeden() {
    
        //deklaracja zmiennej lokalnej i przypisanie wartości
        var zmienna1 = 1;
    
        //Deklaracja funkcji w funkcji
        function dwa() {
    
            //wypisanie do konsoli zawartości zmienna1, zdeklarowanej w funkcji nadrzednej, wartośc zostanie pobrana poprzez hoisting
            console.log(zmienna1);
    
            //Deklaracja i przypisanie w funkcji wewnetrznej
            var zmienna2 = 3;
        }
    
        //Wywołanie funkcji, poniżej deklaracji
        dwa();
    
        //proba użycia zmienna2 z wewnetrznego zakresu funkcji dwa(),
        console.log(zmienna2)
    }
    
    //wywołanie funkcji jeden() po jej zdefiniowaniu
    jeden()