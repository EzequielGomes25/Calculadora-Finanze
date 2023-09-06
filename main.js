function Ativo() {
    var input = document.getElementById("Ativo");    
}

function Valor() {
    var input = document.getElementById("Valor");    
}

function Quantia() {
    var input = document.getElementById("Quantia");    
}

var Valor= Valor.float;
var Quantia= Quantia.float;
var totalgasto= Valor * Quantia

function getAtivo() {
    var input = document.getElementById("Ativo");
    var Ativo = input.value.toUpperCase(); // Converte para maiúsculas
    return Ativo;
}

function calcularMedia() {
    var Ativo = getAtivo();
    var valor = parseFloat(document.getElementById("Valor").value);
    var quantia = parseFloat(document.getElementById("Quantia").value);
    var resultadoElement = document.getElementById("resultado");

    if (!isNaN(valor) && !isNaN(quantia) && quantia !== 0) {
        var media = valor / quantia;
        media = media.toFixed(2);
        resultadoElement.textContent = "Seu preço medio em " + Ativo + "  é R$" + media;
    } else {
        resultadoElement.textContent = "Insira valores válidos para Valor e Quantia";
    }
}




