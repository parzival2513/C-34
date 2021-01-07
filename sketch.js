function setup(){

 createCanvas(400,400);
box = createSprite(200,200,20,20);


}

function draw(){
background("black");
drawSprites();
if(keyDown("UP_ARROW")){
    changePosition(0,-1)
}
else if (keyDown("DOWN_ARROW")){
    changePosition(0,1)}

else if (keyDown("LEFT_ARROW")){
    changePosition(-1,0)
}
else if (keyDown("RIGHT_ARROW")){
    changePosition(1,0)
}
}

function changePosition(x,y){

    box.x = box.x+x;
    box.y = box.y+y;


}


