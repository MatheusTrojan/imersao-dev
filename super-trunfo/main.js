var cartas = [
    carta1 = {
        nome: "Goku",
        atributos: {
            ataque: 9,
            defesa: 7,
            magia: 6,
            velocidade: 8 
        }
    },    
    carta2 = {
        nome: "Vegeta",
        atributos: {
            ataque: 8,
            defesa: 8,
            magia: 5,
            velocidade: 6
        }
    },
    carta3 = {
        nome: "Gohan",
        atributos: {
            ataque: 7,
            defesa: 6,
            magia: 8,
            velocidade: 7
        }
    },
    carta4 = {
        nome: "Cell",
        atributos: {
            ataque: 8,
            defesa: 5,
            magia: 6,
            velocidade: 6
        }
    },
    carta5 = {
        nome: "Majin-Boo",
        atributos: {
            ataque: 7,
            defesa: 6,
            magia: 8,
            velocidade: 9 
        }
    }    
]
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""
        // percorre todos atributos dentro da carta sorteada 
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += 
        "<input type='radio' name='atributo' checked value='" + 
        atributo + 
        "'>" +
        atributo;
    }

    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
        //get element by NAME (do input radio na função exibirOpcoes)
    var radioAtributos = document.getElementsByName("atributo");
        // percorrendo todos atributos em busca de qual está marcado
    for (var i = 0; i < radioAtributos.length; i++) {
        // SE ESTIVER MARCADO, retorna o valor desse radio
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar () {
    var atributoSelecionado = obtemAtributoSelecionado()

        //duas variaveis para facilitar na hora de chamar o valor do atributo selecionado
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado] 
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado] 

    var elementoResultado = document.getElementById("resultado")

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "VOCÊ VENCEU! A carta da máquina era " + cartaMaquina.nome + " com valor de " + atributoSelecionado + " igual a " + valorCartaMaquina 
    } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML = "VOCÊ PERDEU! A carta da máquina era " + cartaMaquina.nome + " com valor de " + atributoSelecionado + " igual a " + valorCartaMaquina 
    } else {
        elementoResultado.innerHTML = "EMPATE! A carta da máquina era " + cartaMaquina.nome + " com valor de " + atributoSelecionado + " igual a " + valorCartaMaquina
    }
}


