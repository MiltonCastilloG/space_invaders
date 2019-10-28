let direction = "right";

function moveAllEnemies(move_down){
    //document.querySelector(".enemy-row").style.marginLeft="5%";
    const enemy_pos = document.querySelector(".enemy-row").style;
    let movement = 0;
    if(direction==="left")
        movement = (parseFloat(enemy_pos.marginLeft) - ENEMY_STEP);
    else if(direction==="right")
        movement = (parseFloat(enemy_pos.marginLeft) + ENEMY_STEP);
    if(movement>=100-ENEMY_NUMBER_ROW*ENEMY_WIDTH){
        direction = "left"
        moveAllEnemies(true);
    }
    else if(movement<=0){
        direction = "right"
        moveAllEnemies(true);
    }
    else{
        const new_enemy_pos = movement.toString()+"%";
        enemy_pos.marginLeft = new_enemy_pos;
        if(move_down){
            const down_movement = parseFloat(enemy_pos.paddingTop) + ENEMY_STEP_DOWN;
            enemy_pos.paddingTop = down_movement.toString()+"%";
            checkEnemyColision();
        }
    }
}

const destroyEnemy = (elem) => {
    elem.className="wall-part destroyed";
}

const constructEnemies = () => {
    const total_blocks = ENEMY_NUMBER_COLUMN * ENEMY_NUMBER_ROW;
    const frame = document.querySelector(".uppart-frame");
    const row = document.createElement("div");
    row.style.cssText = `width:${ENEMY_NUMBER_ROW*ENEMY_WIDTH}%; height:${ENEMY_HEIGHT}%; margin-left: 1%; padding-top: 1%;`; 
    row.className = "enemy-row";
    frame.appendChild(row);
    for(let i = 0; i<total_blocks; i++){
        const newDiv = document.createElement("div");
        newDiv.style.cssText = `width: ${100/ENEMY_NUMBER_ROW}%; height: 100%;`; 
        newDiv.className = "enemy enemy-destructable";  
        row.appendChild(newDiv);
    }

	//document.getElementById('enemies').innerHTML += "<div id='enemy"+id+"' class='enemies_character' style='left:"+positionX+"px;top: "+positionY+"px' ></div>";
}

const constructEnemyBullet = () => {

}


const move_enemies = setInterval(()=>{
    moveAllEnemies(false);
}, ENEMY_SPEED)