// buscar-alunos.js

var botaoBuscar = document.querySelector("#buscar-aluno");
botaoBuscar.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "");

  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax").classList.remove("invisivel");
    if(xhr.status == 200){
      var erroAjax = document.querySelector("#erro-ajax").classList.add("invisivel");
      var resposta = xhr.responseText;
      var alunos = JSON.parse(resposta);
      alunos.forEach(function(aluno){
        adicionaAlunoNaTabela(aluno);
      });
    }
  });
  xhr.send();
});
