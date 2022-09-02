var vidas = 1
var altura = 0
var largura = 0
var tempo = 30


function palco() {
    altura = window.innerHeight
    largura = window.innerWidth
}

palco()

var conometro = setInterval(function () {
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href="vitoria.html"
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

 function posicaoAleatoria() {

    //remove elemento
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            window.location.href="game_over.html"
        }else{
            document.getElementById('v' + vidas).src ="imagens/coracao_vazio.png"
            vidas ++
        }
    }
     var x = Math.floor(Math.random() * largura) - 90
     var y = Math.floor(Math.random() * altura) - 90
     x = x < 0 ? 0 : x
     y = y < 0 ? 0 : y
     
     // criar elemeto html
     var mosquito = document.createElement('img')
     mosquito.src = 'imagens/mosca.png'
     mosquito.className = mosquitoTamanhos() + ' ' + ladoAleatorio()
     mosquito.style.left = x + 'px'
     mosquito.style.top = y + 'px'
     mosquito.style.position = 'absolute'
     mosquito.id = 'mosquito'
     mosquito.onclick = function () {
         this.remove()
     }

     document.body.appendChild(mosquito)

 }

 function mosquitoTamanhos() {
     var classe = Math.floor(Math.random() * 3)

     switch (classe) {
         case 0:
             return 'mosquito1'
     
         case 1:
             return 'mosquito2'

         case 2:
             return 'mosquito3'
     }
     
     
 }

 function ladoAleatorio() {
     var classe = Math.floor(Math.random() * 2)

     switch (classe) {
         case 0:
             return 'ladoA'
     
         case 1:
             return 'ladoB'
     }
 }

