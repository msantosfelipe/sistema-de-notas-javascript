// calcula-media.js

var titulo = document.querySelector(".titulo");
titulo.textContent = "Sistema de Notas";

var alunos = document.querySelectorAll(".aluno");

for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];

    var tdNota1 = aluno.querySelector(".info-nota1");
    var nota1 = tdNota1.textContent;

    var tdNota2 = aluno.querySelector(".info-nota2");
    var nota2 = tdNota2.textContent;

    var tdNota3 = aluno.querySelector(".info-nota3");
    var nota3 = tdNota3.textContent;

    var tdMedia = aluno.querySelector(".info-media");

    var nota1EhValida = validaNota(nota1);
    var nota2EhValida = validaNota(nota2);
    var nota3EhValida = validaNota(nota3);

    if (!nota1EhValida) {
        console.log("Primeiro Teste inválido!");
        nota1EhValida = false;
        tdMedia.textContent = "Primeiro Teste inválido";
        aluno.classList.add("aluno-invalido");
    }

    if (!nota2EhValida) {
        console.log("Segundo Teste inválido!");
        nota2EhValida = false;
        tdMedia.textContent = "Segundo Teste inválido";
        aluno.classList.add("aluno-invalido");
    }
    if (!nota3EhValida) {
        console.log("Prova inválida!");
        nota3EhValida = false;
        tdMedia.textContent = "Prova inválida";
        aluno.classList.add("aluno-invalido");
    }

    if (nota1EhValida && nota2EhValida && nota3EhValida) {
        var media = calculaMedia(nota1, nota2, nota3);
        tdMedia.textContent = media;
    }
}

function calculaMedia(nota1, nota2, nota3) {
    var media = 0;
    media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    console.log(parseInt(nota1) + parseInt(nota2) + parseInt(nota3));
    return media.toFixed(2);
}

function validaNota(nota) {
    if (nota >= 0 && nota <= 10) {
        return true;
    } else {
        return false;
    }
}
