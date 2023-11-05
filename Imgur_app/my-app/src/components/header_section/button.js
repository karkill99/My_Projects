import React from 'react';
function Button (prop){
    return(
        <button id={prop.id} style={{backgroundColor:prop.color}} >{prop.name}</button>
    )
} 
export default Button