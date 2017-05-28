// forms.js

var botaoAdicionar = document.querySelector("#adicionar");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var aluno = obtemAlunoDoFormulario(form);

    var erros = validaAluno(aluno);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaAlunoNaTabela(aluno);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaAlunoNaTabela(aluno){
    var alunoTr = montaTr(aluno);
    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
}

function obtemAlunoDoFormulario(form) {
    var aluno = {
        nome: form.nome.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value,
        nota3: form.nota3.value,
        media: calculaMedia(form.nota1.value, form.nota2.value, form.nota3.value)
    }
    return aluno;
}

function montaTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.nota1, "info-nota1"));
    alunoTr.appendChild(montaTd(aluno.nota2, "info-nota2"));
    alunoTr.appendChild(montaTd(aluno.nota3, "info-nota3"));
    alunoTr.appendChild(montaTd(aluno.media, "info-media"));

    return alunoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaAluno(aluno) {

    var erros = [];

    if (aluno.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (aluno.nota1.length == 0) {
        erros.push("A primeira nota não pode ser em branco");
    }

    if (aluno.nota2.length == 0) {
        erros.push("A segunda nota não pode ser em branco");
    }

    if (aluno.nota3.length == 0) {
        erros.push("A terceira nota não pode ser em branco");
    }

    if (!validaNota(aluno.nota1)) {
        erros.push("Primeira nota é inválida");
    }

    if (!validaNota(aluno.nota2)) {
        erros.push("Segunda nota é inválida");
    }

    if (!validaNota(aluno.nota3)) {
        erros.push("Terceira nota é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
