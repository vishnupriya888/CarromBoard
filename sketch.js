var pushStrength = 0;
//score
var score = 0;
var canFire = true;
var board;
var borders;
var wood1,wood2,wood3,wood4;
var arrow;
var striker;
var token1,token2,token3,token4,token5;
function preload(){
  board_img = loadImage("images/board.png");
  red_img = loadImage("images/red.png");
  yellow_img = loadImage("images/yellow.png");
  striker_img = loadImage("images/striker.png");
  arrow_img = loadAnimation("images/arrow1.png", "images/arrow2.png", "images/arrow3.png");
}

function setup(){
createCanvas(400,400);

//border of the board
borders = createGroup();
wood1 = createSprite(200, 0, 400, 52);
wood1.shapeColor = ("#6F4D31");
borders.add(wood1);
wood2 = createSprite(0, 200, 52, 400);
wood2.shapeColor = ("#6F4D31");
borders.add(wood2);
wood4 = createSprite(400, 200, 52, 400);
wood4.shapeColor = ("#6F4D31");
borders.add(wood4);
wood3 = createSprite(200, 400, 400, 52);
wood3.shapeColor = ("#6F4D31");
borders.add(wood3);
borders.bounciness = 0.5;

//create the aiming arrow
arrow = createSprite(200, 250);
arrow.addAnimation("Arrow",arrow_img);
arrow.visible = false;
arrow.scale = 0.4;
arrow.rotateToDirection = true;
arrow.pause();


//create the striker
striker = createSprite(200, 310);
striker.addImage("Striker",striker_img);
striker.scale = 0.15;
striker.rotation = 270;
striker.setCollider("circle", 0, 0, 110);


//create the tokens
token1 = createSprite(200, 200);
token1.addImage("YellowToken",yellow_img);
token1.scale = 0.15;
token1.setCollider("circle", 0, 0, 80);
token2 = createSprite(240, 200);
token2.addImage("RedToken",red_img);
token2.scale = 0.15;
token2.setCollider("circle", 0, 0, 80);
token3 = createSprite(160, 200);
token3.addImage("RedToken",red_img);
token3.scale = 0.15;
token3.setCollider("circle", 0, 0, 80);
token4 = createSprite(200, 240);
token4.addImage("RedToken",red_img);
token4.scale = 0.15;
token4.setCollider("circle", 0, 0, 80);
token5 = createSprite(200, 160);
token5.addImage("RedToken",red_img);
token5.scale = 0.15;
token5.setCollider("circle", 0, 0, 80);
}
//wall bouncing
function draw() {
  //create the background
  background(board_img);

  //bounce physics
  striker.bounceOff(borders);


  token1.bounceOff(borders);
  token2.bounceOff(borders);
  token3.bounceOff(borders);
  token4.bounceOff(borders);
  token5.bounceOff(borders);

  striker.bounce(token1);
  striker.bounce(token2);
  striker.bounce(token3);
  striker.bounce(token4);
  striker.bounce(token5);

  token1.bounce(token2);
  token1.bounce(token3);
  token1.bounce(token4);
  token1.bounce(token5);

  token2.bounce(token3);
  token2.bounce(token4);
  token2.bounce(token5);

  token3.bounce(token4);
  token3.bounce(token5);

  token4.bounce(token5);

  //add sprites and edges
  drawSprites();
  createEdgeSprites();
  if (keyWentUp("up")) {
    striker.addSpeed(pushStrength, striker.rotation);
    canFire = false;
  }

  //reset the canFire variable
  if (striker.getSpeed() < 0.2) {
    canFire = true;
  }

  //knock 'em in
  if (token1.x > 50 && token1.x < 70 && token1.y > 50 && token1.y < 70) {
    token1.x = -100;
    score++;
  }
  if (token1.x > 330 && token1.x < 350 && token1.y > 50 && token1.y < 70) {
    token1.x = -100;
    score++;
  }
  if (token1.x > 50 && token1.x < 70 && token1.y > 330 && token1.y < 350) {
    token1.x = -100;
    score++;
  }
  if (token1.x > 330 && token1.x < 350 && token1.y > 330 && token1.y < 350) {
    token1.x = -100;
    score++;
  }
  if (token2.x > 50 && token2.x < 70 && token2.y > 50 && token2.y < 70) {
    token2.x = -100;
    score++;
  }
  if (token2.x > 330 && token2.x < 350 && token2.y > 50 && token2.y < 70) {
    token2.x = -100;
    score++;
  }
  if (token2.x > 50 && token2.x < 70 && token2.y > 330 && token2.y < 350) {
    token2.x = -100;
    score++;
  }
  if (token2.x > 330 && token2.x < 350 && token2.y > 330 && token2.y < 350) {
    token2.x = -100;
    score++;
  }
  if (token3.x > 50 && token3.x < 70 && token3.y > 50 && token3.y < 70) {
    token3.x = -100;
    score++;
  }
  if (token3.x > 330 && token3.x < 350 && token3.y > 50 && token3.y < 70) {
    token3.x = -100;
    score++;
  }
  if (token3.x > 50 && token3.x < 70 && token3.y > 330 && token3.y < 350) {
    token3.x = -100;
    score++;
  }
  if (token3.x > 330 && token3.x < 350 && token3.y > 330 && token3.y < 350) {
    token3.x = -100;
    score++;
  }
  if (token4.x > 50 && token4.x < 70 && token4.y > 50 && token4.y < 70) {
    token4.x = -100;
    score++;
  }
  if (token4.x > 330 && token4.x < 350 && token4.y > 50 && token4.y < 70) {
    token4.x = -100;
    score++;
  }
  if (token4.x > 50 && token4.x < 70 && token4.y > 330 && token4.y < 350) {
    token4.x = -100;
    score++;
  }
  if (token4.x > 330 && token4.x < 350 && token4.y > 330 && token4.y < 350) {
    token4.x = -100;
    score++;
  }

  //slow the striker/tokens
  striker.setSpeedAndDirection(striker.getSpeed() * 0.97);
  token1.setSpeedAndDirection(token1.getSpeed() * 0.985);
  token2.setSpeedAndDirection(token2.getSpeed() * 0.985);
  token3.setSpeedAndDirection(token3.getSpeed() * 0.985);
  token4.setSpeedAndDirection(token4.getSpeed() * 0.985);
  token5.setSpeedAndDirection(token5.getSpeed() * 0.985);
  //aim & fire the striker
  if (keyDown(UP_ARROW) && canFire == true) {
    //displays the arrow
    arrow.visible = true;

    //increases how far & fast the striker flies
    pushStrength += 0.5;
    if (pushStrength > 10 && pushStrength < 14.9) {
      arrow.setFrame(1);
    } else if (pushStrength > 15 && pushStrength < 19.9) {
      arrow.setFrame(2);
    } else if (pushStrength >= 20) {
      pushStrength = 20;
      arrow.setFrame(2);
    } else {
      arrow.setFrame(0);
    }
  } else {
    arrow.visible = false;
    pushStrength = 0;
  }

  //help aim the striker
  if (keyDown(LEFT_ARROW) && canFire == true) {
    striker.rotation -= 5;
  } else if (keyDown("right") && canFire == true) {
    striker.rotation += 5;
  }

  //move arrow to the striker
  arrow.x = striker.x;
  arrow.y = striker.y;
  arrow.rotation = striker.rotation;

  //score
  fill(0, 0, 0);
  textSize(20);
  text("Score: " + score, 170, 20);
}
