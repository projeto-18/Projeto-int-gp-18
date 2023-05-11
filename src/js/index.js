function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username.trim() === '' || password.trim() === '') {
      alert("Por favor, preencha todos os campos!");
      return false;
  }
  return true;
}

/* =====================================================*/

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




  