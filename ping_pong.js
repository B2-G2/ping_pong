//Brandon Grenon
//2231131 
//Pascal Huynh
//Web and FX: from Theory to Practice
//Ping pong
//https://openprocessing.org/sketch/1889298

//player on the left uses w and s keys to move up and down and player on the right uses the arrow keys.
// same concept as ping pong or the game pong from the 70s, once a player reaches 10 points, the game is over!
//Mouse click to restart!

//The reason I decided to do this game is because this games brings me memories. 
//Playing with my family and recently on the atari anniversary that came out out on ps5.
//My main goal was to create something fun to play and not too complicated since I am not a fan of coding.
//When it comes to the meaning, it was more for me than anything else honestly, but hopefully it will bring memories to other people as well.

// I can't find the mistake I did, it should stop at 10 points, but doesn't. 

let player1 = {
  x: 50,
  y: 200,
  score: 0,
  speed: 80 // increase speed
};

let player2 = {
  x: 1050,
  y: 200,
  score: 0,
  speed: 80 // increase speed
};

let ball = {
  x: 600,
  y: 400,
  xspeed: 7,
  yspeed: 7,
  size: 20
};

let gameOver = false;

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(0);
  
  // Draw players
  fill(255);
  rect(player1.x, player1.y, 20, 100);
  rect(player2.x, player2.y, 20, 100);
  
  // Draw ball
  ellipse(ball.x, ball.y, ball.size);
  
  // Update ball position
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
  
  // Check for collision with players
  if (ball.x < player1.x + 20 && ball.y > player1.y && ball.y < player1.y + 100) {
    ball.xspeed *= -1;
  }
  if (ball.x > player2.x && ball.y > player2.y && ball.y < player2.y + 100) {
    ball.xspeed *= -1;
  }
  
  // Check for ball going out of bounds
  if (ball.x < 0) {
    player2.score++;
    checkGameOver();
    resetBall();
  }
   if (ball.x > 1200) {
    player1.score++;
    checkGameOver();
    resetBall();
  }

  if (ball.y < 0 || ball.y > 800) {
    ball.yspeed *= -1;
    
  }
  // Draw scores
  textSize(48);
  fill(255);
  text(player1.score, 450, 100);
  text(player2.score, 750, 100);
  
  // Draw game over message
  
}

function resetBall() {
  ball.x = (100,900);
  ball.y = random(300, 500);
  ball.xspeed *= -1;
  ball.yspeed *= random(-1.2, 1.2); // add some randomness to the y speed
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player2.y -= player2.speed; // increase speed
  }
  if (keyCode === DOWN_ARROW) {
    player2.y += player2.speed; // increase speed
  }
  if (key === 'w') {
    player1.y -= player1.speed; // increase speed
  }
  if (key === 's') {
    player1.y += player1.speed; // increase speed
  }
}

function mousePressed() { // reset game on mouse click
  if (gameOver) {
    gameOver = False;
    player1.score = 0;
    player2.score = 0;
    resetBall();
  }
}

function checkGameOver() {
  if (player1.score === 10) {
    background (0)
    textSize(50);
    fill(34, 140, 219);
    textAlign(CENTER);
    text( "Player 1 Wins!",400, 500)
    text(" Mouse click to Restart", 400, 400);
  }
  
  if (player2.score === 10) {
    background (0)
    textSize(50);
    fill(34, 140, 219);
    textAlign(CENTER);
    text( "Player 2 Wins!",400, 500)
    text(" Mouse click to Restart", 400, 400);
  }
  
}
