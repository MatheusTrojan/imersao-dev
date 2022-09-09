function adicionarFilme() {
    // variavel para pegar o value do input com id "filme"
    var filmeFavorito = document.getElementById("filme").value;
    var tituloFilme = document.getElementById("titulo__filme").value;
    // verificação de se o link inserido termina com .jpg
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito, tituloFilme);
    } else {
        console.error("Endereço de filme inválido")
    }
    // apos salvar o filme, esse comando limpa o input 
    document.getElementById("filme").value = "";
    document.getElementById("titulo__filme").value = "";
}
        // dentro do parenteses, pode ser qualquer nome, desde que tudo o que estiver sendo executado dentro da função com ele, referencie à variável que estamos recebendo
function listarFilmesNaTela (imagem, titulo) {
    // variavel para pegar o que estiver escrito no input e colocar na biblioteca
    var elementoFilmeFavorito = "<section class = 'filmes'><img src=" + imagem + ">" + "<h2 class = 'page-subtitle'>" + titulo + "</h2></section>";

    // variavel para guardar a div com id listaFilmes
    var elementoListaFilmes = document.getElementById("listaFilmes");

    // jogando o filme desejado dentro da div lista filme, já como img e sem sobrescrever o filme colocado anteriormente
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito; 
}
