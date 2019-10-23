var player_bullets = [];
var enemy_bullets = [];
var bullets_speed=100;

document.onkeydown = function(e){
	console.log(e.keyCode);

	if(e.keyCode==32) {
		player_bullets.push({
			//left: player_left + 19,
			//top: player_top
			left:700,
			top:700
		})

		//De momento en el espacio, son de los enemigos
		enemy_bullets.push({
			//left: enemy_left + 19,
			//top: enemy_top
			left:700,
			top:100
		})
		console.log(player_bullets);
		console.log(enemy_bullets);
		//draw_bullet();
		gameLoop();
	}
}


function draw_enemy_bullets(){
	document.getElementById('enemy_bullets').innerHTML ="";
	for( var bullet = 0; bullet < enemy_bullets.length; bullet=bullet+1){
		if(enemy_bullets[bullet].top < 743){
			document.getElementById('enemy_bullets').innerHTML += `<div class='bullet_enemies' style='left:${enemy_bullets[bullet].left}px; top:${enemy_bullets[bullet].top}px;'></div>`;
		}
		else{
			document.getElementById('enemy_bullets').innerHTML="";
			enemy_bullets.shift();
		}
	}
}

function move_enemy_bullets(){
	for( var bullet = 0; bullet < enemy_bullets.length; bullet=bullet+1){

		enemy_bullets[bullet].top = enemy_bullets[bullet].top + 5;
	}
}

function draw_player_bullets(){
	document.getElementById('player_bullets').innerHTML ="";
	for( var bullet = 0; bullet < player_bullets.length; bullet=bullet+1){
		if(player_bullets[bullet].top > 0){
			document.getElementById('player_bullets').innerHTML += `<div class='bullet_player' style='left:${player_bullets[bullet].left}px; top:${player_bullets[bullet].top}px;'></div>`;
		}
		else{
			document.getElementById('player_bullets').innerHTML="";
			player_bullets.shift();
		}

	}
}

function move_player_bullets(){
	for( var bullet = 0; bullet < player_bullets.length; bullet=bullet+1){
		
		player_bullets[bullet].top = player_bullets[bullet].top - 5;
	}
}

const construct_player_bullet = (top, center) => {

}
const construct_enemy_bullet = (bottom, center) => {

}

function gameLoop(){
	setTimeout(gameLoop, bullets_speed)
	move_player_bullets();
	draw_player_bullets();
	move_enemy_bullets();
	draw_enemy_bullets();
	//collisionCheck();
}