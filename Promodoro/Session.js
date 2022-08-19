import React from "react";
function Session(props){
    return(
        <>
            <h2>{props.title} : {props.formatTime(props.time)}</h2>
        </>
    )
}
export default Session