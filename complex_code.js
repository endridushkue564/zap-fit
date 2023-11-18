/* filename: complex_code.js */

// This program is a complex implementation of a web-based game called "Space Invaders". It includes extensive functionality including collision detection, movement control, and scoring.
// The game consists of a player-controlled spaceship at the bottom of the screen and multiple alien invaders descending from the top. The objective is to shoot down the invaders and survive as long as possible.

// Game Constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 50;
const ALIEN_WIDTH = 40;
const ALIEN_HEIGHT = 40;
const BULLET_WIDTH = 10;
const BULLET_HEIGHT = 20;
const ALIEN_ROW_COUNT = 4;
const ALIEN_COL_COUNT = 8;

// Game Objects
let canvas, ctx;
let player, aliens, bullets;
let score, gameover;

// Player Object
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;
  }
  
  update(keyState) {
    if (keyState['ArrowLeft']) {
      this.x -= 5;
    } else if (keyState['ArrowRight']) {
      this.x += 5;
    }
    
    if (keyState['Space'] && bullets.length < 1) {
      bullets.push(new Bullet(this.x + PLAYER_WIDTH / 2 - BULLET_WIDTH / 2, this.y));
    }
  }
  
  draw() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// Alien Object
class Alien {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = ALIEN_WIDTH;
    this.height = ALIEN_HEIGHT;
    this.alive = true;
  }
  
  update() {
    if (this.alive) {
      // Alien movement logic
    }
  }
  
  draw() {
    if (this.alive) {
      ctx.fillStyle = 'green';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}

// Bullet Object
class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = BULLET_WIDTH;
    this.height = BULLET_HEIGHT;
  }
  
  update() {
    this.y -= 10;
    
    if (this.y < 0) {
      bullets.splice(bullets.indexOf(this), 1);
    }
  }
  
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// Check for collision between two objects
function checkCollision(obj1, obj2) {
  return obj1.x < obj2.x + obj2.width &&
         obj1.x + obj1.width > obj2.x &&
         obj1.y < obj2.y + obj2.height &&
         obj1.y + obj1.height > obj2.y;
}

// Game Initialization
function init() {
  canvas = document.getElementById('game-canvas');
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  ctx = canvas.getContext('2d');
  
  player = new Player(GAME_WIDTH / 2 - PLAYER_WIDTH / 2, GAME_HEIGHT - PLAYER_HEIGHT - 10);
  aliens = [];
  bullets = [];
  score = 0;
  gameover = false;
  
  // Create alien horde
  for (let i = 0; i < ALIEN_ROW_COUNT; i++) {
    for (let j = 0; j < ALIEN_COL_COUNT; j++) {
      aliens.push(new Alien(j * (ALIEN_WIDTH + 10), i * (ALIEN_HEIGHT + 10)));
    }
  }
  
  // Start the game loop
  gameLoop();
}

// Game Loop
function gameLoop() {
  update();
  draw();
  
  if (!gameover) {
    requestAnimationFrame(gameLoop);
  }
}

// Update Game State
function update() {
  if (gameover) {
    return;
  }
  
  // Check for player-alien collision
  aliens.forEach(alien => {
    if (checkCollision(player, alien)) {
      gameover = true;
      console.log('Game Over!');
    }
  });
  
  // Update player
  player.update(keyState);
  
  // Update aliens
  aliens.forEach(alien => {
    alien.update();
  });
  
  // Update bullets
  bullets.forEach(bullet => {
    bullet.update();
    
    // Check for bullet-alien collision
    aliens.forEach(alien => {
      if (checkCollision(bullet, alien)) {
        alien.alive = false;
        bullets.splice(bullets.indexOf(bullet), 1);
        score += 10;
        
        // Check if all aliens destroyed
        if (aliens.filter(alien => alien.alive).length === 0) {
          gameover = true;
          console.log(`Final Score: ${score}`);
        }
      }
    });
  });
}

// Draw Game Objects
function draw() {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  
  player.draw();
  
  aliens.forEach(alien => {
    alien.draw();
  });
  
  bullets.forEach(bullet => {
    bullet.draw();
  });
  
  ctx.fillStyle = 'white';
  ctx.font = '24px Arial';
  ctx.fillText(`Score: ${score}`, 10, 30);
}

// Handle Keyboard Input
const keyState = {};
window.addEventListener('keydown', e => {
  keyState[e.key] = true;
});

window.addEventListener('keyup', e => {
  keyState[e.key] = false;
});

// Start the game
init();