class box{
constructor(x,y,width,height){
    var option={isStatic:true}
this.lines=Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height=height;
World.add(world,this.lines);
    
}

display(){
    var pos=this.lines.position;
    rect(pos.x,pos.y,this.width,this.height);
    rectMode(CENTER)
}
}