// JavaScript source code

function calcular() {

    var high = document.formulario.altura.value.replace(",",".");
    var peso = document.formulario.peso.value.replace(",",".").replace("kg".toLowerCase()," ");
    var op = document.formulario.sex.value;

    var imc = peso / (Math.pow(high, 2));

    if (op == "one") {
        if (imc < 20.00) {
            alert("IMC: " + imc.toFixed(2) + "\nAbaixo do peso");
        }
        else if (imc > 26.4) {
            alert("IMC: " + imc.toFixed(2) + "\nAcima do peso");
        }
        else {
            alert("IMC: " + imc.toFixed(2) + "\nPeso normal");
        }

    }
    else if (op =="two") {
        if (imc < 19.1) {
            alert("IMC: " + imc.toFixed(2) + "\nAbaixo do Peso");
        }
        else if (imc > 25.8) {
            alert("IMC: " + imc.toFixed(2) + "\nAcima do peso");
        }
        else {
            alert("IMC: " + imc.toFixed(2) + "\nPeso normal");
        }
    }
}
