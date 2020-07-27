// Creating variables for the planets
var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
// Creating variables to hold images of the planets
var sunImage,mercuryImage,venusImage,earthImage,marsImage,jupiterImage,saturnImage,uranusImage,neptuneImage;

var dis = 0;

function preload(){
  // Loading the images of the planets
  sunImage = loadImage("images/sun.png");
  mercuryImage = loadImage("images/mercury.png");
  venusImage = loadImage("images/venus.png");
  
}

function setup() {
  createCanvas(1500,500);
  // Creating the planets (as Sprites) 
  // Giving each planet their images
  sun = createSprite(0,200,50,50);
  sun.addImage(sunImage);
  sun.scale=0.2;
  mercury = createSprite(250,200,50,50);
  mercury.addImage(mercuryImage);
mercury.scale=0.5;
  venus = createSprite(400,200,50,50);
  venus.addImage(venusImage);
venus.scale=0.5;
  
}

function draw() {
  // To clear the background
  background(0);  
  // Destroying the planets with the function "Destroy"
  Destroy(mercury,sun);
  Destroy(venus,sun);
  
  // Making the sun grow
  if(frameCount % 20 === 0){
    sun.scale += 0.5;
    dis += 20 + 2;
  };
  
  // Drawing the sprites
  drawSprites();
}


