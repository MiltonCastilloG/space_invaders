var player_bullets = [];
var enemy_bullets = [];

//Draw functions
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

const movePlayerBullets = () =>{
	const bullet = document.querySelector(".bullet_player");
	if(bullet !== null){
		const bullet_bound = bullet.getBoundingClientRect();
		const next_pos = bullet_bound.top - bullet_bound.height;
		if(checkCollision(next_pos, bullet_bound))
			bullet.parentNode.removeChild(bullet);
		else if(next_pos-bullet_bound.height<GAME_BORDER_TOP)
			bullet.parentNode.removeChild(bullet);
		else
			bullet.style.top = next_pos.toString() +"px";
	}
}

function moveEnemyBullets(){
	const bullets = document.querySelectorAll(".bullet_enemy");
	if(bullets.length != 0){
		bullets.forEach((bullet)=>{
			const bullet_bound = bullet.getBoundingClientRect();
			const next_pos = bullet_bound.top + bullet_bound.height;
			if(checkCollision(next_pos, bullet_bound))
				bullet.parentNode.removeChild(bullet);
			else if(next_pos+bullet_bound.height<GAME_BORDER_BOTTOM)
				bullet.parentNode.removeChild(bullet);
			else
				bullet.style.top = next_pos.toString() +"px";
		});
	}
}

//Called function from player
const constructPlayerBullet = (top, center) => {
	const bullet = document.querySelector(".bullet_player");
	if(bullet==null)
		document.querySelector('.frame').innerHTML += `<div class='bullet_player' style='top:${top}px; left:${center-BULLET_WIDTH_PX}px; width:${BULLET_WIDTH}%; height:${BULLET_HEIGHT}%;'></div>`;
}

//Called function from enemies
function construct_enemy_bullet(bottom, center){
	document.querySelector('.frame').innerHTML += `<div class='enemy_player' style='bottom:${bottom}px; left:${center-BULLET_WIDTH_PX}px; width:${BULLET_WIDTH}%; height:${BULLET_HEIGHT}%;'></div>`;
}

//Time loop for redraw the movement
// function gameLoop(){
// 	console.log("sfs")
// 	move_player_bullets();
// 	// move_enemy_bullets();
// 	// draw_enemy_bullets();
// 	// collisionCheck();
// }
const gameLoop = setInterval(()=>{
	movePlayerBullets();
}, 50);