"use strict";
$(document).ready(() => {


    $("#image_rollovers img").each( (index, img) => {
        const oldURL = img.src;
        const newURL = img.id;
    

        const rolloverImage = new Image();
        rolloverImage.src = newURL;


        $(img).mouseover( () => img.src = newURL );
        $(img).mouseout( () => img.src = oldURL );
    
        // $(img).hover(   
        //     () => img.src = newURL,  // hover over
        //     () => img.src = oldURL   // hover out
        //);
    }); 
});