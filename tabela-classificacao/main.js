var totVitorias = 0
var totDerrotas = 0

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
    verificaVitorias();
}

exibirJogadores (jogadores);

function adicionarVitoria (i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.partidas++;
    totVitorias += 1;
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
    totDerrotas += 1;
    exibirJogadores(jogadores);
}

function adicionarJogador () {
    var novoNome = document.getElementById("novo__jogador").value;
    var novoJogador = {nome: novoNome, 
        partidas:0, 
        vitorias:0,
        empates: 0, 
        derrotas: 0, 
        pontos: 0
    };

    if (novoJogador.nome != "") {
        jogadores.push(novoJogador);
        alert("Jogador adicionado com sucesso!");
        exibirJogadores(jogadores);
     
    } else {
        alert("Você deve dar um nome ao novo jogador!")
    }

    document.getElementById("novo__jogador").value = "";
}

function verificaVitorias () {
    if (totDerrotas != totVitorias) {
        var verificacao = document.getElementById("verificaVitorias");
        verificacao.innerHTML = "Número total de vitórias deve ser igual ao número total de derrotas!";
    }
    if (totDerrotas == totVitorias) {
        var verificacao = document.getElementById("verificaVitorias");
        verificacao.innerHTML = "";
    }
}

function limparDados(i) {
    for (var i = 0;i < jogadores.length; i++) {
        jogadores[i].partidas = 0;
        jogadores[i].vitorias = 0;
        jogadores[i].empates = 0;
        jogadores[i].derrotas = 0;
        jogadores[i].pontos = 0;
        totDerrotas = 0;
        totVitorias = 0;
        exibirJogadores(jogadores);
    }
}