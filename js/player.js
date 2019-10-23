const destroy_player = () => {
  document.querySelector(".frame").innerHTML = "";
}

const move_player = (direction) => {
  const player_pos = document.querySelector(".player").style;
  let movement = 0;
  if(direction==="right")
    movement = (parseFloat(player_pos.marginLeft) - player_speed);
  else if(direction==="left")
    movement = (parseFloat(player_pos.marginLeft) + player_speed);
  if(movement>0 && movement<100-player_width){
    const new_player_pos = movement.toString()+"%";
    player_pos.marginLeft = new_player_pos;
  }
}

const construct_player = () => {
  const newPlayer = document.createElement("div")
  newPlayer.style.width = player_width.toString()+"%"; 
  newPlayer.style.marginLeft = (50 - player_width/2).toString()+"%"; 
  newPlayer.className = "player";
  document.querySelector(".movement-frame").appendChild(newPlayer);
}

document.addEventListener('keypress', (event) => {
  const keyCode = event.keyCode;
  if(keyCode===100) move_player("left");
  else if(keyCode===97) move_player("right");
  else if(keyCode===32){
    const player_pos = player.getBoundingClientRect();
    const player_center= player_pos.left+(player_pos.width/2);
    construct_player_bullet(player_pos.top,player_center);
  } 
});