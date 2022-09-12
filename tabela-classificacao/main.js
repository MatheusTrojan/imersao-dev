var matheus = {nome:"Matheus", vitorias: 2, empates: 3, derrotas: 1, pontos: 0 }

var resultadoDosPontos = 

function calculaPontos (jogador) {
    var pontos = (jogador.vitorias * 3) + (jogador.empates * 1);
    return pontos;
}

calculaPontos(matheus)
