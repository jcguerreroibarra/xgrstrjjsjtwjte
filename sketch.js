

function preload(){
  seaImg=loadimage("sea.img");
  shipimg1= loadAnimation(ship1.png,ship2.png,ship3.png,ship4.png);
  
}

function setup(){
  createCanvas(400,400);
  spriteName.addimage(seaImg);
}

function draw() {
  background("blue");
  if(sea.x <0){
    sea.x=sea.width/2
   }
}