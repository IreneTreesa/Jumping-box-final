var canvas, music;
var block1, block2, block3, block4, boxSprite;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1= createSprite(0,580,360,30);
    block1.shapeColor="blue";

    block2= createSprite(295,580,200,30);
    block2.shapeColor="green";

    block3= createSprite(515,580,200,30);
    block3.shapeColor="yellow";

    block4= createSprite(740,580,220,30);
    block4.shapeColor="red";

    boxSprite= createSprite(random(20,750),100, 40,40);
    boxSprite.shapeColor="white";
    boxSprite.velocityX= 4;
    boxSprite.velocityY= 9;
    

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    boxSprite.bounceOff(edges);

    if(block1.isTouching(boxSprite)&& boxSprite.bounceOff(block1)){
        boxSprite.shapeColor="blue";
        music.play();
    }

    if(block2.isTouching(boxSprite)&& boxSprite.bounceOff(block2)){
        boxSprite.shapeColor="green";
    }

    if(block3.isTouching(boxSprite)){
        boxSprite.shapeColor="yellow";
        boxSprite.velocityX=0;
        boxSprite.velocityY=0;
        music.stop();
    }

    if(block4.isTouching(boxSprite)&& boxSprite.bounceOff(block4)){
        boxSprite.shapeColor="red";
    }

    drawSprites();
    
}
