let altura;
let largura;
let vidas = 1;
let tempo = 30;
let timerCriaMosquito = 1500
let nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal') {
  timerCriaMosquito = 1500
} else if (nivel === 'dificil') {
  timerCriaMosquito = 1000
} else if(nivel === 'impossivel') {
  timerCriaMosquito = 750
}

function ajustaTamanhoJogo() {
altura =  window.innerHeight;
largura = window.innerWidth;
};

let cronometro = setInterval(function() {
  tempo -= 1
  if(tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
  } else {
  document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000) ;

ajustaTamanhoJogo()

    function posicaoRandomica() {

      if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if(vidas > 3) {
          window.location.href ='fimDeJogo.html'
        } else {
        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
        vidas ++
        }
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
    mosquito.onclick = function () {
      this.remove()
    }

    document.body.appendChild(mosquito)
}
posicaoRandomica()
let criaMosquito = setInterval(function () {
  posicaoRandomica()
}, timerCriaMosquito)
 
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

/*function iniciarJogo() {
  let nivel = document.getElementById('nivel').value

  if (nivel === '') {
    alert('Selecione a dificuldade do jogo')
    return false
  }
  window.location.href = "app.html"
}*/ 
