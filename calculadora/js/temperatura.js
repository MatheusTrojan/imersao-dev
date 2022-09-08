function ConverterF() {
    var valorElemento = document.getElementById("valor__celsius");
    var tempC = valorElemento.value;
    var valorEmNumerico = parseFloat(tempC);

    var tempF = (valorEmNumerico * 9 / 5) + 32 

    var elementoValorConvertido = document.getElementById("valorConvertido__faren");
    var valorConvertido = (tempC + " graus celsius convertido para Farenheit é igual a " + tempF + "F");
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterK() {
    var valorElemento = document.getElementById("valor__celsius2");
    var tempC = valorElemento.value;
    var valorEmNumerico = parseFloat(tempC);
    
    var tempK = valorEmNumerico + 273.15;

    var elementoValorConvertido = document.getElementById("valorConvertido__kelvin");
    var valorConvertido = (tempC + " graus celsius convertido para Kelvin é igual a " + tempK + "K");
    elementoValorConvertido.innerHTML = valorConvertido;
}
