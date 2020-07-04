function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
    imagemVida = loadImage('imagens/assets/heart.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON("fita/fita.json");
    

  musicGame = loadSound('sons/trilha_jogo.mp3');
  musicJump = loadSound('sons/somPulo.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial()
  jogo = new Jogo()
  cenas = {
    telaInicial,
    jogo
  }
  jogo.setup()
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2)

  frameRate(40)
  musicGame.loop();
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
  // if(cenaAtual === 'jogo') {
  //   jogo.draw()
  // }
  cenas[cenaAtual].draw()
}