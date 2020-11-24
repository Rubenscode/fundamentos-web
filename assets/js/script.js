let nome = window.document.getElementById('nome')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {

   let txtNome = document.querySelector('#txtNome')
   if (nome.value.length < 3 && nome.value.length > 100) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red' 
   } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
   }

}

function validaAssunto() {
   let txtAssunto = document.querySelector('#txtAssunto')

   if (assunto.value.length >= 100) {
      txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
      txtAssunto.style.color = 'red'
      txtAssunto.style.display = 'block'
   } else {
      txtAssunto.style.display = 'none'
      assuntoOk = true
   }
}

function enviar() {
   if (nomeOk == true && assuntoOk == true) {
      alert ('Formulário enviado com sucesso!')
   } else {
      alert ('Preencha os campos obrigatórios * do formulário corretamente antes de enviar...')
   }
}

function mapaZoom() {
   mapa.style.width = '800px'
   mapa.style.height = '600px'
}

function mapaNormal() {
   mapa.style.width = '400px'
   mapa.style.height = '250px'
}