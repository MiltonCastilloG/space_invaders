const checkCollision = (bullet_next_pos,bullet_bound) => {
    const walls = document.querySelectorAll(".wall-destructable");
    for(const elem of walls){
        wall = elem.getBoundingClientRect();
        if(wall.bottom>bullet_next_pos && wall.top<bullet_next_pos && wall.left<bullet_bound.right && wall.right>bullet_bound.left){
            destroyWall(elem)
            return true;
        };
    }
    const enemies = document.querySelectorAll(".enemy-destructable");
    for(const elem of enemies){
        enemy = elem.getBoundingClientRect();
        if(enemy.bottom>bullet_next_pos && enemy.top<bullet_next_pos && enemy.left<bullet_bound.right && enemy.right>bullet_bound.left){
            destroyEnemy(elem)
            return true;
        };
    }
}
const checkEnemyBulletCollision = (bullet_next_pos,bullet_bound) => {
    const walls = document.querySelectorAll(".wall-destructable");
    for(const elem of walls){
        wall = elem.getBoundingClientRect();
        if(wall.bottom>bullet_next_pos && wall.top<bullet_next_pos && wall.left<bullet_bound.right && wall.right>bullet_bound.left){
            destroyWall(elem)
            return true;
        };
    }
    const player = document.querySelector(".player");
    const player_pos = player.getBoundingClientRect();
    if(player_pos.top<=bullet_next_pos&&player_pos.bottom>=bullet_next_pos && player_pos.left<bullet_bound.right && player_pos.right>bullet_bound.left){
        alert("HAS PERDIDO");
        const frame = document.querySelector(".frame");
        while (frame.firstChild) {
            frame.removeChild(frame.firstChild);
        }
        return true;
    }

}
const checkEnemyColision = () => {
    const enemies = document.querySelectorAll(".enemy-destructable");
    const wall_frame = document.querySelector(".wall-frame");
    const player = document.querySelector(".player");
    for(const elem of enemies){
        const enemy = elem.getBoundingClientRect();
        if(wall_frame!=null){
            const wall = wall_frame.getBoundingClientRect();
            if(wall.top<=enemy.bottom && wall_frame.firstChild != null){
                while (wall_frame.firstChild) {
                    wall_frame.removeChild(wall_frame.firstChild);
                }
                alert("TE HAN DESTRUIDO LAS DEFENSAS");
                return false;
            }
        }
        const player_pos = player.getBoundingClientRect();
        if(player_pos.top<=enemy.bottom){
            player.parentNode.removeChild(player);
            alert("HAS PERDIDO");
            return true;
        }
    };
}