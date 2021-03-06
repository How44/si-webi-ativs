function execQuestao1() {
    function MAIOR_MENOR(a, b, c, d, e) {
        var integers = [a, b, c, d, e];
        integers.sort();
        alert("O menor: " + integers[0] + "\nO maior: " + integers[4]);
    }

    MAIOR_MENOR(
        document.getElementById('int1').value,
        document.getElementById('int2').value,
        document.getElementById('int3').value,
        document.getElementById('int4').value,
        document.getElementById('int5').value
    );
}

function execQuestao2() {
    function VOGAL(c) {
        return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') ? 1 : 0;
    }

    alert(VOGAL(document.getElementById('char1').value));
}

function execQuestao3() {
    function LIMITES(li, ls) {
        if (li % 2 == 0)
            li += 2;
        else
            li += 1;

        var pares = [];
        var soma = 0;
        for (li; li < ls; li += 2) {
            pares.push(li);
            soma += li;
        }

        return {
            paresDoIntervalo: pares,
            somaDosPares: soma
        };
    }

    saida = LIMITES(
        parseInt(document.getElementById('limite1').value),
        parseInt(document.getElementById('limite2').value)
    );
    alert('Intervalo: ' + saida.paresDoIntervalo + '\nSoma: ' + saida.somaDosPares);
}

function execQuestao4() {
    function ORDEM(a, b, c) {
        elementos = [a, b, c];
        elementos.sort();
        return elementos;
    }

    alert(ORDEM(
        document.getElementById('para').value,
        document.getElementById('parb').value,
        document.getElementById('parc').value
    ));
}

function execQuestao5() {
    function POSITIVO_NEGATIVO(x) {
        return x >= 0;
    }

    alert(POSITIVO_NEGATIVO(document.getElementById('xmaiormenor').value));
}

function execQuestao6() {
    function PAR_IMPAR(x) {
        return x % 2 == 0;
    }

    alert(PAR_IMPAR(document.getElementById('xparimpar').value));
}