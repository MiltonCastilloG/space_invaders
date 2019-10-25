const player_bullets = [];
const enemy_bullets = [];

function draw_enemy_bullets(){
	document.getElementById('enemy_bullets').innerHTML ="";
	for( const bullet = 0; bullet < enemy_bullets.length; bullet=bullet+1){
		if(enemy_bullets[bullet].top < 743){
			document.getElementById('enemy_bullets').innerHTML += `<div class='bullet_enemies' style='center:${enemy_bullets[bullet].center}px; top:${enemy_bullets[bullet].top}px;'></div>`;
		}
		else{
			document.getElementById('enemy_bullets').innerHTML="";
			enemy_bullets.shift();
		}
	}
}

function move_enemy_bullets(){
	for( const bullet = 0; bullet < enemy_bullets.length; bullet=bullet+1){

		enemy_bullets[bullet].top = enemy_bullets[bullet].top + 5;
	}
}

function draw_player_bullets(){
	document.getElementById('player_bullets').innerHTML ="";
	for( const bullet = 0; bullet < player_bullets.length; bullet=bullet+1){
		if(player_bullets[bullet].top > 0){
			document.getElementById('player_bullets').innerHTML += `<div class='bullet_player' style='center:${player_bullets[bullet].center}px; top:${player_bullets[bullet].top}px;'></div>`;
		}
		else{
			document.getElementById('player_bullets').innerHTML="";
			player_bullets.shift();
		}

		enemy_bullet[bullet].top = enemy_bullet[bullet].top + 5;
	}
}

function move_player_bullets(){
	for( const bullet = 0; bullet < player_bullets.length; bullet=bullet+1){
		
		player_bullets[bullet].top = player_bullets[bullet].top - 5;
	}
}

function construct_player_bullet = (top, center) => {
	player_bullets.push({
			center: center,
			top: top
	})
}
function construct_enemy_bullet = (bottom, center) => {
	enemy_bullets.push({
			center: center,
			top: top
	})
}

function gameLoop(){
	setTimeout(gameLoop, bullets_speed)
	move_player_bullets();
	draw_player_bullets();
	move_enemy_bullets();
	draw_enemy_bullets();
	collisionCheck();
}
