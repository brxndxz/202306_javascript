/*Filtro paso alto: Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores
mayores a cutoff.*/

function highPass(arr2, cutoff) {
    var filteredArr = [];
    // tu código aquí
    for(var i = 0; i < arr2.length; i++){
        if(arr2[i] > cutoff){
            filteredArr.push(arr2[i]);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]
