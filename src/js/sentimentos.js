const textarea = document.getElementById("text");
const countdown = document.getElementById("countdown");
const maxLength = 250;

textarea.addEventListener("input", function() {
    const remaining = maxLength - textarea.value.length;

    if (remaining >= 0) {
        countdown.innerText = remaining;
    } else {
        textarea.value = textarea.value.slice(0, maxLength);
    }
});


function limpar() {
    document.getElementById("text").value = "";
  }


function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringTone.pause();
        content.classList.remove("disable");
        btnSetAlarm.innerHTML = "Ativar Alarme";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Insira horas e minutos válidos para ativar o alarme, por favor!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    btnSetAlarm.innerHTML = "Desativar Alarme";
}
btnSetAlarm.addEventListener("click", setAlarm);


const sentimentos = document.querySelector(".sentimentos");
imgContainer.addEventListener("mousedown", function() {
  this.classList.add("pressed");
});
imgContainer.addEventListener("mouseup", function() {
  this.classList.remove("pressed");
});

