function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);

  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);

  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15, 100)

  inimigos.push(inimigo);
  inimigos.push(inimigoVoador);
  inimigos.push(inimigoGrande);

  jogo = new Jogo();
  telaInicial = new TelaInicial();

  cenas = {
    jogo,
    telaInicial
  };

  botaoGerenciador = new BotaoGerenciador('Iniciar',width / 2, height / 2);
  frameRate(40);
  musicGame.loop();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}