var nome = "Matheus";
var notaPrimeiroBim = 8;
var notaSegundoBim = 8.75;
var notaTerceiroBim = 6;
var notaQuartoBim = 8;

var media = ((notaPrimeiroBim + notaSegundoBim + notaTerceiroBim + notaQuartoBim) / 4).toFixed(1);

console.log ("Bem vindo, " + nome);
console.log ("Sua média fechou em " + media);

if (media >= 7) {
    console.log ("Você foi aprovado!")
} else {
    console.log ("Você está de recuperação!")
}

