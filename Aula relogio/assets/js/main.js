function relogio() {
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

  let segundos = 0
  let timer

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++
      relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
  }
  //Pegando todos os eventos de click e seus locais de ação.
  document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('zerar')) {
      relogio.classList.remove('pausado')
      clearInterval(timer)
      relogio.innerHTML = '00:00:00'
      segundos = 0
    }
    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado')
      clearInterval(timer)
      iniciaRelogio()
    }
    if (el.classList.contains('pausar')) {
      relogio.classList.add('pausado')
      clearInterval(timer)
    }
  })
}

relogio()
