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
const checkEnemyColision = () => {
    
}