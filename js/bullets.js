var player_bullet = [];
var enemy_bullet = [];
var bullet_speed=100;

document.onkeydown = function(e){
	console.log(e.keyCode);

	if(e.keyCode==32) {
		player_bullet.push({
			//left: player_left + 19,
			//top: player_top
			left:700,
			top:700
		})

		//De momento en el espacio, son de los enemigos
		enemy_bullet.push({
			//left: enemy_left + 19,
			//top: enemy_top
			left:700,
			top:100
		})
		console.log(player_bullet);
		console.log(enemy_bullet);
		//draw_bullet();
		gameLoop();
	}
}


function draw_enemy_bullet(){
	document.getElementById('enemy_bullet').innerHTML ="";
	for( var bullet = 0; bullet < enemy_bullet.length; bullet=bullet+1){
		if(enemy_bullet[bullet].top < 743){
			document.getElementById('enemy_bullet').innerHTML += `<div class='bullet_enemies' style='left:${enemy_bullet[bullet].left}px; top:${enemy_bullet[bullet].top}px;'></div>`;
		}
		else{
			document.getElementById('enemy_bullet').innerHTML="";
			enemy_bullet.shift();
		}
	}
}

function move_enemy_bullet(){
	for( var bullet = 0; bullet < enemy_bullet.length; bullet=bullet+1){

		enemy_bullet[bullet].top = enemy_bullet[bullet].top + 5;
	}
}

function draw_player_bullet(){
	document.getElementById('player_bullet').innerHTML ="";
	for( var bullet = 0; bullet < player_bullet.length; bullet=bullet+1){
		if(player_bullet[bullet].top > 0){
			document.getElementById('player_bullet').innerHTML += `<div class='bullet_player' style='left:${player_bullet[bullet].left}px; top:${player_bullet[bullet].top}px;'></div>`;
		}
		else{
			document.getElementById('player_bullet').innerHTML="";
			player_bullet.shift();
		}

	}
}

function move_player_bullet(){
	for( var bullet = 0; bullet < player_bullet.length; bullet=bullet+1){
		
		player_bullet[bullet].top = player_bullet[bullet].top - 5;
	}
}

function gameLoop(){
	setTimeout(gameLoop, bullet_speed)
	move_player_bullet();
	draw_player_bullet();
	move_enemy_bullet();
	draw_enemy_bullet();
	//collisionCheck();
}
