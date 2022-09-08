var notaPrimeiroBim = 8;  //nota1
var notaSegundoBim = 8.75;  //nota2
var notaTerceiroBim = 6;    //nota3
var notaQuartoBim = 8;      //nota4

var media = ((notaPrimeiroBim + notaSegundoBim + notaTerceiroBim + notaQuartoBim) / 4).toFixed(1);

function CalculaMedia() {
    var valorN1 = document.getElementById("nota1");
    var nota1 = parseFloat(valorN1.value);
    
    var valorN2 = document.getElementById("nota2");
    var nota2 = parseFloat(valorN2.value);

    var valorN3 = document.getElementById("nota3");
    var nota3 = parseFloat(valorN3.value);

    var valorN4 = document.getElementById("nota4");
    var nota4 = parseFloat(valorN4.value);

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    var elementoMediaCalculada = document.getElementById("valorMedia");
    var mediaCalculada = ("A média das suas notas é igual a " + media.toFixed(2));
    elementoMediaCalculada.innerHTML = mediaCalculada;
}