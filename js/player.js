const destroyPlayer = () => {
  document.querySelector(".frame").innerHTML = "";
}

const movePlayer = (direction) => {
  const player_pos = document.querySelector(".player").style;;
  let movement = 0;
  if(direction==="left")
    movement = (parseFloat(player_pos.marginLeft) - PLAYER_SPEED);
  else if(direction==="right")
    movement = (parseFloat(player_pos.marginLeft) + PLAYER_SPEED);
  if(movement>0 && movement<100-PLAYER_WIDTH){
    const new_player_pos = movement.toString()+"%";
    player_pos.marginLeft = new_player_pos;
  }
}

const constructPlayer = () => {
  const newPlayer = document.createElement("div")
  newPlayer.style.width = PLAYER_WIDTH.toString()+"%"; 
  newPlayer.style.marginLeft = (50 - PLAYER_WIDTH/2).toString()+"%"; 
  newPlayer.className = "player";
  document.querySelector(".movement-frame").appendChild(newPlayer);
  
  document.addEventListener('keydown', (event) => {
    const keyCode = event.code;
    if(keyCode==="ArrowLeft") movePlayer("left");
    else if(keyCode==="ArrowRight") movePlayer("right"); 
    if(keyCode==="Space"){
      const player_pos = document.querySelector(".player").getBoundingClientRect();
      const player_center= player_pos.left+(player_pos.width/2);
      constructPlayerBullet(player_pos.top,player_center);
    }
  });
}



// document.addEventListener('keyup', (event) => {
//   const keyCode = event.code;
//   if(keyCode==="ArrowLeft") console.log("stop")
// });