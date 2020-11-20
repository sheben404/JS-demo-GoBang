const chess = document.getElementById('chess')
const context = chess.getContext('2d')
let me = true
let chessBoard = []

for(let i = 0;i<15;i++){
  chessBoard[i] = []
  for(let j = 0;j<15;j++){
    chessBoard[i][j] = 0
  }
}

context.strokeStyle = '#BFBFBF'

const logo = new Image()
logo.src = './images/logo.png'
logo.onload = function (){
  context.drawImage(logo,0,0,450,450)
  drawChessBoard()
}


function drawChessBoard(){
  for(let i= 0; i < 15; i++){
    context.moveTo(15 + i*30,15)
    context.lineTo(15 + i*30,435)
    context.stroke()
    context.moveTo(15 ,15+ i*30)
    context.lineTo(435,15+ i*30)
    context.stroke()
  }
}

const oneStep = function (i,j,me){
  context.beginPath()
  context.arc(15 + i*30,15+j*30,13,0,2*Math.PI)
  context.closePath()
  const gradient = context.createRadialGradient(15 + i*30, 15 + j*30-2, 13,15 + i*30+2, 15 + j*30-2,0)
  if(me){
    gradient.addColorStop(0,"#0A0A0A")
    gradient.addColorStop(1,"#636766")
  }else{
    gradient.addColorStop(0,"#D1D1D1")
    gradient.addColorStop(1,"#F9F9F9")
  }
  context.fillStyle = gradient
  context.fill()
}

chess.onclick = function (e){
  const x = e.offsetX
  const y = e.offsetY
  const i = Math.floor(x/30)
  const j = Math.floor(y/30)
  if(chessBoard[i][j] === 0){
    chessBoard[i][j] = 1
    oneStep(i,j,me)
    me = !me
  }

}