const destroy_wall = (elem) => {
    elem.className="wall-part destroyed";
}

const construct_walls = () => {
    const blocksPerColumn = 4;
    const blocksPerRow = 4;
    document.querySelectorAll(".wall").forEach((elem)=>{
        for(let i=0; i<4*4; i++){
            const newDiv = document.createElement("div")
            newDiv.className = "wall-part";
            elem.appendChild(newDiv)
        }
    });
}

