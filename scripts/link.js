const  openInNewTab = () =>  {
  var win = window.open("https://github.com/danismartins19", '_blank');
  win.focus();
}

var btnGithub = document.querySelector(".conteudo-principal-escrito-botao");

btnGithub.addEventListener('click', openInNewTab);