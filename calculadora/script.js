function somar() {
    var t1 = parseFloat(document.getElementById("n1").value);
    var t2 = parseFloat(document.getElementById("n2").value);
    var res = document.getElementById("res");

    if (isNaN(t1) || isNaN(t2)) {
        res.innerHTML = "Por favor, preencha ambos os campos com números.";
    } else {
        var n1 = Number(t1);
        var n2 = Number(t2);
        var soma = n1 + n2;
        res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>.`;
    }
}

function subtrair() {
    var t1 = parseFloat(document.getElementById("n1").value);
    var t2 = parseFloat(document.getElementById("n2").value);
    var res = document.getElementById("res");

    if (isNaN(t1) || isNaN(t2)) {
        res.innerHTML = "Por favor, preencha ambos os campos com números.";
    } else {
        var n1 = Number(t1);
        var n2 = Number(t2);
        var sub = n1 - n2;
        res.innerHTML = `A subtração entre ${n1} e ${n2} é igual a <strong>${sub}</strong>.`;
    }
}

function multiplicar() {
    var t1 = parseFloat(document.getElementById("n1").value);
    var t2 = parseFloat(document.getElementById("n2").value);
    var res = document.getElementById("res");

    if (isNaN(t1) || isNaN(t2)) {
        res.innerHTML = "Por favor, preencha ambos os campos com números.";
    } else {
        var n1 = Number(t1);
        var n2 = Number(t2);
        var mul = n1 * n2;
        res.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a <strong>${mul}</strong>.`;
    }
}

function dividir() {
    var t1 = parseFloat(document.getElementById("n1").value);
    var t2 = parseFloat(document.getElementById("n2").value);
    var res = document.getElementById("res");

    if (isNaN(t1) || isNaN(t2)) {
        res.innerHTML = "Por favor, preencha ambos os campos com números.";
    } else if (t2 === 0) {
        res.innerHTML = "Não é possível dividir por 0.";
    } else {
        var n1 = Number(t1);
        var n2 = Number(t2);
        var div = n1 / n2;
        var divInt = Math.floor(div);
        var resto = n1 % n2;
        res.innerHTML = `A divisão entre ${n1} e ${n2} é igual a <strong>${divInt}</strong>, e o resto da divisão é igual a <strong>${resto}</strong>.`;
    }
}
