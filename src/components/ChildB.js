import React from "react";
import ChildC from "./ChildC";
function ChildB(props) {

    return(
        <ChildC name={props.name}/>
    )


}
 
export default ChildB;