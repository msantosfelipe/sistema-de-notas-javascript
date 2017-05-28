// acaoBotoes.js

document.addEventListener("click", function(event){
  if(event.target.classList.value == "botao bto-principal"){
    var botao = event.target;
    var areaAdicionar = document.querySelector("#areaAdiciona");
    var areaFiltro = document.querySelector("#areaFiltro");

    if(botao.id == "adicionar-aluno") {
      areaAdicionar.classList.remove("invisivel");
      areaFiltro.classList.add("invisivel");
      return;
    }

    if(botao.id == "filtrar-aluno") {
      areaAdicionar.classList.add("invisivel");
      areaFiltro.classList.remove("invisivel");
    }

    if(botao.id == "buscar-aluno") {
      areaAdicionar.classList.add("invisivel");
      areaFiltro.classList.add("invisivel");
    }
  }
});
