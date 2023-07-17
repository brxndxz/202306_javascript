//Siempre hambriento: Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida"
//debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo, que la consola registre 
//"Tengo hambre" una vez.

var arr = [3.14, "comida", "pastel", true, "comida", "comida"];
//var arr = [1,2,3,4,4,5,5];
var contador = 0;
function siempreHambriento(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i]==="comida"){
            console.log("delicioso");
            contador++;
        }
    }
    if (contador === 0){
        console.log("Tengo hambre");
    }
}
siempreHambriento(arr);