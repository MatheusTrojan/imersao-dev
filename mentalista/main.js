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
        elementoResultado.innerHTML = "Muito bem jovem Padawan, correto você está!";
        elementoDica.innerHTML = "";
        document.getElementById("btnChutar").disabled = true;

    } else if (numeroDeChutes >= tentativasPermitidas) {
        elementoResultado.innerHTML =
          "Parece que suas chances acabaram. Tente outra vez apertando em recomeçar!";
        document.getElementById("btnChutar").disabled = true;
        elementoDica.innerHTML = "O número secreto era " + numeroSecreto;

    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Apenas entre 0 e 10, o número deve ser";

    } else {
        elementoResultado.innerHTML ="Parece que não foi esse o número! Tentativa " + numeroDeChutes +" de " + tentativasPermitidas;

        if (numeroSecreto > chute) {
          elementoDica.innerHTML = "Errado você está. MAIOR que " + chute + " o número é.";
        } else {
          elementoDica.innerHTML = "Errado você está. MENOR que " + chute + " o número é.";
        }
        numeroDeChutes++;
    }
}

function Reset() {
    numeroSecreto = parseInt(Math.random() * 11);
    document.getElementById("btnChutar").disabled = false;
    numeroDeChutes = 1;
    document.getElementById("valor").value = "";
    elementoResultado.innerHTML = "Jogo Reiniciado!";
    elementoDica.innerHTML = "";
}
  

