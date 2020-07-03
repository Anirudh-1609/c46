class Villian  extends BaseClass {
  constructor(x, y){
    super(x,y,70,250);
    this.image = loadImage("sprites/veno1.png");
    this.Visiblity = 255;
  }

 display(){
   console.log(this.body.speed);
   if(this.body.speed <13){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 250);
     pop();
   }
   
 }

score(){
  if(this.Visiblity<255 && this.Visiblity>-1000){
    score++;
  }
}

};