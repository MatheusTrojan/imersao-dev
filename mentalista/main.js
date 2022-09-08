var numeroSecreto = parseInt(Math.random() * 11);
var tentativasPermitidas = 3
var numeroDeChutes = 1;
var elementoResultado;
var elementoDica;


function Chutar() {
    elementoResultado = document.getElementById("resultado");
    elementoDica = document.getElementById("dica");
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "PARABÉNS, VOCÊ ACERTOU!";
        elementoDica.innerHTML = "";
        document.getElementById("btnChutar").disabled = true;

    } else if (numeroDeChutes >= tentativasPermitidas) {
        elementoResultado.innerHTML =
          "Suas chances acabaram, clique em recomeçar para resetar o jogo";
        document.getElementById("btnChutar").disabled = true;
        elementoDica.innerHTML = "O número secreto era " + numeroSecreto;

    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";

    } else {
        elementoResultado.innerHTML ="Não foi dessa vez, tentativa " + numeroDeChutes +" de " + tentativasPermitidas;

        if (numeroSecreto > chute) {
          elementoDica.innerHTML = "ERRRRROOOU. O número secreto é MAIOR que " + chute;
        } else {
          elementoDica.innerHTML = "ERRRRROOOU. O número secreto é MENOR que " + chute;
        }
        numeroDeChutes++;
    }
}

function Reset() {
    numeroSecreto = parseInt(Math.random() * 11);
    document.getElementById("btnChutar").disabled = false;
    numeroDeChutes = 1;
    document.getElementById("valor").value = "";
    elementoResultado.innerHTML = "";
    elementoDica.innerHTML = "";
}
  

