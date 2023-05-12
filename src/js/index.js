if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página, caso ainda não seja cadastrado clique em CADASTRE-SE!");
    window.location.href = "./html/signin.html";
  }
 
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./html/signin.html";
  }