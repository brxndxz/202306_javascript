var meGusta = [
    document.querySelector("#mg1"),
    document.querySelector("#mg2"),
    document.querySelector("#mg3"),
];

function darMeGusta(i){
    var contador = meGusta[i];
    contador = parseInt(contador.innerText);
    contador++;
    meGusta[i].innerText = contador;
}
