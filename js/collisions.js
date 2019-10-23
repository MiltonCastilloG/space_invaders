const check_collision = (bullet) => {
    document.querySelectorAll(".destructable").forEach((elem)=>{
        if(elem.getBoundingClientRect().top>300){
            destroy_wall(elem)
        };
    })	
}