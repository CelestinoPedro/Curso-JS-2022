function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000) // Este local não recebe segundo, e sim milesegundos
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  })
}

console.log(criaHoraDosSegundos(10))

// Criando as variaveis e capturando status HTML
const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0
let timer

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++
    relogio.innerHTML = criaHoraDosSegundos(segundos)
  }, 1000)
}

//Pegando eventos de click no HTML
iniciar.addEventListener('click', function (e) {
  relogio.classList.remove('pausado')
  clearInterval(timer)
  console.log('Cliquei no iniciar')
  iniciaRelogio()
})
pausar.addEventListener('click', function (e) {
  relogio.classList.add('pausado')
  console.log('Cliquei no pausar')
  clearInterval(timer)
})
zerar.addEventListener('click', function (e) {
  console.log('Cliquei no zerar')
  clearInterval(timer)
  relogio.innerHTML = '00:00:00'
  segundos = 0
})
