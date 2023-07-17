//Arreglo invertido: Escribe una función que invierta los valores de un arreglo y los devuelva.

function reverse(arr) {
    // tu código aquí
    var salida = []
    for (var i = arr.length - 1; i >= 0; i--) {
        salida.push(arr[i]);
    }
    return salida;
}  
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

