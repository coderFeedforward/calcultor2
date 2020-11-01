var strr = "";
var step = 0;
var strs = [];
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(step == 0){
  text("what will be your topick sentence", 30,30);
  text(strr, 30,45);
  strs[0] = strr;
  }else if(step ==1){
    
    text("what is the backgrownd needed for your quote",30,30); 
    text(strr, 30,45);
  }else if(step == 2){
    text("what is the quote",30,30);
    text(strr, 30,45);
  }else if(step == 3){
    text("what does this mean for your thesis",30,30);
    text(strr, 30,45);
  }
  else if(step == 3){
    text("sume it up and lead into your next parigrph",30,30);
    text(strr, 30,45);
  }else{
    text("nice work!!!!!",30,30);
    text("nice work!!!!!",30,40);
    text("nice work!!!!!",30,50);
  }

  
  
}
function keyPressed(){
  if(keyCode == BACKSPACE){
    strr = strr.slice(0,-1);
    
  }else if(keyCode == ENTER){
    //do somthing
    whatToDo();
    
    //return strr;
    
    
  }else if(keyCode== SHIFT){
    
  }else {
    strr = strr + key;
    
  }
}
function whatToDo(){
  console.log(strr);
  step ++;
  strr = "";
}
