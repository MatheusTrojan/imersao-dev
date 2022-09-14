var cartas = [
    carta1 = {
        nome: "Goku",
        imagem:"http://pa1.narvii.com/6339/e298a66231334f247fe1086adc3f644411063f08_00.gif",
        atributos: {
            ataque: 9,
            defesa: 5,
            ki: 6,
            velocidade: 8 
        }
    },    
    carta2 = {
        nome: "Vegeta",
        imagem:"http://pa1.narvii.com/6862/09d5ae6c34c52ac8e073525b04d930e7c274964ar1-500-393_00.gif",
        atributos: {
            ataque: 8,
            defesa: 6,
            ki: 7,
            velocidade: 5
        }
    },
    carta3 = {
        nome: "Gohan",
        imagem:"https://giffiles.alphacoders.com/141/14108.gif",
        atributos: {
            ataque: 7,
            defesa: 5,
            ki: 8,
            velocidade: 6
        }
    },
    carta4 = {
        nome: "Cell",
        imagem:"https://i.pinimg.com/originals/09/c4/92/09c492b5763886231175c63f5a74c019.gif",
        atributos: {
            ataque: 7,
            defesa: 8,
            ki: 5,
            velocidade: 7
        }
    },
    carta5 = {
        nome: "Majin-Boo",
        imagem:"https://i.pinimg.com/originals/65/d9/4d/65d94d58ef7c6ad084e76b1c1eb16843.gif",
        atributos: {
            ataque: 8,
            defesa: 6,
            ki: 5,
            velocidade: 9 
        }
    },
    carta6 = {
        nome: "Forças Especiais Ginyu",
        imagem:"https://c.tenor.com/yGFrZcd3mpsAAAAd/ginyu-force-pose.gif",
        atributos: {
            ataque: 5,
            defesa: 8,
            ki: 6,
            velocidade: 7 
        }
    },
    carta7 = {
        nome: "Freeza",
        imagem:"https://c.tenor.com/3dWtpXXeV6oAAAAC/lol-freezer.gif",
        atributos: {
            ataque: 9,
            defesa: 7,
            ki: 4,
            velocidade: 6 
        }
    },
    carta8 = {
        nome: "Android 17",
        imagem:"https://pa1.narvii.com/6332/053c378f5b141ffd9ef6b03171bb10deceec0dec_hq.gif",
        atributos: {
            ataque: 7,
            defesa: 9,
            ki: 5,
            velocidade: 6 
        }
    },
    carta9 = {
        nome: "Android 18",
        imagem:"https://c.tenor.com/5NNsHJDjCMQAAAAC/dbz-android18.gif",
        atributos: {
            ataque: 8,
            defesa: 6,
            ki: 4,
            velocidade: 7 
        }
    }, 
    carta10 = {
        nome: "Kuririn",
        imagem:"https://pa1.narvii.com/6245/aa76a2b33696145865e0228ab7f4fcaf5f1ed306_hq.gif",
        atributos: {
            ataque: 4,
            defesa: 6,
            ki: 7,
            velocidade: 5 
        }
    },
    carta11 = {
        nome: "Piccolo",
        imagem:"https://media1.giphy.com/media/13fTar4VVaFlG8/giphy.gif",
        atributos: {
            ataque: 5,
            defesa: 6,
            ki: 8,
            velocidade: 7 
        }
    },
    carta12 = {
        nome: "Mestre Kame Bombado",
        imagem:"http://pa1.narvii.com/6537/1701522b29c537e5e0097323e8c96858c0963402_00.gif",
        atributos: {
            ataque: 7,
            defesa: 4,
            ki: 9,
            velocidade: 5 
        }
    },
    carta12 = {
        nome: "Vegeto - Super Trunfo",
        imagem:"https://64.media.tumblr.com/53258290acc48e2d261d604de42988b0/tumblr_n5eay9TjO01tp8kdpo1_500.gif",
        atributos: {
            ataque: 10,
            defesa: 4,
            ki: 9,
            velocidade: 8 
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

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
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

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()

        //duas variaveis para facilitar na hora de chamar o valor do atributo selecionado
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado] 
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado] 

    var elementoResultado = document.getElementById("resultado")

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "VOCÊ VENCEU! A carta da máquina era o " + cartaMaquina.nome + " com valor de " + atributoSelecionado + " igual a " + valorCartaMaquina 
    } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML = "VOCÊ PERDEU! A carta da máquina era o " + cartaMaquina.nome + " com valor de " + atributoSelecionado + " igual a " + valorCartaMaquina 
    } else {
        elementoResultado.innerHTML = "EMPATE! A carta da máquina era o " + cartaMaquina.nome + " com valor de " + atributoSelecionado + " igual a " + valorCartaMaquina
    }

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' checked value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nomePersonagem = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;

    //                          1º          2º           3º div com opcoes          fecha div do tagHTML
    divCartaJogador.innerHTML = moldura + nomePersonagem + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina () {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p class='carta-status-maquina' name='atributo' checked value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nomePersonagem = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;


    divCartaMaquina.innerHTML = moldura + nomePersonagem + tagHTML + opcoesTexto + "</div>";
}