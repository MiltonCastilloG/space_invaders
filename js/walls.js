const destroyWall = (elem) => {
    elem.className="wall-part destroyed";
}

const constructWall = () => {
    const blocks_width = 100/WALL_BLOCKS_COLUMNS;
    const blocks_height = 100/WALL_BLOCKS_ROWS;
    const total_blocks = WALL_BLOCKS_COLUMNS * WALL_BLOCKS_ROWS;
    document.querySelectorAll(".wall").forEach((elem)=>{
        for(let i=0; i<total_blocks; i++){
            const newDiv = document.createElement("div")
            newDiv.style.cssText = `width: ${blocks_width}%; height: ${blocks_height}%`; 
            newDiv.className = "wall-part wall-destructable";
            elem.appendChild(newDiv);
        }
    });
}