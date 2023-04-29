const cpf = document.querySelector("#cpf")

cpf.addEventListener("keyup", event => {
    let start = cpf.selectionStart //posição inicial do cursor
    let end = cpf.selectionEnd //posição final do cursor
    //se as posições iniciazl e final do cursor forem as mesma, isso significa que não há faixa de seleção
    if(start == end) { //esta condicional impede a função chamada quando o usuário faz uma seleção de faixa na entrada EX:. teclas (Ctrl + A)
        formMask("___.___.___-__", "_", event, start);
    }
})

function formMask(mask, char, event, cursor) {
    
    const vetMask = mask.split("") //transforme a máscara em vetor para usar funções específicas, como filter()
    const onlyNumbers = cpf.value.split("").filter(value => !isNaN(value) && value != " ")
    const key = event.keyCode || event.which
    const backspaceAndArrowKeys = [8, 37, 38, 39, 40] //código backspace e teclas de seta
    const clickedOnTheBackspaceOrArrowsKeys = backspaceAndArrowKeys.indexOf(key) >= 0
    const charNoMod = [".", "-"] //caracteres que não mudam
    const cursorIsCloseToCharNoMod = charNoMod.indexOf(vetMask[cursor]) >= 0

    onlyNumbers.forEach( (value) => vetMask.splice(vetMask.indexOf(char), 1, value)) //mude '#' para números

    cpf.value = vetMask.join("")

    if(!clickedOnTheBackspaceOrArrowsKeys && cursorIsCloseToCharNoMod) { //incrementar o cursor se estiver perto de caracteres que não mudam
        cpf.setSelectionRange(cursor+1, cursor+1)
    } else {
        cpf.setSelectionRange(cursor, cursor)
    }
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function mostrarSenhaCadastro(){
  var inputPass = document.getElementById('password')
  var btnShowPass = document.getElementById('btn-senhaCadaastro')

  if(inputPass.type === 'password'){
    inputPass.setAttribute('type', 'text')
    btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
  } else {
        inputPass.setAttribute('type', 'password')
    btnShowPass.classList.replace( 'bi-eye-slash-fill','bi-eye-fill')
  }
}

function mostrarSenhaConfirmaCadastro(){
  var inputPass = document.getElementById('confirm_password')
  var btnShowPass = document.getElementById('btn-senhaconfirmaCadaastro')

  if(inputPass.type === 'password'){
    inputPass.setAttribute('type', 'text')
    btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
  } else {
        inputPass.setAttribute('type', 'password')
    btnShowPass.classList.replace( 'bi-eye-slash-fill','bi-eye-fill')
  }
}
