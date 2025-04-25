const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba");
const contadores = document.querySelectorAll(".contador");

// Datas futuras das metas
const tempoObjetivo1 = new Date("2025-12-31T23:59:59");
const tempoObjetivo2 = new Date("2025-06-30T23:59:59");
const tempoObjetivo3 = new Date("2025-09-01T00:00:00");
const tempoObjetivo4 = new Date("2025-11-15T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // Remove a classe 'ativo' de todos os botões
    botoes.forEach(botao => botao.classList.remove("ativo"));
    // Adiciona a classe no botão clicado
    botao.classList.add("ativo");

    // Troca as abas
    abas.forEach(aba => aba.classList.remove("ativa"));
    abas[indice].classList.add("ativa");
  });
});

// Atualiza os contadores a cada segundo
function atualizarContadores() {
  const agora = new Date();

  contadores.forEach((contador, indice) => {
    const tempoFinal = tempos[indice];
    const tempoRestante = tempoFinal - agora;

    if (tempoRestante > 0) {
      const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((tempoRestante / (1000 * 60)) % 60);
      const segundos = Math.floor((tempoRestante / 1000) % 60);

      contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    } else {
      contador.innerHTML = "Meta encerrada!";
    }
  });
}

atualizarContadores();
setInterval(atualizarContadores, 1000);
