const SCREEN= document.querySelector('body').getBoundingClientRect();
const GAME_SCREEN= document.querySelector('.frame').getBoundingClientRect();
const GAME_BORDER_TOP = GAME_SCREEN.top-SCREEN.top;
const GAME_BORDER_BOTTOM = GAME_BORDER_TOP+GAME_SCREEN.height;
const GAME_SPEED = 50; //in ms

const ENEMY_SPEED = 500; // in ms
const ENEMY_SHOOTING_CHANCE = 0.2;
const ENEMY_STEP = 2.5; // in ms
const ENEMY_STEP_DOWN = 1; // in ms
const ENEMY_NUMBER_ROW = 10; // in ms
const ENEMY_NUMBER_COLUMN = 5; // in ms
const ENEMY_WIDTH = 6; //in %
const ENEMY_HEIGHT = 10; //in %

const PLAYER_SPEED = 0.5; //in %
const PLAYER_WIDTH = 5; //in %

const BULLET_WIDTH = 1; //in %
const BULLET_HEIGHT = 4; //in %
const BULLET_WIDTH_PX = (GAME_SCREEN.width/100)*BULLET_WIDTH;
const BULLET_HEIGHT_PX = (GAME_SCREEN.height/100)*BULLET_HEIGHT;

const WALL_BLOCKS_COLUMNS = 6;
const WALL_BLOCKS_ROWS = 4;
const WALL_RESISTANCE = 4; //