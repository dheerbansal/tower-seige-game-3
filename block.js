class Block{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.4
        
        }
        
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.Visibility = 400
        //this.image = loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
        
        if(this.body.speed>3){
            World.remove(world,this.body)
            push();
            this.Visibility = this.Visibility -5
          //  tint(250)
           
            pop();

           // image(this.image,this.body.position.x,this.body.position.y,50,50);
        }
         else{var pos =this.body.position;
            
            push();
            translate(pos.x, pos.y);
            rectMode(CENTER);
            fill("red ");
           rect(0, 0, this.width, this.height);
           // image(this.image,0,0,this.width, this.height)
            pop();
         }
         } 

          Score(){
              if(this.Visibility <0 && this.Visibility >-105){
                  score = score +1
              }

         }
        
    
}

