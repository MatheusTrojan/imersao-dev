function adicionarFilme() {
    // variavel para pegar o value do input com id "filme"
    var tituloFilme = document.getElementById("titulo__filme").value;
    var posterFilme = document.getElementById("poster__filme").value;

    // verificação de se o link inserido termina com .jpg .png ou .jpeg
        if (posterFilme.endsWith(".jpg") || posterFilme.endsWith(".png") || posterFilme.endsWith(".jpeg")) {
            listarFilmesNaTela(posterFilme, tituloFilme);
            alert("Filme adicionado com sucesso!")
        } else {
            console.error("Endereço de filme inválido")
        } 

    // apos salvar o filme, esse comando limpa o input
    document.getElementById("titulo__filme").value = ""; 
    document.getElementById("poster__filme").value = "";

}
        // dentro do parenteses, pode ser qualquer nome, desde que tudo o que estiver sendo executado dentro da função com ele, referencie à variável que estamos recebendo
function listarFilmesNaTela (imagem, titulo) {
    // variavel para pegar o que estiver escrito no input e colocar na biblioteca
    var elementoFilmeFavorito = "<li class = 'filmes'><img src=" + imagem + ">" + "<h2 class = 'page-subtitle'>" + titulo + "</h2></li>";

    // variavel para guardar a lista (ul) com id listaFilmes
    var elementoListaFilmes = document.getElementById("listaFilmes");

    // jogando o filme desejado dentro da ul listaFilmes, já com li > img e h2 < sem sobrescrever o filme colocado anteriormente
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito; 
}
