document.addEventListener("DOMContentLoaded", function () {
  const programacaoLink = document.querySelector(".programacao-link");
  const programacaoBox = document.querySelector(".programacao-box");
  const fecharProgramacao = document.querySelector(".fechar-programacao");

  programacaoLink.addEventListener("click", function (e) {
    e.preventDefault();
    programacaoBox.style.display = "block";
  });

  fecharProgramacao.addEventListener("click", function () {
    programacaoBox.style.display = "none";
  });
});
