import React from "react";

function First(props){
    
    return(
        <>
            <h2>{props.title} : {props.formatTime(props.time)}</h2>
        </>
    )
}
export default First