var contador = 0;
var meGusta = document.querySelector("#like");


function darMeGusta(){
    contador++;
    meGusta.innerHTML = contador + " like(s)";
}