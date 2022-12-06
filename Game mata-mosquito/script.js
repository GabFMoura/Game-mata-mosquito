let altura
let largura
function ajustaTamanhoJogo() {
altura =  window.innerHeight;
largura = window.innerWidth;
//console.log(altura,largura)
}
ajustaTamanhoJogo()

    function posicaoRandomica() {

      if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        }
        
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY< 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)

    //DOM
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'    
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    document.body.appendChild(mosquito)
}
posicaoRandomica()

setInterval(function () {
  posicaoRandomica()
}, 1000)
 
function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3)
  console.log(classe)
  if(classe = 0) {
    return 'mosquito1'
  } else if(classe = 1) {
return 'mosquito2'
  } else {
    return 'mosquito3'
  }
}

function ladoAleatorio() {
  let lado = Math.floor(Math.random() * 2) 
  console.log(lado)
  if (lado === 0) {
    return 'ladoA'
  }
   if (lado === 1) {
    return 'ladoB'
  }
}