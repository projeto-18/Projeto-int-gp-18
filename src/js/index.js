function mostrarSenha(){
  var inputPass = document.getElementById('password')
  var btnShowPass = document.getElementById('btn-senha')

  if(inputPass.type === 'password'){
    inputPass.setAttribute('type', 'text')
    btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
  } else {
        inputPass.setAttribute('type', 'password')
    btnShowPass.classList.replace( 'bi-eye-slash-fill','bi-eye-fill')
  }
}

/* =====================================================*/



/*
function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = '../../index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}
*/


/*if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "index.html";
  }*/
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    /*window.location.href = "../assets/page/login.html";*/
  }

  