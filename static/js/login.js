document.addEventListener("DOMContentLoaded", function () {
  const buttonNovamente = document.getElementById("tentar-novamente");
  const mensagemErro = document.getElementById("mensagem-erro");

  if (buttonNovamente && mensagemErro) {
    buttonNovamente.addEventListener("click", function () {
      console.log("Botão Tentar Novamente clicado.");

      mensagemErro.style.display = "none";
    });
  }
});
