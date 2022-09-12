var matheus = {nome:"Matheus", partidas:0, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var renata = {nome:"Renata", partidas:0, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }


function calculaPontos (jogador) {
    var pontos = (jogador.vitorias * 3) + (jogador.empates * 1);
    return pontos;
}

matheus.pontos = calculaPontos(matheus);
renata.pontos = calculaPontos(renata);

var jogadores = [matheus, renata];

function exibirJogadores (jogadores) {
    var elemento = ""
    for (var i = 0;i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].partidas + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"        
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibirJogadores (jogadores);

function adicionarVitoria (i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.partidas++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);
}

function adicionarEmpate (i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.partidas++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);
}

function adicionarDerrota (i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.partidas++;
    exibirJogadores(jogadores);
}


