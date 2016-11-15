var popups = [];
var counter = 0;


  function setup() {
  createCanvas(windowWidth,windowHeight);
  for(var x = 0; x < 10;x++){
  var popup = {
    isOpen: true,
    x: random(windowWidth-20),
    y: random(windowHeight-20),
    size: random(100) + 150,
    txt: "My hot take on this election, MUST READ!!!!!",
    render: function(){
      push();
      fill(random(40)+200,random(40)+200,random(40)+200);
      stroke(100);
      strokeWeight(2);
      rect(this.x,this.y, this.size,this.size,4);
      rect(this.x, this.y,this.size,15,4,4,0,0);
      ellipse(this.x+10,this.y+8,5,5);
      ellipse(this.x+20,this.y+8,5,5);
      ellipse(this.x+30,this.y+8,5,5);
      noStroke();
      fill(100);
      textSize(16);
      textStyle(BOLD);
      text(this.txt,this.x + 10, this.y + 25, this.size-20,this.size/2);
      for(var i = 1;i <= 4;i++){
        rect(this.x+10,this.y+this.size/2+15*i,this.size-50 + random(30),8);
      }
      pop();
    }
  };
  popups[x] = (popup);
}
}

function draw() {
  counter++;
  for(var y = 0; y < popups.length;y++){
      popups[y].render();
  }
  if(counter % 20 == 0){
    for(var y = 0; y < popups.length;y++){
      popups[y].x = random(windowWidth);
      popups[y].y = random(windowHeight);
  }
  }
}