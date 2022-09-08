function ConverterDolar() {
    var valorElemento = document.getElementById("valor__real");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);

    var valorEmDolar = valorEmRealNumerico / 5.23;

    var elementoValorConvertido = document.getElementById("valorConvertido__dolar");
    var valorConvertido = ("R$" + valorEmRealNumerico + " equivalem a U$" + valorEmDolar.toFixed(1));
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
    var valorElemento = document.getElementById("valor__real2");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);

    var valorEmDolar = valorEmRealNumerico / 5.20;

    var elementoValorConvertido = document.getElementById("valorConvertido__euro");
    var valorConvertido = ("R$" + valorEmRealNumerico + " equivalem a €" + valorEmDolar.toFixed(2));
    elementoValorConvertido.innerHTML = valorConvertido;
}