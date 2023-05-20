//VAriables Globales
var fondo, fondoImagen;
var opbstaculo, obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5
var grupoDeObstaculosSuperior, grupoDeObstaculosInferior
var piso;
var globo, globoAnimacion
var edges;


// Estados del juego      

function preload(){

//carga imagen  de fondo 
fondoImagen = loadImage("./assets/bg.png");
obstaculo1 = loadImage("./assets/obsTop1.png");
obstaculo2 = loadImage("./assets/obsTop2.png");
obstaculo3 = loadImage("./assets/obsBottom1.png");
obstaculo4 = loadImage("./assets/obsBottom2.png");
obstaculo5 = loadImage("./assets/obsBottom3.png");
globoAnimacion = loadAnimation("./assets/balloon1.png","./assets/balloon2.png","./assets/balloon3.png");

//carga animacion  
//cargar imagen obstaculos

//carga imagenes de game over y restart



}

function setup(){

  createCanvas(750,540)
  edges=createEdgeSprites();
// Imagen de fondo
fondo = createSprite(200,200,400,400);
fondo.addImage(fondoImagen);
fondo.scale = 0.9

piso = createSprite(0,518,1500,20);
piso.velocityX = -2;
piso.x=width/4;
// Creando los terrenos inferior y superior



      
// Creando el globo
globo=createSprite(60,250);
globo.addAnimation("jugador", globoAnimacion);
globo.scale=0.3;

// Inicializando los grupos
grupoDeObstaculosSuperior = new Group();
grupoDeObstaculosInferior = new Group();

// Creando los sprites de fin del juego y reiniciar

}

function draw() {
  
  background("blue");  
  
  //globo.bounceOff(edges);

// Hacer que el globo aerostático salte
// Agregando graveda
// Generando obstáculos inferiores y superiores
  spawnObstaclesTop();
  spawnObstaclesBottom();
//condition for END state
if (keyDown("up")){
  globo.velocityY=-1
}
var posicion=globo.velocitiY
console.log(posicion);
//gravedad
globo.velocityY=globo.velocitiY+0.5;
if (piso.x=0){
  piso.x = piso.width/4;
}

  drawSprites()
}

function reset()
{
  //reinicia a Play  la varible GameOver

  //ocultar sprites

  //destruye grupos 

}


function spawnObstaclesTop() 
{
  if(frameCount % 90 == 0){
  obstaculo = createSprite(650, 100, 30, 25);
  

  
// Posiciones "y" aleatorias para los obstaculos superiores

// Generando obstáculos superiores aleatorios 
var posiciony=Math.round(random(10,150));
obstaculo.y=posiciony;
var rambo = Math.round(random(1, 2));
//console.log(rambo);
//estructura switch: sirve para evaluar diferentes opciones o diferantes casos 
switch(rambo){
  case 1:obstaculo.addImage(obstaculo1);
    break;
    case 2:
      case 2:obstaculo.addImage(obstaculo2);
      break;
default: break;
}
obstaculo.scale = 0.1
obstaculo.velocityX = -3
 // Asignando lifetime a la variables 
 obstaculo.lifeTime=100
 //formula de tiempo de vida el canvas/velocidad
 grupoDeObstaculosSuperior.add(obstaculo);

}// cierre del if
}

function spawnObstaclesBottom()
{
   // Generar obstáculos inferiores aleatorios 
if(frameCount % 99 == 0){
 var obstaculoInferior=createSprite (650, 420)
 var num = Math.round(random(1, 3));
 //console.log(num);
 switch(num){
  case 1:obstaculoInferior.addImage(obstaculo3);
  break;
  case 2:obstaculoInferior.addImage(obstaculo4);
  break;
  case 3: obstaculoInferior.addImage(obstaculo5);
  break;
  default: break;
 }
 obstaculoInferior.scale = 0.1;
 obstaculoInferior.velocityX =-2;
 obstaculoInferior.lifeTime = 100
 grupoDeObstaculosInferior.add(obstaculoInferior);

}
     // Asignar lifetime a la variable
}
