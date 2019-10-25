var total_enemys = 84;
var max_enemys_line = 14;
var enemys = [];
var enemys_speed = 5;
var actualX = 60;
var actualY = 10;
var initX=60;
var maxX;
var moveY = false;


//gameLoop();

function construct_enemy(id,positionX,positionY){
	if(document.getElementById('enemies').innerHTML==null){
		document.getElementById('enemies').innerHTML="";
	}
	document.getElementById('enemies').innerHTML += "<div id='enemy"+id+"' class='enemies_character' style='left:"+positionX+"px;top: "+positionY+"px' ></div>";
		
}

function create_all_enemies(total,max){
	for(actual_enemy=1;actual_enemy<=total_enemys;actual_enemy++){
		enemys.push("enemy"+actual_enemy);
		construct_enemy(actual_enemy,actualX,actualY);
		actualX=actualX+50;
		if( (actual_enemy % max_enemys_line) == 0){
			actualY=actualY+40;
			maxX = actualX;
			actualX=60;
		}
	}
}

function move_enemyY(id){
	document.getElementById(id).style.top = get_int_top(id) + 5 + 'px';
}
function move_enemy(id){
	if ( (get_int_left(id) + enemys_speed) <= initX ){
		//enemys_speed = enemys_speed * -1;
		moveY=true;
	}else if ( ( get_int_left(id) + enemys_speed) >= maxX+20 ){
		//enemys_speed = enemys_speed * - 1;
		moveY=true;
	}

	if(moveY==true){
		
		for(var actual_enemy = enemys.length; actual_enemy >=1 ; actual_enemy--){
			move_enemyY(enemys[actual_enemy-1]);
		}
		moveY=false;
		enemys_speed = enemys_speed * -1;
	}

	document.getElementById(id).style.left = get_int_left(id) + enemys_speed + 'px';

	console.log("moviendo" + enemys_speed);
}

function get_int_left(id){
	return parseInt((document.getElementById(id).style.left).match(/\d+/g).map(Number))
}
function get_int_top(id){
	return parseInt((document.getElementById(id).style.top).match(/\d+/g).map(Number))
}

function move_all_enemies(){
	for(var actual_enemy = enemys.length; actual_enemy >=1 ; actual_enemy--){
		move_enemy(enemys[actual_enemy-1]);
	}
}

/*
function gameLoop(){
	setTimeout(gameLoop, 100)
	move_all_enemies();
	//collisionCheck();
}
*/


/*
const destroy_enemy = () => {

}

const construct_enemies = (speed) => {
	
}

const construct_enemy_bullet = () => {

}

const move_enemies = setInterval(()=>{

}, speed)*/