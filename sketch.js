var count = 0;
var change = true;
var a = 0;
var pic;
function preload(){
  pic = loadImage("cat.png");
}

function setup() {
  createCanvas(400, 400);
  background(220);

  
}

function draw() {
  //angleMode(DEGREES)
  /*
  translate(200,200);
  image(pic, 0,0,200,200);
  rotate(-50);
  */
  
  
  translate(200,200);

  imageMode(CENTER);
  if(count > 100){
    
    a += 0.1;
    rotate(a);
  }else{
    a += -0.1;
    rotate(a);
  }
  
  

  
  background(220);
  image(pic, 0,0,200,200);
    

  
  count = count + 1;
  print(count);
  /*
  if(count % 100 == 0){
    count = 0;
  }*/
  
  rotate(-70);
  
}


  