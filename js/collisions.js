const check_collision = (bullet) => {
    document.querySelectorAll(".wall").forEach((elem)=>{

        if(elem.getBoundingClientRect().bottom>300){
            destroy_wall(elem)
        };
    
    })	
}