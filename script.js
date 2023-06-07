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

  const contatoLink = document.querySelector(".contato-link");
  const contatoBox = document.querySelector(".contato-box");
  const fecharContato = document.querySelector(".fechar-contato");

  contatoLink.addEventListener("click", function (e) {
    e.preventDefault();
    contatoBox.style.display = "block";
  });

  fecharContato.addEventListener("click", function () {
    contatoBox.style.display = "none";
  });

  document
    .getElementById("form-contato")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio do formulário

      // Recupera os valores dos campos do formulário
      var nome = document.getElementById("nome").value;
      var email = document.getElementById("email").value;
      var mensagem = document.getElementById("mensagem").value;

      // Monta o corpo do e-mail
      var corpoEmail =
        "Nome: " + nome + "\nE-mail: " + email + "\nMensagem: " + mensagem;

      // Envia o e-mail utilizando o serviço do Gmail
      window.location.href =
        "mailto:shanakeelly@gmail.com?subject=Mensagem do formulário de contato&body=" +
        encodeURIComponent(corpoEmail);

      // Limpa os campos do formulário após o envio
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mensagem").value = "";

      // Fecha a caixa de contato após o envio
      contatoBox.style.display = "none";
    });
});
