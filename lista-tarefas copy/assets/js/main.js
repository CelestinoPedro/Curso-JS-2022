const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

//Capturando evento do botão.

btnTarefa.addEventListener('click', function(e){
  console.log(inputTarefa.value)
});