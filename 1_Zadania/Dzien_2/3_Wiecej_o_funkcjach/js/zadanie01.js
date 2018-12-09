
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funkcji
function sortArray() {
    
        //deklaracja zmiennej i przypisanie artości tablicy
        var points = [41, 3, 6, 1, 114, 54, 64];
    
        //wywołanie funkcji wyższego rzędu, sortowania w funkcji względem zmiennej points
        points.sort(function(a, b){
            //zakończenie funkcji poprzez zwrócenie posortowanej tablicy względem wielkości wartości
            return a-b;
        });
    
        //zakończenie funkcji poprzez wyswietlenie zawartości tablicy points
        return points;
    }
    
    //wywołanie funkcji
    sortArray();
    