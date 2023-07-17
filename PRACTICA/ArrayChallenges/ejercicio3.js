// Mejor que el promedio: Dado un arreglo de números, devuelve un recuento de cuántos de los números 
//son mayores que el promedio.

function betterThanAverage(arr) {

    var sum = 0;

    // calcula el promedio
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    var average = sum / arr.length;
    var count = 0;
    //console.log(average);
    // cuenta cuántas variables son mayores que el promedio
    for(var j = 0; j < arr.length; j++){
        if(arr[j] > average){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
