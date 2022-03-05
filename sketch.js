    //Se definen las variables que alojaran a los objetos  
    var ghost, torre, puerta, climber;
    var ghostImg,torreImg, puertaImg, climberImg; 
  var puertaGrup, climberGrup;
  var invblokGrup, invblok;
  var gameState = "play"

    //Se llama a la funcion que pre-carga las imagenes en png
    function preload () {
      torreImg = loadImage ("tower.png");
      ghostImg = loadImage("ghost-standing.png");
      puertaImg = loadImage("door.png");
      climberImg = loadImage("climber.png");
      //Se define el grupo de imagenes que apareceran aleatoriamente en el lienzo de trabajo de las puertas
      puertaGrup = new Group();
      climberGrup = new Group();
      invblokGrup = new Group();
      //Se define el grupo de imagenes que aparecera al par de las puertas
      

      //Se define las propiedades para todo el grupo de animaciones de los bloques invicibles que van apareciendo
      
    }

    //Se llama la funcion para asignar propiedades
    function setup () {
      //Se crea el lienzo de trabajo
      createCanvas (600,600);
      //Se agrega la musica del juego
     
      //Se diseña el objeto de la torre
      torre = createSprite (300, 300);
      //Se carga la animacion de la torre con la funcion
      torre.addImage ("torre", torreImg);
      //Se define un dezplazamiento hacia abajo segun las perspectiva del lienzo
      torre.velocityY = 1;

      //Diseño del personaje ghost
      ghost = createSprite(300,300,20,20);
      ghost.addImage(ghostImg);
      ghost.scale = 0.3;
    }

    //Se llama ala funcion de dibujo 
    function draw () {
      //Se define el color del fondo
      background (0);

     //Incorporacion del estado de juego al movimiento de personaje ghost
      //Agregar jugabilidad con las teclas y la barra espaciadora
      if(keyDown("RIGHT")){
        ghost.x = ghost.x + 4;
      }
      if(keyDown("LEFT")){
        ghost.x = ghost.x + -4
      }
      if(keyDown("SPACE")){
        ghost.velocityY = -4;
      }
      //Agregar efecto de gravedad al saltar
      ghost.velocityY = ghost.velocityY + 0.5

          //Se condicion a un codigo para ciclar el desplazamiento de la animacion de la torre, cada vez que llege a la posicion y = 300, se regresa a la posicion mas y = 400
      if (torre.y > 400){
        torre.y = 300
      }
      if(climberGrup.isTouching(ghost)){
        ghost.velocityY = 0;
      }
      if(invblokGrup.isTouching(ghost)){
        ghost.destroy();
      }
      //Se agrega la funcion spawnPuertas (), para que el codigo las dibuje segun las propiedades definidas en el bloque de instrucciones de la funcion donde se diseño

          //Se establece una condicional para darle jugabilidad al ghost con las ventanas
     

      //Se define la condicional para finalizar el juego al momento de tocar la puerta pode debajo o si el personaje ghost sale del lienzo de trabajo
      spawnPuertas();

      //Se llama al comando para dibujar todos los objetos en el lienzo de trabajo
      drawSprites();
      //Se define el estado de juego end y los elementos que muestra
      
    }

  //Se crea la funcion que aloja a los objetos de las puertas, asi como las propiedades y funciones que deben de tener segun el diseño del juego
  function spawnPuertas () {

    //con la condicional de if condicionamos alojamos en le bloque de instrucciones el objeto y algunas propiedades, ademas la aparicion de los objetos se ejecuta con frameCount
   if(frameCount % 100 === 0 ){
     var puerta = createSprite(200,-50);
     puerta.addImage(puertaImg);
     puerta.velocityY = 3;
     puerta.x = Math.round(random(100,400));
     var climber = createSprite(200,10);
     climber.addImage(climberImg);
     climber.x = puerta.x;
     climber.velocityY = 3;
     var invblok = createSprite(200,13);
     invblok.width = climber.width;
     invblok.height = 1
     invblok.x = puerta.x;
     invblok.velocityY = 3;     
     puertaGrup.add(puerta);
     climberGrup.add(climber);
     invblokGrup.add(invblok);
     ghost.depth = puerta.depth;
     ghost.depth += 1    
   }
      //se aloja en una variable que esta dentro del if () el diseño del objeto
     
      //Se carga la imagen png. de la puerta
    

      //Se diseña el objeto que alojara las imagenes de los climber, es necesario alojarlas en la misma funcion que las puertas, debido a que estos objetos complementan la jugabilidad 
 
      //Se anima el objeto con la imagen correspondeinte en png
   

      //Dentro del bucle de aparicion de las animaciones se incorpora el bloque donde se posiciona el ghost por arriba del climber
      
      //Se determina el area donde pueden aparecer los objetos puerta en el lienzo de trabajo
     
      //Se defin ela velocidad del desplazamiento de la animacion que sea similar ala imagen principal
    

      //Se define posicion de los climber, deben ser las mismas que las puetas.x
  
      //Se define el desplazamiento de los climber como la imagen principal


      //Se define la posicion del bloque invisible que sea igual a la posocion de la puerta
  

      //Se define el tiempo de vida de los objetos puerta
   
      //Se indica que todas las propiedades y funciones se comportaran igual
  
      //Se incluye 
    

         //Agregar profundidad a la imagen del fantasma para que aparesca en la primera capa del diseño
    
    
  }
