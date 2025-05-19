const tempoObjetivo01 = new Date("2025-05-12T00:00:00");
const tempoObjetivo02 = new Date("2029-06-11T00:00:00");
const tempoObjetivo03 = new Date("2026-08-11T00:00:00");
const tempoObjetivo04 = new Date("2025-09-12T00:00:00");

const tempos = [tempoObjetivo01, tempoObjetivo02, tempoObjetivo03, tempoObjetivo04]

for (i = 0; i < contadores.length; i++) {
contadores[i].textContent = calculaTempo(tempos[i])
}

for (let i = 0; i < botoes.length; i++) {
botoes[i].onclick = function () {
for (let j = 0; j < botoes.length; j++) {
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
}
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
}
}
function calculaTempo(tempoObjetivo) {
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual

let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);

return dias + " Dias " + horas + " Horas " + minutos + " Minutos " + segundos + " Segundos "

}
function atualizaCronometro(){

    for(let i=0; i<contadores.length; i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0]
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1]
        document.getElementById("mins"+i).textContent = calculaTempo(tempos[i])[2]
        document.getElementById("segs"+i).textContent = calculaTempo(tempos[i])[3]
    }
}

