function salvar(){
    let des = document.getElementById('des')
    let hora = new Date()
    let temp = hora.getHours()

    if (temp == des.value){
        window.alert('Hora de acordar')
    }
}