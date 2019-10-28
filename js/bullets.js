const movePlayerBullet = () =>{
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
			console.log(bullet_bound)
			const next_pos = bullet_bound.top + bullet_bound.height;
			if(checkEnemyBulletCollision(next_pos, bullet_bound))
				bullet.parentNode.removeChild(bullet);
			else if(next_pos>GAME_BORDER_BOTTOM)
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
function constructEnemyBullet(top, center){
	const newDiv = document.createElement("div");
	newDiv.style.cssText = `top:${top+BULLET_HEIGHT}px; right:${center-BULLET_WIDTH_PX}px; width:${BULLET_WIDTH}%; height:${BULLET_HEIGHT}%; position: absolute; background-image: url('./img/enemies_bullet.png');`; 
    newDiv.className = "bullet_enemy";
	document.querySelector('.frame').appendChild(newDiv);
}

const gameLoop = setInterval(()=>{
	movePlayerBullet();
	moveEnemyBullets();
}, 50);